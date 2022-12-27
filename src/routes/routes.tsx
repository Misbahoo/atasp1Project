import { Routes, Route } from "react-router-dom";

import Home from "../components//pages/home";
import Infra from "../components/pages/infra";
import Outreach from "../components/pages/outreach";
import AboutUs from "../components/pages/aboutUs";
import ProgressOfWork from "../components/pages/progressOfWork";
import Gallary from "../components/pages/gallary";
import DefaultGallaryPics from "../components/pages/defaultGallaryPics";
import SearchedGallaryPics from "../components/pages/searchedGallaryPics";

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="infra" element={<Infra />} />
    <Route path="outreach" element={<Outreach />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="gallary" element={<Gallary />}>
      <Route index element={<DefaultGallaryPics />} />
      <Route path="searchedGallaryPics" element={<SearchedGallaryPics />} />
    </Route>
    <Route path="progressOfWork" element={<ProgressOfWork />} />
    <Route path="*" element={<h1>Page is not found</h1>} />
  </Routes>
);

export default Pages;
