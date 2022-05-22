import { useEffect } from "react";
import BreadcrumbList from "../../components/Common/Breadcrumbs/BreadcrumbList/BreadcrumbList";
import ItemList from "../../components/Items/ItemList/ItemList";
import ItemListSkeleton from "../../components/Items/ItemListSkeleton/ItemListSkeleton";
import { useQuery } from "../../hooks/useQuery";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchItemsAsync,
  selectCategories,
  selectItems,
  selectItemsStatus,
} from "../../store/items/items.slice";

const HomePage = () => {
  const items = useAppSelector(selectItems);
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectItemsStatus);

  const query = useQuery();
  const q = query.get("q") as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (q) {
      dispatch(fetchItemsAsync(q));
    }
  }, [dispatch, q]);

  return (
    <>
      <BreadcrumbList data={categories} />
      <div className="main-container">
        {status === "loading" ? (
          <ItemListSkeleton />
        ) : items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <p>No hay productos para mostrar</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
