import styled from 'styled-components';

export const StoriesScroll = styled.div`
    height: 70px;
    width: 100%;
    overflow-x: scroll;
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

export const StoriesItem = styled.div`
    height: 52px;
    width: 52px;
    cursor: pointer;
    border-radius: 50%;
    transition: .3s linear;
    margin: 0 3px;
    display: inline-block;
    border: 0.8px double var(--orkut);
    background-color: var(--senary);

    &:hover{
        background-color: var(--light);
        border: 1.2px double var(--orkut);;
    }
`;
