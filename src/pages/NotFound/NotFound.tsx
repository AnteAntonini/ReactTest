import { useNotFound } from "./useNotFound";
import "./notFound.css";

const NotFound = ({ message }: { message: string }) => {
  const { handleClick } = useNotFound(message);

  return (
    <div className="not-found-container">
      <h2>404 | Sorry, we can't find that page.</h2>
      <div className="row ">
        <button onClick={handleClick}>Home Page</button>
      </div>
    </div>
  );
};

export default NotFound;
