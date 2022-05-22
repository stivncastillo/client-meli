import React, { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { toast } from "react-toastify";

interface Props {
  onTextChange?: (text: string) => void;
  onSearch: (text: string) => void;
}

const Header: React.FC<Props> = ({ onTextChange, onSearch }) => {
  const search = useRef<HTMLInputElement | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange && onTextChange(e.currentTarget.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!search.current?.value) {
      // TODO: crear servicio o action
      toast.info(
        "El texto de búsqueda está vacío, ¿Qué te interesaría buscar?",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
        }
      );
      return;
    }

    onSearch(search.current!.value);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header-logo">
          <img src="/assets/images/logoMeli.png" alt="Mercado Libre" />
        </a>

        <div className="header-search-container">
          <form className="header-search-form">
            <input
              ref={search}
              type="text"
              placeholder="Search"
              className="header-search-input"
              onChange={handleTextChange}
            />
            <button className="header-search-button" onClick={handleSearch}>
              <IoSearchOutline style={{ width: 16 }} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
