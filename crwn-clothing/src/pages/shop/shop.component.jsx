import React from "react";
import { Route, Switch } from "react-router-dom";

import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Switch>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </Switch>
  </div>
);

export default ShopPage;
