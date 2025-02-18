import React from 'react';
import MovieDetail from '../components/MovieDetail';
import CommentForm from '../components/CommentForm';

const MovieDetailPage = ({ match }) => {
    return (
        <div className="container">
            <MovieDetail match={match} />
            <CommentForm movieId={match.params.id} />
        </div>
    );
};

export default MovieDetailPage;