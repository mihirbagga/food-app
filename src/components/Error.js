import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorMessage = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2> Something went wrong!!</h2>
      <h3>
        {errorMessage.status}: {errorMessage.statusText}
      </h3>
    </div>
  );
};

export default Error;