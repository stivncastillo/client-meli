import React from "react";
import { Category } from "../../../../types";

type Props = {
  data: Category[];
};

const BreadcrumbList = ({ data }: Props) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <ul className="breadcrumbs" aria-labelledby="categories-list">
      {data.map((category) => (
        <li className="breadcrumbs__item" key={category.id}>
          <a href="/" className="breadcrumbs__link">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BreadcrumbList;
