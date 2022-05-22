import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  cleanUpDetail,
  selectItemDetail,
  selectStatus,
  fetchDetail,
} from "../../store/detail/detail.slice";
import { Helmet } from "react-helmet";
import ItemDetailSkeleton from "./components/ItemDetailSkeleton";

type NavigationParams = {
  id: string;
};

const ItemDetailPage = () => {
  let { id } = useParams<NavigationParams>();
  const dispatch = useAppDispatch();
  const item = useAppSelector(selectItemDetail);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetail(id));
    }
    return () => {
      dispatch(cleanUpDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      <div className="main-container">
        {status === "loading" ? (
          <ItemDetailSkeleton />
        ) : item ? (
          <>
            <Helmet>
              <title>Mercado Libre | {item?.title} </title>
              <meta
                name="description"
                content={item?.description ?? "Sin descripción"}
              />
              {/* Twitter */}
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content={`Mercado Libre | ${item?.title}`}
              />
              <meta name="twitter:creator" content="@Mercadolibre" />
              <meta name="twitter:description" content={item?.title} />
              {item?.picture && (
                <meta name="twitter:image" content={item?.picture} />
              )}

              {/* Facebook */}
              <meta
                property="og:title"
                content={`Mercado Libre | ${item?.title}`}
              />
              <meta property="og:description" content={item?.title} />
              {item?.picture && (
                <meta name="og:image" content={item?.picture} />
              )}
              <meta property="og:type" content="article" />
              <meta property="og:locale" content="es-ES" />
            </Helmet>

            <div className="detail-container">
              <div className="detail__info">
                <div className="detail__image">
                  <img src={item.picture} alt={item.title} />
                </div>

                <div className="detail__description">
                  <h2>Descripción del producto</h2>
                  <p>{item.description}</p>
                </div>
              </div>
              {/* 2 */}
              <div className="detail__aside">
                <span className="detail__aside__category">Nuevo</span>
                <h1 className="detail__aside__name">{item.title}</h1>

                <div className="detail__aside__price">
                  <span>
                    $ {item.price.amount} <sup>00</sup>
                  </span>
                </div>

                <button className="button button__primary">Comprar</button>
              </div>
            </div>
          </>
        ) : (
          <p>No hay producto</p>
        )}
      </div>
    </>
  );
};

export default ItemDetailPage;
