import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Tasks from "./pages/ShowTasks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addTask",
                element: <AddTask />
            },
            {
                path: "/showTasks",
                element: <Tasks />
            },
        ]
    },
]);

export default router;