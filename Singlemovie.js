import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function SingleMovie() {

    let [movie, setMovie] = useState(null);
    let [cast, setCast] = useState([]);

    const { movieid } = useParams();

    useEffect(() => {
        let Api_key = 'f6866ecb64af726c47ad422d7b08e283';

        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${Api_key}&language=en-US`)
            .then(res => {
                setMovie(res.data);
            });

        axios.get(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${Api_key}&language=en-US`)
            .then(res => {
                setCast(res.data.cast);
            });

    }, [movieid]);

    return (
        <div className="container">
            <h2>Single Movie</h2>

            {movie && (
                <div className='my-4'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className='img-fluid rounded-3'
                        alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                </div>
            )}

            <div className='row'>
                {cast && cast.map(actor => (
                    <div key={actor.id} className='col-3 p-3 text-center'>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                            className='img-fluid rounded-3'
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                        <small>{actor.character}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
