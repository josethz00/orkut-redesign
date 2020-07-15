import styled from 'styled-components';
import { MdAccountCircle, MdInbox, MdGroup, MdPhotoLibrary, MdStar, MdDataUsage, MdAssignment, MdCollectionsBookmark } from 'react-icons/md';
import { FaHashtag, FaShieldAlt } from 'react-icons/fa';

export const OptionsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
`;

export const Avatar = styled.div`
    width: 100%;
    display: flex;
    height: 58px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;

    & > :first-child{
        margin-right: 10px;
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

export const ProfileIcon = styled(MdAccountCircle)`
    color: var(--orkut);
    font-size: 23px;
`;
export const NotesIcon = styled(MdInbox)`
    color: var(--orkut);
    font-size: 23px;
`;
export const AlbumsIcon = styled(MdPhotoLibrary)`
    color: var(--orkut);
    font-size: 23px;
`;
export const FriendsIcon = styled(MdGroup)`
    color: var(--orkut);
    font-size: 23px;
`;
export const FansIcon = styled(MdStar)`
    color: var(--orkut);
    font-size: 23px;
`;
export const ActivityIcon = styled(MdDataUsage)`
    color: var(--orkut);
    font-size: 23px;
`;
export const ListIcon = styled(MdAssignment)`
    color: var(--orkut);
    font-size: 23px;
`;
export const HashtagIcon = styled(FaHashtag)`
    color: var(--orkut);
    font-size: 23px;
`;
export const ShieldIcon = styled(FaShieldAlt)`
    color: var(--orkut);
    font-size: 23px;
`;
export const BookmarkIcon = styled(MdCollectionsBookmark)`
    color: var(--orkut);
    font-size: 23px;
`;