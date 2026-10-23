import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import Drawer from "./components/Drawer";
import Landing from "./components/Landing";
import SorCheck from "./components/SorCheck";
import TemplatePage from "./components/Template";
import PptViewer from "./components/PptViewer";
import ChatBot from "./components/ChatBot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <UiProvider>
        <ScrollToTop />
        <Drawer />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sor" element={<SorCheck />} />
          <Route path="/template" element={<TemplatePage />} />
          <Route path="/ppt-generation" element={<PptViewer />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UiProvider>
    </BrowserRouter>
  );
}
