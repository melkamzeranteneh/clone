function MovieCard({movie}){
    function onFavoriteClick(){
        alert(`You favorited ${movie.title}`);
    }
    return  <div className="movie-card">
                <div className="movie-postor">
                    <img src={movie.poster} alt={movie.title} />
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ❤️
                    </button>
                </div>
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                </div>
            </div>
}
export default MovieCard;
