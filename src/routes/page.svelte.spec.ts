import { beforeEach, describe, expect, it } from "vitest"
import { page } from "vitest/browser"
import { render } from "vitest-browser-svelte"
import Page from "./+page.svelte"

describe("/+page.svelte", () => {
    beforeEach(() => {
        localStorage.clear()
        render(Page)
    })

    describe("rendering", () => {
        it("should render h1", async () => {
            const heading = page.getByRole("heading", { level: 1 })
            await expect.element(heading).toBeInTheDocument()
        })

        it("should show empty state initially", async () => {
            await expect.element(page.getByText("Add a todo to get started")).toBeInTheDocument()
        })
    })

    describe("adding todos", () => {
        it("should add a todo", async () => {
            const input = page.getByPlaceholder("Add a new task...")
            const add_button = page.getByRole("button", { name: "Add" })

            await input.fill("Test todo")
            await add_button.click()

            const todo_item = page.getByText("Test todo")
            await expect.element(todo_item).toBeInTheDocument()
        })

        it("should show completion count when adding todos", async () => {
            const input = page.getByPlaceholder("Add a new task...")
            const add_button = page.getByRole("button", { name: "Add" })

            await input.fill("Todo 1")
            await add_button.click()
            await page.getByRole("checkbox").click()

            await input.fill("Todo 2")
            await add_button.click()

            const count_text = page.getByText("1/2 completed")
            await expect.element(count_text).toBeInTheDocument()
        })

        it("should add empty todo when input is blank", async () => {
            const add_button = page.getByRole("button", { name: "Add" })
            await add_button.click()
            // Currently adds an empty todo - shows 0/1 completed
            await expect.element(page.getByText("0/1 completed")).toBeInTheDocument()
        })
    })

    describe("toggling todos", () => {
        it("should toggle todo completion", async () => {
            const input = page.getByPlaceholder("Add a new task...")
            const add_button = page.getByRole("button", { name: "Add" })

            await input.fill("Test todo")
            await add_button.click()

            const checkbox = page.getByRole("checkbox")
            await checkbox.click()

            await expect.element(checkbox).toBeChecked()
        })
    })

    describe("removing todos", () => {
        it("should remove a todo", async () => {
            const input = page.getByPlaceholder("Add a new task...")
            const add_button = page.getByRole("button", { name: "Add" })

            await input.fill("Test todo")
            await add_button.click()

            const remove_button = page.getByRole("button", { name: "Remove" })
            await remove_button.click()

            await expect.element(page.getByText("Test todo")).not.toBeInTheDocument()
        })
    })

    describe("filtering todos", () => {
        it("should filter todos by done status", async () => {
            const input = page.getByPlaceholder("Add a new task...")
            const add_button = page.getByRole("button", { name: "Add" })

            // Add two todos - one completed, one not
            await input.fill("Todo 1")
            await add_button.click()
            await page.getByRole("checkbox").click() // Mark first as done

            await input.fill("Todo 2")
            await add_button.click()

            // Test 'done' filter
            await page.getByRole("button", { name: "done" }).click()
            await expect.element(page.getByText("Todo 1")).toBeInTheDocument()
            await expect.element(page.getByText("Todo 2")).not.toBeInTheDocument()

            // Test 'todo' filter
            await page.getByRole("button", { name: "todo" }).click()
            await expect.element(page.getByText("Todo 2")).toBeInTheDocument()
            await expect.element(page.getByText("Todo 1")).not.toBeInTheDocument()

            // Test 'all' filter
            await page.getByRole("button", { name: "all" }).click()
            await expect.element(page.getByText("Todo 1")).toBeInTheDocument()
            await expect.element(page.getByText("Todo 2")).toBeInTheDocument()
        })
    })
})
