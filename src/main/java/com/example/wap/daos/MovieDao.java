package com.example.wap.daos;

import com.example.wap.models.Movie;
import com.example.wap.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class MovieDao {
    @Autowired
    MovieRepository movieRepository;

    public Iterable<Movie> findAllMovies() {
        return  movieRepository.findAll();
    }

    public Movie findMovieById(Integer id) {
        return movieRepository.findById(id).get();
    }

    public void deleteMovie(Integer id) {
        movieRepository.deleteById(id);
    }

    public Movie createMovie() {
        Movie movie = new Movie();
        movie.setTitle("New Movie");
        return movieRepository.save(movie);
    }

    public Movie renameMoive(Integer id, String newTitle) {
        Movie movie = movieRepository.findById(id).get();
        movie.setTitle(newTitle);
        return movieRepository.save(movie);
    }

}
