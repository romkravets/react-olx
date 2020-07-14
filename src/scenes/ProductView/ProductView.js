import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useProductsCollection} from "../../stores/Products/ProductsCollection";
import {observer} from "mobx-react";
//import {withSuspense} from 'src/hocs/withSuspense';

const  ProductView = observer(() => {
  const { productsId } = useParams();
  const collection = useProductsCollection();

  const product = collection.get(productsId);

  useEffect(() => {
    if(!product) {
      collection.getProduct.run(productsId);
    }
  }, []);

  if (collection.getProduct.isLoading) {
    return <div>Loading...</div>
  } else if (!product) {
    return <div>Not found</div>
  }

  return <div>{product.title}</div>
});

export default ProductView;

/*
const ProductView = observer(() => {
  const { productId } = useParams();
  const collection = useProductsCollection();

  const product = collection.productsById.read(productId);

  return <div>{product.title}</div>

});

export default  withSuspense(
  ProductView,
  () => <div>Not found</div>,
  () => <div>Loading...</div>
)
*/
