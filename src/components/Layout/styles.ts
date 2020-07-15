import styled from 'styled-components';

//PI - PROFILE INFORMATION
//FD - FEED DATA
//FS - FEED SUGGESTIONS
//FP - FEED POSTS
//FL - FRIENDS LIST
//CL - COMMUNITIES LIST
//TL - TALKS LIST

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 280px auto 280px;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        'PI FD FL'
        'PI FS CL'
        'PI FP TL';
        
    height: 100vh;
`;