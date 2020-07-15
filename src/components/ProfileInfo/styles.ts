import styled from 'styled-components';

export const Container = styled.div`
    grid-area: PI;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--quinary);
    padding: 12px 0px;
    max-height: 100vh;
    border-right: 2px solid var(--gray);
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;