<script>
	import List from "./components/List.svelte"

	let categories = [
		{
			id: 1,
			title: 'Kategori 1'
		},
		{
			id: 2,
			title: 'Kategori 2'
		},
		{
			id: 3,
			title: 'Kategori 3'
		},
		{
			id: 4,
			title: 'Kategori 4'
		},
		{
			id: 5,
			title: 'Kategori 5'
		}
	]
	let selected = [2, 5]
	let query = 'test'

</script>

<List categories={categories} bind:selected={selected} bind:query={query} />

{JSON.stringify(selected)}
{query}