import React, { useState } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const CommentForm = ({ movieId }) => {
    const [comment, setComment] = useState('');
    const notyf = new Notyf();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://movieapp-api-lms1.onrender.com/movies/addComment/${movieId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
            const data = await response.json();
            if (response.ok) {
                setComment('');
                notyf.success('Comment added successfully');
            } else {
                notyf.error(data.message || 'Failed to add comment');
            }
        } catch (error) {
            notyf.error('Failed to add comment');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;