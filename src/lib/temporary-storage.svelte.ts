export class TemporaryState<T> {
	#value = $state<T>() as T

	constructor(value: T) {
		this.#value = value
	}

	get value(): T {
		return this.#value
	}

	set value(new_value: T) {
		this.#value = new_value
	}
}

export const use_temporary_state = <T>(value: T) => {
	return new TemporaryState<T>(value)
}

export const my_temporary_counter = use_temporary_state(0)
