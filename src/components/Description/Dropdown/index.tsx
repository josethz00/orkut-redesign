import React from 'react';
import { OptionsList, Avatar, ProfileIcon, NotesIcon, AlbumsIcon, FriendsIcon, FansIcon, ActivityIcon, ListIcon, HashtagIcon, ShieldIcon, BookmarkIcon } from './styles';

const Dropdown : React.FC = ()=>{

    return(
        <>
            <OptionsList>
                <Avatar>
                    <ProfileIcon />
                    <p>Perfil</p>
                </Avatar>
                <Avatar>
                    <HashtagIcon />
                    <p>Trendings Topics</p>
                </Avatar>
                <Avatar>
                    <NotesIcon />
                    <p>Recados</p>
                </Avatar>
                <Avatar>
                    <AlbumsIcon />
                    <p>Álbuns</p>
                </Avatar>
                <Avatar>
                    <ListIcon />
                    <p>Listas</p>
                </Avatar>
                <Avatar>
                    <BookmarkIcon />
                    <p>Bookmarks</p>
                </Avatar>
                <Avatar>
                    <FriendsIcon />
                    <p>Amigos</p>
                </Avatar>
                <Avatar>
                    <FansIcon />
                    <p>Meus Fãs</p>
                </Avatar>
                <Avatar>
                    <ActivityIcon />
                    <p>Atividade da conta</p>
                </Avatar>
                <Avatar>
                    <ShieldIcon />
                    <p>Privacidade da conta</p>
                </Avatar>
            </OptionsList>
        </>
    );

}

export default Dropdown;