class MovieList extends React.Component {
    state = {
        movies: []
    };

    findAllMovies = () =>
        findAllMovies().then(movies => { console.log(movies); this.setState({ movies }) })




    componentDidMount = () =>
        this.findAllMovies()



    createMovie = () => {
        createMovie().then(this.findAllMovies);
    }

    deleteMovie = (id) => {
        deleteMovie(id).then(this.findAllMovies);
    }
    render () {
        return (
            <div className="container-fluid">
                <h1>Movie List</h1>
                <table className="table">
                    {
                        this.state.movies.map(movie => {
                            
                            return <tr key={movie.id}>
                                <td>
                                    {movie.title}
                                </td>
                                <td>
                                    <button  className="btn btn-danger" onClick={() => this.deleteMovie(movie.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </table>
                <button className="btn btn-secondary" onClick={this.createMovie}>Create</button>
            </div >
        )
    }
}

ReactDOM.render(
    <MovieList />,
    document.getElementById('root')
)