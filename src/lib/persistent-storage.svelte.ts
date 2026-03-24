import { browser } from "$app/environment"
import { CounterDataSchema, default_counter_data, type TPermaState } from "./types/persistent-storage"

export const perma_state: TPermaState = $state({
    loading: true,
    data: { ...default_counter_data },
})

$effect.root(() => {
    $effect.pre(() => {
        // Save data
        if (browser && !perma_state.loading) {
            localStorage.setItem("my_perma_state", JSON.stringify(perma_state.data))
        }
        // Load data
        if (browser && perma_state.loading) {
            perma_state.loading = false
            const data = localStorage.getItem("my_perma_state")
            if (data !== null) {
                perma_state.data = {
                    ...perma_state.data,
                    ...CounterDataSchema.parse(JSON.parse(data)),
                }
            }
        }
        $state.snapshot(perma_state.data)
    })
})
