import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import {addCart} from "../Redux/action"
import {  useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response);
      setProduct(await response.json());
      setLoading  (false);
    };
    getProduct();
  } , []);


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  



  const Loading = () => {

    return ( 
      
<Fragment>
      <div className="col-md-6">
       <Skeleton height={400}/>
      </div>
      
      <div className="col-md-6" style={{lineHeight : 2 }}>
       <Skeleton height={50} width={300}/>
       <Skeleton height={75}/>
       <Skeleton height={25} width={150}/>
       <Skeleton height={50}/>
       <Skeleton height={150} />
       <Skeleton height={50} width={100} />
       <Skeleton height={50} width={100}  style={{marginLeft : 6}}/>
     
      </div>

</Fragment>

      
    )
  }

  const ShowProduct = () => {
    return (
      <Fragment>
        <div className="col-md-6 ">
          <img 
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>

        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {product.category}
            </h4>
            <h1 className="display-5"> {product.title}</h1>
            <p className="lead">
              Rating {product.rating && product.rating.rate} 
              
              <i class='fa fa-star ms-3 me-2  text-warning'></i>
              <i class='fa fa-star me-2 text-warning'></i>
              <i class='fa fa-star me-2 text-warning'></i>
              <i class='fa fa-star me-2 text-warning'></i>
              <i class='fa fa-star-half text-warning' ></i>
            </p>

            <h3 className="display-6 fw-bold  my-4"> ${product.price} </h3>
            <p className="lead"> {product.description} </p>
            <button className="btn btn-outline-success me-2 px-4 py-2" onClick={() => addProduct(product)} >Add to Cart</button>
            <NavLink to ="/cart" className="btn btn-outline-success py-2">Go to Cart</NavLink>
            
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading/> : <ShowProduct />}</div>
      </div>
    </Fragment>
  );
};

export default Product;

// ************************
