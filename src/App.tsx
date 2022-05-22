import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import Header from "./components/Layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ItemDetailPage from "./pages/ItemDetail/ItemDetailPage";
import Footer from "./components/Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

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
      <Header onSearch={handleSearch} />

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
