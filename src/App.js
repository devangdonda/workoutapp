import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import FoodPage from "./pages/FoodPage";
import WorkoutPage from "./pages/WorkoutPage";
import ProgressPage from "./pages/ProgressPage";
import WorkListPage from "./pages/WorkListPage";
import WorkoutLogPage, {loader as workoutLogLoader} from "./pages/WorkoutLogPage";

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
        path: ':listID',
        loader: workoutLogLoader,
        id: 'workout',
        children: [
          {
            path: "",
            element: <WorkListPage />,
          },
          {
            path: ":workLogID",
            element: <WorkoutLogPage />,
          }
        ]
      },
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
