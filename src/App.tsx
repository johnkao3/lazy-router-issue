import { RouterProvider } from "react-router-dom";
import { useRouter } from "./router";

import { MainState } from "./store/mainStore";
import { useRecoilValue } from "recoil";

function App() {
  console.log(useRouter);
  const router = useRouter();
  const main = useRecoilValue(MainState);

  return (
    <>
      <div>Store: {main.message}</div>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}

export default App;
