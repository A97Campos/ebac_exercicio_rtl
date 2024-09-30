import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';
import { ButtonPost, CommentPost, CommentsPost, FormPost, PostContent, TextareaPost } from './styled';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <CommentsPost>
                {comments.map(({ comment, id }) => (
                    <CommentPost data-testid='comentario' key={id}>
                        <PostContent>
                            {comment}
                        </PostContent>
                    </CommentPost>
                ))}
            </CommentsPost>
            <FormPost onSubmit={handleAddComment}>
                <TextareaPost data-testid='comentarTexto' value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <ButtonPost data-testid='comentarButton' type="submit">
                    Comentar
                </ButtonPost>
            </FormPost>
        </div>
    );
}

export default Post;