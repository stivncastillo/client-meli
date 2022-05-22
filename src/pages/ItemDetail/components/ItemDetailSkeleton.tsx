import React from "react";
import ContentLoader from "react-content-loader";

const ItemDetailSkeleton = () => {
  return (
    <ContentLoader
      width={900}
      height={600}
      viewBox="0 0 900 600"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="55" y="42" rx="8" ry="8" width="500" height="500" />
      <rect x="600" y="42" rx="3" ry="3" width="102" height="7" />
      <rect x="600" y="60" rx="3" ry="3" width="300" height="29" />
      <rect x="600" y="105" rx="3" ry="3" width="170" height="50" />
      <rect x="600" y="200" rx="3" ry="3" width="400" height="50" />
    </ContentLoader>
  );
};

export default ItemDetailSkeleton;
