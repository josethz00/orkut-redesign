import styled from 'styled-components';
import { FaRegImage, FaRegSmile, FaRegCalendarAlt} from 'react-icons/fa';

export const Div = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 15px;
    border: 2px solid var(--mention-message);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
    
    &> h4{
        color: var(--light);
        margin: 5px;
    }
`;

export const Wrapper = styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    flex-direction:row;
    margin-bottom: 35px;

    &> h5{
        font-weight: 500;
        color: var(--light);
        font-size: 15px;
        margin-right: 15px;
        padding: 0;
    }
    &> p{
        color: var(--light);
        font-size: 14px;
        font-weight: 100;
        padding: 0;
    }
`;

export const InputWrapperPost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-top: 2px solid var(--tertiary);

    &> textarea{
        width: 100%;
        border: 0px;
        margin-top: 15px;
        margin-bottom: 15px;
        min-height: 50px;
        height: auto;
        overflow-y: hidden;
        padding: 7px;
        background-color: transparent;
        color: #ccc;
    }
    & > textarea::placeholder{
        color: #ccc;
        font-weight: lighter;
    }
    & button{
        border-radius: 20px;
        height: 40px;
        width: 120px;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        color: white;
        background-color: var(--link);
    }
    & button:hover{
        background-color: var(--linkHover);
    }
`;

export const OptionsToPublish = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`;

export const ImageIcon = styled(FaRegImage)`
    font-size: 22px;
    color: var(--link);
    margin: 0px 10px;
    cursor: pointer;

    &:hover{
        font-size: 24.5px;
        color: var(--linkHover);
    }
`;
export const SmileIcon = styled(FaRegSmile)`
    font-size: 22px;
    color: var(--link);
    margin: 0px 10px;
    cursor: pointer;

    &:hover{
        font-size: 24.5px;
        color: var(--linkHover);
    }

`;
export const CalendarIcon = styled(FaRegCalendarAlt)`
    font-size: 22px;
    color: var(--link);
    margin: 0px 10px;
    cursor: pointer;

    &:hover{
        font-size: 24.5px;
        color: var(--linkHover);
    }
`;