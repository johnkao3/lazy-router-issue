import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useNavigation,
} from "react-router-dom";
import { Login } from "./pages/Login";

function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <div style={{ position: "fixed", top: 0, right: 0 }}>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <Outlet />
    </>
  );
}

// No Wanring Message
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to={"login"} replace />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "about",
//         // Single route in lazy file
//         lazy: () => import("./pages/About"),
//       },
//     ],
//   },
// ]);
// export const useRouter = () => router;

// Tihs Code show Under Message
// Matched leaf route at location "/about" does not have an element or Component.
// This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.
export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={"login"} replace />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "about",
          // Single route in lazy file
          lazy: () => import("./pages/About"),
        },
      ],
    },
  ]);
};
