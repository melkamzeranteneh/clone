import MovieCard from "../components/MovieCard"
function Home(){
    const movies=[
        {id:1, title:"Harry Potter", release_date:"2023-01-01"},
        {id:2, title:"Star Wars", release_date:"2023-01-01"},
        {id:3, title:"The Lord of the Rings", release_date:"2023-01-01"},
    ]
    
    return(
        <div>
            {movies.map(movie=> <MovieCard movie={movie} key={movie.name}/>)}
        </div>
    )
}
export default Home;