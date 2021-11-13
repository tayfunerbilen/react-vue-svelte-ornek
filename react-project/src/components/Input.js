function Input({ query, setQuery }) {
    return (
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
    )
}

export default Input