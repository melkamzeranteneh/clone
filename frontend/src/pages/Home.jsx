import MovieCard from "../components/MovieCard"
function Home(){
    const movies=[
        {id:1, title:"Harry Potter", release_date:"2023-01-01"},
        {id:2, title:"Star Wars", release_date:"2023-01-01"},
        {id:3, title:"The Lord of the Rings", release_date:"2023-01-01"},
    ]
    
    const handle=()=>{
    }

    return(

        <div className="home">
            
            <form onSubmit={handlesearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="Search"></input>
            </form>

            <div className="movie-grid">
                {movies.map(movie=> <MovieCard movie={movie} key={movie.name}/>)}
            </div>

        </div>
    )
}
export default Home;