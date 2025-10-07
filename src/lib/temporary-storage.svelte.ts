class TemporaryState<T> {
	#value = $state<T>() as T

	constructor(default_value: T) {
		this.#value = default_value
	}

	get value(): T {
		return this.#value
	}

	set value(new_value: T) {
		this.#value = new_value
	}
}

export const use_temporary_state = <T>(default_value: T) => {
	return new TemporaryState<T>(default_value)
}

export const my_temporary_counter = use_temporary_state(0)
