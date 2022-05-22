import React from "react";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Item } from "../../types";

type Props = {
  items: Item[];
};

const ItemList = React.memo(({ items }: Props) => {
  return (
    <ol className="search-list">
      {items.map((item, index) => (
        <li className="search-item" key={item.id}>
          <div className="search-item__wrapper">
            <Link to={`items/${item.id}`} className="search-item__image">
              <img src={item.picture} alt={item.title} />
            </Link>

            <div className="search-item__info">
              <div className="search-item__price">
                <span>
                  {item.price.amount} <sup>00</sup>
                </span>

                <div className="search-item__shipping-icon">
                  <FaTruck style={{ width: 12 }} />
                </div>
              </div>
              <Link to={`items/${item.id}`} className="search-item__name">
                <h3>{item.title}</h3>
              </Link>
            </div>

            <div className="search-item__category">
              <span>Nuevo</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
});

export default ItemList;
