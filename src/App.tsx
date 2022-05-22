import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/Home/HomePage";
import ItemDetailPage from "./pages/ItemDetail/ItemDetailPage";
import Footer from "./components/Layout/Footer/Footer";
import { useQuery } from "./hooks/useQuery";

const App = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const q = query.get("q") as string;

  useEffect(() => {
    injectStyle();
  }, []);

  const handleSearch = (search: string) => {
    navigate({
      pathname: "/items",
      search: `?q=${search}`,
    });
  };

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} query={q} />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="items" element={<HomePage />} />
            <Route path="items/:id" element={<ItemDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </div>
  );
};

export default App;
