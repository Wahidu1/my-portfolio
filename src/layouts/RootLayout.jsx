import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { scrollToTop } from "../utils/scrollToTop";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    scrollToTop("smooth");
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
