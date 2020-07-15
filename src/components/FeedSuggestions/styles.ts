import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FS;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 20px;
    max-height: 400px;
    width: 730px;
    padding: 0px 0px;
`;

export const FriendsWrapper = styled.div`
    width: 100%;
    overflow-x: scroll;
    padding: 5px;
    justify-content: center;
    margin: 5px;
    white-space: nowrap;
    ::-webkit-scrollbar{
        height: 4px;
    }  
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: var(--tertiary);
    }  
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }  
`;

export const Friends = styled.div`
    display: inline-block;
    text-align: center;
    margin: 8px 25px;
    cursor: pointer;

    &> h5{
        color: var(--light);
    }

    & > img{
        width: 80px;
        margin: 9px;
        height: 80px;
        border-radius: 5px;
        background-color: #ccc;
        object-fit: cover;
    }
`;
