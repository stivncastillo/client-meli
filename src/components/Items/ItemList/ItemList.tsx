import React from "react";
import { Item as ItemType } from "../../../types";
import Item from "../Item";

type Props = {
  items: ItemType[];
};

const ItemList = React.memo(({ items }: Props) => {
  return (
    <ol className="search-list">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ol>
  );
});

export default ItemList;
