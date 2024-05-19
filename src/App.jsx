import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import PageNotFound from "./pages/PageNotFound";
import JobDetailPage, { JobLoader } from "./pages/JobDetailPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/job" element={<JobPage />} />
      <Route path="/job/:id" element={<JobDetailPage />} loader={JobLoader} />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage />}
        loader={JobLoader}
      />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
