import { useState } from "react";
import Button from "../../../shared/buttons/button/button";
import TextInput from "../../../shared/inputs/textInput/textInput";
import { BackgroundImage, Container, LoginContainer, LoginContent, LoginLogo } from "../styles/loginScreen.styles";
import { useRequest } from "../../../shared/hooks/useRequests";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authRequest, loading } = useRequest();
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        authRequest({email, password});
    }

    return (
        <Container>
            <BackgroundImage src="/public/background.jpg"/>
            <LoginContainer>
                <LoginContent>
                    <LoginLogo src="/public/vite.svg"/>
                    <h1>Login</h1>
                    <TextInput height="40px" margin="32px 0 0 0" title="Usuario" placeholder="Usuario" onChange={handleEmailChange} value={email}/>
                    <TextInput height="40px" margin="32px 0 0 0" title="Senha" type="password" placeholder="Senha" onChange={handlePasswordChange} value={password}/>
                    <Button loading={loading} margin="60px 0 16px 0" title="Entrar" onClick={handleLogin}/>
                </LoginContent> 
            </LoginContainer>
        </Container>
    )
}

export default LoginScreen;