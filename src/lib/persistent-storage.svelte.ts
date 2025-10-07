import { writable, get } from 'svelte/store'
import { browser } from '$app/environment'

// A simple class that keeps a state in sync with localStorage
// Should only be used inside one component
class LocalStorageState<T> {
	key = ''
	#value = $state<T>() as T

	constructor(key: string, default_value: T) {
		this.key = key
		this.#value = default_value
		if (browser) {
			const item = localStorage.getItem(this.key)
			if (item) {
				this.#value = this.deserialize(item)
			} else {
				localStorage.setItem(this.key, this.serialize(this.#value))
			}
		}
		this.async_constructor()
	}

	async async_constructor(): Promise<void> {}

	get value(): T {
		return this.#value
	}

	set value(new_value: T) {
		this.#value = new_value
		if (browser) {
			localStorage.setItem(this.key, this.serialize(this.#value))
		}
	}

	serialize(value: T): string {
		return JSON.stringify(value)
	}
	deserialize(value: string): T {
		return JSON.parse(value)
	}
}

export const use_local_storage_state = <T>(key: string, default_value: T) => {
	return new LocalStorageState<T>(key, default_value)
}

// A simple function to initialize a writable that can be used in multiple components
// while keeping the value in sync with localStorage
export const use_local_storage_writeable = <T>(key: string, value: T) => {
	// Initialize the store
	let my_writable = writable<T>(value)

	// Load value from localStorage
	if (browser) {
		const item = localStorage.getItem(key)
		if (item) {
			my_writable.set(JSON.parse(item))
		} else {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	// On change, save to localStorage
	my_writable.subscribe((new_value: T) => {
		if (browser) {
			localStorage.setItem(key, JSON.stringify(new_value))
		}
	})

	return my_writable
}

export const my_counter_state = use_local_storage_state('my_counter_state', 0)

// Declare global variables in this file to access them globally via `$my_var`
// Update them via `$my_var += 1` or `$my_var = new_value`
export const my_counter_writable = use_local_storage_writeable('my_counter_writeable', 0)
