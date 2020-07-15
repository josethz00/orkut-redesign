import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FD;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 20px;
    max-height: 510px;
    width: 730px;
    padding: 12px 0px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;