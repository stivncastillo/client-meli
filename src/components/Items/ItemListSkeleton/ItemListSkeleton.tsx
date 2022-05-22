import React from "react";
import ContentLoader from "react-content-loader";

export const ItemSkeleton = () => {
  return (
    <ContentLoader viewBox="0 0 800 150" height={150} width={800}>
      <rect x="160" y="16" rx="10" ry="5" width="130" height="32" />
      <rect x="160" y="60" rx="5" ry="5" width="400" height="16" />
      <rect x="26" y="10" rx="0" ry="0" width="120" height="120" />
      <rect x="13" y="54" rx="0" ry="0" width="0" height="0" />
      <rect x="13" y="50" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
  );
};

const ItemListSkeleton = () => {
  return (
    <>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </>
  );
};

export default ItemListSkeleton;
