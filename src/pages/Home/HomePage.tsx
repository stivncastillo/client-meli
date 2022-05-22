import { useEffect } from "react";
import ItemList from "../../components/Items/ItemList";
import { useQuery } from "../../hooks/useQuery";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchItemsAsync,
  selectItems,
  selectItemsStatus,
} from "../../store/items/item.slice";

const HomePage = () => {
  const items = useAppSelector(selectItems);
  const status = useAppSelector(selectItemsStatus);
  const query = useQuery();
  const q = query.get("q") as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItemsAsync(q));
  }, [dispatch, q]);

  return (
    <div className="search-container">
      {status === "loading" ? (
        <p>Buscando...</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default HomePage;
