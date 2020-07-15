import styled from 'styled-components';
import { MdNotificationsActive, MdSettings } from 'react-icons/md';

export const HeaderComponent = styled.div`
    width: 100%;
    height: 63px;
    background-color: var(--tertiary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-bottom: 2.4px solid var(--quinary);
`;
export const InputGroup = styled.div`
    & > input[type='text']{
        padding: 10px;
        height: 31px;
        width: 300px;
        color: var(--light);
        background-color: var(--quaternary)
    }
    & > input[type='button']{
        height: 31px;
        width: 70px;
        background-color: var(--link);
        font-weight: 300;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        cursor: pointer;
        color: var(--light);
        transition: .3s linear;
    }
    & > input[type='button']:hover{
        background-color: var(--linkHover);
    }
`;
export const EndDivision = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0px 50px;
    color: var(--light);
    transition: .3s linear;

    &:hover{
        color: var(--senary);
        cursor: pointer;
    }
`;

export const IconWrapper = styled.div`
    width: 38px;
    height: 38px;
    margin: 0px 3px;
    border-radius: 50%;
    background-color: var(--quaternary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s linear;

    &:hover{
        background-color: var(--quinary);
    }
`;

export const IconBell = styled(MdNotificationsActive)`
    color: var(--orkut);
    font-size: 22px;
`;

export const SettingsIcon = styled(MdSettings)`
    color: var(--orkut);
    font-size: 22px;
`;

