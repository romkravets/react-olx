import React from "react";
import {useParams} from "react-router";
import {useStore} from "../../stores/createStore";

function ProductView() {
  const params = useParams();
  const store = useStore();
/*  const latestProducts = useStore((store) =>  store.latestProducts);*/

  const product = store.entities.products.collection.get(params.productsId);
  console.log(product, 'product');

  //const item = latestProducts.find((i) => i.id === +params.productsId);

/*  const product = useStore((store) => store.entities.products.collection.get(params.productsId));
  console.log(product.title);*/

  if (product) {
    return <div>{product.title}</div>
  }

  return <div>not found</div>
}

export default ProductView;
