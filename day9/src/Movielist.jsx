import movie from "./movie";
import "./Movielist.css";

function Movielist() {
  return (
    <div className="movie-list">
        {movie.map((movie) =>(
            <div key={movie.id} className="movie-card">
                <img src={movie.image} className="movie-imag" />
                <h1 className="movie-title">Title: {movie.title}</h1>
                <h2 className="movie-lang">Language: {movie.language}</h2>
                <h2 className="movie-cost">Cost: {movie.cost}</h2>
            </div>
        ))}
    </div>
  )
}

export default Movielist