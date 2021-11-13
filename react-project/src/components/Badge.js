function Badge({ category, toggleSelected }) {
    return (
        <button onClick={() => toggleSelected(category)}>
            {category.title}
        </button>
    )
}

export default Badge