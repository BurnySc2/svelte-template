import { z } from "zod"

export const CounterDataSchema = z.object({
    my_counter_state: z.number().default(0),
    my_counter_writeable: z.number().default(0),
})

export type TCounterData = z.infer<typeof CounterDataSchema>

export const default_counter_data: TCounterData = {
    my_counter_state: 0,
    my_counter_writeable: 0,
}

export const PermaStateSchema = z.object({
    loading: z.boolean(),
    data: CounterDataSchema,
})

export type TPermaState = z.infer<typeof PermaStateSchema>
