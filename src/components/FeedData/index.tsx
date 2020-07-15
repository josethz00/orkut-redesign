import React from 'react';
import { Container } from './styles';
import Stories from '../Stories';
import Post from '../Post';

const FeedData : React.FC = ()=>{

    return(
        <Container>
            <Stories />
            <Post />
        </Container>
    );

}

export default FeedData;