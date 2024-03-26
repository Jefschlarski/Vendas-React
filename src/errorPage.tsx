import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center" }} id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as any).status} {(error as any).statusText}</i>
      </p>
    </div>
  );
}

export default ErrorPage
