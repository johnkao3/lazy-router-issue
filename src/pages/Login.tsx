import { useSetRecoilState } from "recoil";
import { MainState } from "../store/mainStore";
import { Link } from "react-router-dom";

export const Login = () => {
  const setMain = useSetRecoilState(MainState);
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Link to={"/about"}>To About</Link>
      </div>
      <button
        onClick={() => {
          setMain({
            status: true,
            message: "not Lazy",
          });
        }}
      >
        Update Router is Default
      </button>
    </div>
  );
};
