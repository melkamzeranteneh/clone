import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const movies=[
        {id:1, title:"Harry Potter", release_date:"2023-01-01"},
        {id:2, title:"Star Wars", release_date:"2023-01-01"},
        {id:3, title:"The Lord of the Rings", release_date:"2023-01-01"},
    ];
    const handlesearch=()=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("-----")
        };
    return(
        <div className="home">
            <form onSubmit={handlesearch} className="search-form">
                
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="Search"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(
                    movie=> (
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id}/>
                    )
                    )}
            </div>

        </div>
    )
}
export default Home;