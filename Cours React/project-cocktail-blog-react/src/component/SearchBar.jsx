import { useNavigate } from "react-router-dom"

const SearchBar = () =>{
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault()
        const search = event.target.searchCocktail.value
        navigate(`/searchedCocktails?search=${search}`)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            const search = event.target.value
            navigate(`/searchedCocktails?search=${search}`)
        }
      };

    return(
        <>
        <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
            <div class="search-box">
                <input type="text" name="searchCocktail" class="input-search" placeholder="Type to Search..."/>
                <button type="submit">Rechercher</button>
            </div>
        </form>
        </>
    )
}

export default SearchBar