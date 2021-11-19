import styled from 'styled-components';

export const Container = styled.div`
    width: 60vw;
    margin: 50px auto;
    display: flex;
    padding: 40px;
    justify-content: space-around;
    @media screen and (max-width: 680px){
        flex-direction: column;
        width: 85vw;
    }
`;