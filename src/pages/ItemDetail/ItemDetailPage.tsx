import React from "react";

type Props = {};

const ItemDetailPage = (props: Props) => {
  return (
    <div>
      {/* breadcrumbs */}
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">
            Home
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">
            Search
          </a>
        </li>
        <li className="breadcrumbs-item breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">
            Results
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailPage;
