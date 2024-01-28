import { useRouteError } from "react-router-dom";

const Error = () => {

    const erro = useRouteError;
    console.log(erro);
    return (
        <div>
            <h1>Opps!</h1>
            <h2>somethings went wrong !!</h2>
             
        </div>
    )
};

export default Error;