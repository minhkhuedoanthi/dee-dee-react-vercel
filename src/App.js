import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SenderInput from "./pages/SenderInput";
import ReceiverInput from "./pages/ReceiverInput";
import ResultPage from "./pages/ResultPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sender-input":
        title = "";
        metaDescription = "";
        break;
      case "/receiver-input":
        title = "";
        metaDescription = "";
        break;
      case "/result-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sender-input" element={<SenderInput />} />
      <Route path="/receiver-input" element={<ReceiverInput />} />
      <Route path="/result-page" element={<ResultPage />} />
    </Routes>
  );
}
export default App;
