import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <Fragment>
        <div className="col-md-3">
          <Skeleton variant="rectangular" height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton variant="rectangular" height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton variant="rectangular" height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton variant="rectangular" height={350} />
        </div>
      </Fragment>
    );
  };

  const filterProduct = (item) => {
    const updatedList = data.filter((categ) => categ.category === item);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <Fragment>
        <div className="buttons filter d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((item) => {
          return (
            <Fragment>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={item.id}>
                  <img
                    src={item.image}
                    class="card-img-top"
                    alt={item.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {item.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${item.price}</p>
                    <NavLink
                      to={`/product/${item.id}`}
                      className="btn btn-outline-primary"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
               
            </div>
              
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center underline">
              Latest Products
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;



