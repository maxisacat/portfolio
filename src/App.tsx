import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import { useEffect } from "react";
import { useLoadScreen } from "./contexts/LoadScreen";
import Background from "./components/Background/Main";
import BusinessCard from "./pages/BusinessCard";

const html = document.querySelector("html")!;

function PageWithFooter() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
function PageWithLayout() {
  return (
    <>
      <Header />
      <Background className="fixed bottom-0 left-0 right-0 top-0 -z-20 m-auto h-screen w-screen bg-black" />
      <Outlet />
    </>
  );
}

export default function App() {
  const { setIsLoading } = useLoadScreen();
  useEffect(() => {
    if (location.pathname === "/about") {
      html.classList.add("scroll");
    } else {
      html.classList.remove("scroll");
    }
    onclick = (e) => {
      if (e.button !== 0) return;
      const link = (e.target as HTMLLinkElement).closest("a");
      if (!link) return;
      setIsLoading(true, 500);
    };
  }, []);

  return (
    <>
      <div className="App fixed z-10 flex w-full flex-grow flex-col items-center justify-between overflow-y-scroll text-clamp-1">
        <Routes>
          <Route path="/" element={<PageWithLayout />}>
            <Route path="/" element={<PageWithFooter />}>
              <Route index element={<Navigate to="/projects" replace />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="credits" element={<Credits />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/business-card" element={<BusinessCard />} />
        </Routes>
      </div>
    </>
  );
}
