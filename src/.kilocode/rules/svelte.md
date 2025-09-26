# Svelte 5

In svelte projects, use svelte 5 standard syntax.

## Svelte structure

Keep logic at the top and html structure at the bottom.

## $state

```
<script lang="ts">
	let count = $state(0)
</script>
```

## $derived

```
<script lang="ts">
	let count = $state(0);
	let doubled = $derived(count * 2)
</script>
```

## $props

```
<script lang="ts">
    type Props = {
        adjective:  'happy' | 'sad'
    }
    let { adjective = 'happy' }: Props = $props()
</script>
```

## $bindable

```
<script lang="ts">
	let { value = $bindable(), ...props } = $props()
</script>
```
