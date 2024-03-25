import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const Container = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 0 22px;
    width: 100%;
    height: 100vh;
    max-width: 650px;
`;

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginLogo = styled.img`
    width: 100%;
    max-width: 100px;
`;
