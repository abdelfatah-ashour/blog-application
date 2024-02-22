import Layout from "@/components/Layout";
import PageNotFound from "@/components/PageNotFound";
import Blogs from "@/routes/Blogs";
import { Route, Routes } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blogs />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
