<script>
    import Badge from "./Badge.svelte";
    import Input from "./Input.svelte";

    export let categories
    export let selected
    export let query

    $: selectedCategories = selected.map(catId => categories.find(c => c.id === catId))

    const toggleSelected = category => {
        if (selected.includes(category.id)) {
            selected = selected.filter(catId => catId !== category.id)
        } else {
            selected = [...selected, category.id]
        }
    }
</script>

<section>
    <Input bind:query={query} />
    {query}
    <h3>Selected Categories</h3>
    {#if selectedCategories.length}
        {#each selectedCategories as category (category.id)}
            <Badge toggleSelected={toggleSelected} category={category}/>
        {/each}
    {:else}
        No category selected..
    {/if}
</section>

<section>
    <h3>Categories</h3>
    {#each categories as category (category.id)}
        <button on:click={() => toggleSelected(category)} class:active={selected.includes(category.id)}>
            {category.title}
        </button>
    {/each}
</section>

<style>
    button.active {
        background: orangered;
        color: #fff;
    }
</style>