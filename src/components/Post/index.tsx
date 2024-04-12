import {  Postagem, ImagePostagem, TextPostagem } from './styled';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <Postagem>
        <ImagePostagem src={imageUrl} />
        <TextPostagem> {children} </TextPostagem>
        <PostComments />
    </Postagem>
);

export default Post;