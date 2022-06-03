import { useState } from "react"

const Filter = ({getSearchResults}) => {
    const [searchValue, setSearchValue] = useState('')

    const searchArticles = (e) => {
        e.preventDefault()
        getSearchResults(searchValue)
        setSearchValue('')
    }

    return (
        <form>
            <input type='text' name='search-bar' placeholder='Search Topics' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={(e) => searchArticles(e)}>Search</button>
        </form>
    )
}

export default Filter