import React from "react";
import {useParams} from "react-router";
import {useStore} from "../../stores/createStore";

function ProductView() {
  const params = useParams();
  const store = useStore();
/*  const latestProducts = useStore((store) =>  store.latestProducts);*/

  const latestProducts = store.latestProducts.items;
  const item = latestProducts.find((i) => i.id === +params.productsId);

  if (item) {
    return <div>{item.title}</div>
  }

  return <div>not found</div>
}

export default ProductView;
