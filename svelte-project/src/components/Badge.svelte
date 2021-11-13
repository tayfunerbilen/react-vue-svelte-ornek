<script>
    export let category
    export let toggleSelected
</script>

<button on:click={() => toggleSelected(category)}>
    {category.title}
</button>