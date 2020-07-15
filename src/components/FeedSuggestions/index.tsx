import React from 'react';
import { Container, FriendsWrapper, Friends } from './styles';

const FeedSuggestions : React.FC = ()=>{

    return(
        <Container>
            <FriendsWrapper>
                <Friends>
                    <img src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                    <h5>Jonas Rodolfo</h5>
                </Friends>
                <Friends>
                    <img src="https://images.unsplash.com/flagged/photo-1576636215888-539d692c4136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                    <h5>Garibalda Pereira</h5>
                </Friends>
                <Friends>
                    <img src="https://images.unsplash.com/photo-1539694023178-80dde47136c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""/>
                    <h5>Nathan Dumlao</h5>
                </Friends>
                <Friends>
                    <img src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/01/ribamar-rafael-ribeiro-vasco.jpg" alt=""/>
                    <h5>Ribamar O Mago</h5>
                </Friends>
                <Friends>
                    <img src="https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=317&q=80" alt=""/>
                    <h5>Júlia Silva</h5>
                </Friends>
                <Friends>
                    <img src="https://images.unsplash.com/photo-1580643668142-265d03d70da2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80" alt=""/>
                    <h5>Renata Abreu</h5>
                </Friends>
                <Friends>
                    <img src="https://images.unsplash.com/photo-1588203833667-2bbcb75d4d35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt=""/>
                    <h5>Gabriel Prieto Filho</h5>
                </Friends>
                <Friends>
                    <img src="https://www.tribunaribeirao.com.br/site/wp-content/uploads/2019/11/images-100-scaled.jpg" alt=""/>
                    <h5>Pofexô Luxa</h5>
                </Friends>
            </FriendsWrapper>
        </Container>
    );

}

export default FeedSuggestions;