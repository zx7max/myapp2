import { Routes, Route } from "react-router-dom";

import { AboutPage } from "./pages/about_page";
import { HomePage } from "./pages/home_page";
import { NotFoundPage } from "./pages/404_page";
import { LoginPage } from "./pages/login";
import { ProfilePage } from "./pages/profile";

import { LayOut } from "./components/layout";


function MyApp() {
  return (
      <div>
        <Routes >
          <Route path="/" element={<LayOut/>}>
            <Route index element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="profile" element={<ProfilePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default MyApp;