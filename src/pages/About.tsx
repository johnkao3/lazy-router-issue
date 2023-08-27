import { useLoaderData } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { MainState } from "../store/mainStore";

export async function loader() {
  await new Promise((r) => setTimeout(r, 500));
  return "I came from the About.tsx loader function!";
}

export function Component() {
  const data = useLoaderData() as string;

  const setMain = useSetRecoilState(MainState);

  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
      <button
        onClick={() => {
          setMain({
            status: true,
            message: "isLazy",
          });
        }}
      >
        Update Store message isLazy
      </button>
    </div>
  );
}

Component.displayName = "AboutPage";
