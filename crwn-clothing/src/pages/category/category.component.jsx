import React from "react";
import "./category.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const Category = ({
  match: {
    params: { categoryId },
  },
}) => (
  <div className="category">
    <h2>Category Page</h2>
    {/* <CollectionItem id={categoryId} /> */}
  </div>
);

export default Category;
