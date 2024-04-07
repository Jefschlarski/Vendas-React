import { Result } from "antd";
import { useRouteError } from "react-router-dom";
import { ErrorPageContainer } from "../styles/erroPage.styles";

const ErrorPage = () => {
  const error = useRouteError();
  const errorText: React.ReactNode = `${(error as any).status} ${(error as any).statusText}`
  return (
    <ErrorPageContainer>
      <Result
        status="warning"
        title= {errorText}
        subTitle="Ocorreu um erro ao tentar carregar esta página."
      />
    </ErrorPageContainer>
  );
}

export default ErrorPage
