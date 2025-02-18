import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import CommonLayout from "../pages/common/CommonLayout";


const router = createBrowserRouter([
    {
        path:"/dashboard",
        element:<DashboardLayout />,
        children:[
            {
                path:"/dashboard",
                element:<CommonLayout />
            },
        ]
    }
  ]);

  export default router;