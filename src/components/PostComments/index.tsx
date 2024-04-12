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
                    <CommentPost key={id}>
                        <PostContent>
                            {comment}
                        </PostContent>
                    </CommentPost>
                ))}
            </CommentsPost>
            <FormPost onSubmit={handleAddComment}>
                <TextareaPost value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <ButtonPost type="submit">
                    Comentar
                </ButtonPost>
            </FormPost>
        </div>
    );
}

export default Post;