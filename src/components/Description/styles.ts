import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export const Avatar = styled.div`
    width: 90%;
    display: flex;
    height: 58px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > img{
        border-radius: 50%;
        background-color: var(--senary);
        width: 44px;
        height: 44px;
    }
    &:hover{
        background-color: var(--senary);
    }
    &>p{
        color: var(--light);
        font-weight: 500;
        font-size: 14px;
    }
`;
export const AvatarIcon = styled.div`
    width: 90%;
    display: flex;
    height: 58px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    margin-top: 15px;

    &:hover{
        background-color: var(--senary);
    }
    &>p{
        color: var(--light);
        font-weight: 300;
        font-size: 14px;
    }
`;

export const ExpandIcon = styled(MdKeyboardArrowDown)`
    color: white;
    margin-right: 7px;
    font-size: 22px;
`;

export const CloseIcon = styled(MdKeyboardArrowUp)`
    color: white;
    margin-right: 7px;
    font-size: 22px;
`;
