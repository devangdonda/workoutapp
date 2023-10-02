import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import FoodPage from "./pages/FoodPage";
import WorkoutPage from "./pages/WorkoutPage";
import ProgressPage from "./pages/ProgressPage";
import WorkListPage, {loader as workoutListLoader} from "./pages/WorkListPage";
import WorkoutLogPage from "./pages/WorkoutLogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "progress",
        element: <ProgressPage />,
      },
      {
        path: "workout",
        element: <WorkoutPage />,
      },
      {
        path: "food",
        element: <FoodPage />,
      },
      {
        path: ":listID",
        element: <WorkListPage />,
        loader: workoutListLoader
      },
      {
        path: ":listID/workoutlog",
        element: <WorkoutLogPage />,
      }
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
