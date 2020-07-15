import React, { useState } from 'react';
import { Avatar, ExpandIcon, AvatarIcon, CloseIcon } from './styles';
import Dropdown from './Dropdown';

const Description : React.FC = ()=>{

    const [dropdown, setDropdown] = useState(true);

    return(
        <>
            <Avatar>
                <img src={require('../../assets/jose.jpg')} alt="" />
                <p>José Thomaz</p>
            </Avatar>
            <AvatarIcon onClick={()=>{ setDropdown(!dropdown)  }}>
                {dropdown ? <CloseIcon/> : <ExpandIcon /> }
                <p>Ver {dropdown ? 'menos' : 'mais' }</p>
            </AvatarIcon>
            {dropdown && <Dropdown />}
        </>
    );

}

export default Description;