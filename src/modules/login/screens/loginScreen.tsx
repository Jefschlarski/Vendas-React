import TextInput from "../../../shared/inputs/textInput";
import { BackgroundImage, Container, LoginContainer, LoginContent, LoginLogo } from "../styles/loginScreen.styles";

const LoginScreen = () => {

    return (
        <Container>
            <BackgroundImage src="/public/background.jpg"/>
            <LoginContainer>
                <LoginContent>
                    <LoginLogo src="/public/vite.svg"/>
                    <TextInput title="Usuario"/>
                    <TextInput title="Senha"/>
                </LoginContent> 
            </LoginContainer>
        </Container>
    )
}

export default LoginScreen;