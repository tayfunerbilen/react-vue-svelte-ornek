import Badge from "./Badge";
import Input from "./Input";
import {useMemo} from "react";

function List({categories, selected, setSelected, query, setQuery}) {

    const selectedCategories = useMemo(() => {
        console.log('selectedCategories')
        return selected.map(catId => categories.find(c => c.id === catId))
    }, [selected])

    const toggleSelected = category => {
        if (selected.includes(category.id)) {
            setSelected(selected.filter(catId => catId !== category.id))
        } else {
            setSelected([...selected, category.id])
        }
    }

    return (
        <>

            <section>

                <Input query={query} setQuery={setQuery}/>

                <h3>Selected Categories</h3>
                {selectedCategories.map(category => (
                    <Badge category={category} key={category.id} toggleSelected={toggleSelected}/>
                ))}
            </section>

            <section>
                <h3>Categories</h3>
                {categories.map(category => (
                    <button onClick={() => toggleSelected(category)}
                            className={selected.includes(category.id) ? 'active' : ''}
                            key={category.id}>{category.title}</button>
                ))}
            </section>

            <style>{`
              button.active {
                background: orangered;
                color: #fff;
              }
            `}</style>

        </>
    )
}

export default List