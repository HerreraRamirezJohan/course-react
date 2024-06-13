function ListOfMovies({ movies }) {
    return (
        <ul className="
            grid 
            w-full 
            grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 
            gap-x-3
            ">
            {
                movies.map(movie => (
                    <li key={movie.id} className="m-auto text-center">
                        <h3>{movie.title}</h3>
                        <p
                            className='bg-neutral-950 mb-2
                                        inline-block px-10 py-1 rounded-md'>
                            {movie.year}
                        </p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies({ movies }) {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}