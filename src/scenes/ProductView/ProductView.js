import React, {useEffect} from "react";
import {generatePath, useParams} from "react-router";
import {useProductsCollection} from "../../stores/Products/ProductsCollection";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";
import {Link} from "react-router-dom";
import {routes} from "../routes";
import {useUsersCollection} from "../../stores/Users/UsersCollection";

const ProductView = observer(() => {
  const { productId } = useParams();
  const collection = useProductsCollection();


  const product = collection.get(productId);


  useEffect(() => {
    if(!product) {
      collection.getProduct.run(productId);
    } else if (!product.owner) {
      product.fetchOwner();
    }
  }, []);

  if (collection.getProduct.isLoading) {
      return <div>Loading...</div>
  } else if (!product) {

      return <div>Not found</div>
  }

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
      </div>
      <div>
        <h3>Owner</h3>
        <UserInfo product={product}/>
      </div>
    </div>
  )
});

export default ProductView;

export  const  UserInfo = observer(({product}) => {
/*  const { productId } = useParams();*/
  const collection = useUsersCollection();


  /*  const product = collection.get(productId);*/


  useEffect(() => {
    if(!product.owner) {
      product.fetchOwner();
    }
  }, []);

  if (collection.getById.isLoading) {
    return <div>Loading...</div>
  } else if (!product.owner) {

    return <div>Not found</div>
  }

  return (
        <Link to={generatePath(routes.user, {userId: product.owner.id})}>
          {product.owner.fullName}
        </Link>
  )
});

