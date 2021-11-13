import List from "./components/List"
import {useState} from "react";

function App() {

  const [categories, setCategories] = useState([
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
  ])
  const [selected, setSelected] = useState([2, 5])
  const [query, setQuery] = useState('')

  // kategoriler
  // seçilen kategoriler
  // arama

  return (
    <>
      <List selected={selected} categories={categories} query={query} setQuery={setQuery} setSelected={setSelected} />
      <pre>{JSON.stringify(selected)}</pre>
      <pre>{query}</pre>
    </>
  );
}

export default App;
