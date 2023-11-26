import {Routes, Route, Link} from "react-router-dom";

import { AboutPage } from "./pages/about_page";
import { NotFoundPage } from "./pages/404_page";
import { HomePage } from "./pages/home_page";

function App() {
  return (
    <div>
      <header>
      <Link to="/">хомяк</Link>
      <Link to="/about">О странице</Link>

      </header>
      <div>
        <Routes >
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
