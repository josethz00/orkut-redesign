import React from 'react';
import { Div, Wrapper, InputWrapperPost, OptionsToPublish, ImageIcon, CalendarIcon, SmileIcon } from './styles';

const Post : React.FC = ()=>{

    return(
        <Div>
            <h4>Bem-vindo(a), José</h4>
            <br/>
            <Wrapper>
                <h5>Sorte de hoje:</h5>
                <p>Seu talento para o mundo dos negócios é evidente na sua personalidade</p>
            </Wrapper>
            <InputWrapperPost>
                <textarea placeholder="Como você está se sentindo agora?"></textarea>
                <OptionsToPublish>
                    <div>
                        <ImageIcon/>
                        <CalendarIcon/>
                        <SmileIcon/>
                    </div>
                    <button type="submit">Post</button>
                </OptionsToPublish>
            </InputWrapperPost>
        </Div>
    );

}

export default Post;