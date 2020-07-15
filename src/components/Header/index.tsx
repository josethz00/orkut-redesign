import React from 'react';
import { HeaderComponent, Text, IconBell, SettingsIcon, EndDivision, InputGroup, IconWrapper } from './styles';

const Header : React.FC = ()=>{
    return(
        <HeaderComponent>
            <img src={require('../../assets/logo.png')} alt="" style={{height:100, cursor: 'pointer'}}/>
            <InputGroup>
                <input type="text" name="" id="" placeholder="Search on Orkut..."/>
                <input type="button" value="Search" />
            </InputGroup>
            
            <EndDivision>
                <Text>José Thomaz</Text>
                <IconWrapper>
                    <IconBell />
                </IconWrapper>
                <IconWrapper>
                    <SettingsIcon />
                </IconWrapper>
            </EndDivision>
        </HeaderComponent>
    );
}

export default Header;