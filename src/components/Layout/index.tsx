import React from 'react';
import { Grid } from './styles';
import ProfileInfo from '../ProfileInfo';
import FeedData from '../FeedData'; 
import FeedSuggestions from '../FeedSuggestions';
import FeedPosts from '../FeedPosts';

const Layout : React.FC = ()=>{
    return(
        <Grid>
            <ProfileInfo />
            <FeedData />
            <FeedSuggestions />
            <FeedPosts />
        </Grid>
    );
}

export default Layout;