 import React, { Fragment } from 'react'
 import {useSelector, useDispatch} from 'react-redux';
 import { NavLink } from 'react-router-dom';
 import { addCart, deleteCart } from '../Redux/action';

 
 const Cart = () => {

    const state = useSelector((state)  => state.handleCart) ;
    const dispatch  = useDispatch() 


    const handleAddItem = (item) => {
        dispatch(addCart(item));
    }

    const handleDeleteItem = (item) => {
        dispatch(deleteCart(item));
    }


    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
            
                <div className="container py-4">
                
                    <div className="row py-5">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }


    const cartItem = (product) => {
        return (
            <Fragment>
            
                <div className='px-4 my-5 bg-light rounded-3 py-5'>
                
                        <div className="container py-4">
                            <div className="row  justify-content-center" >
                                <div className="col-md-4">
                                    <img src = {product.image} alt={product.title} height="190px" width="190px" />
                                </div>
                                <div className="col-md-4">
                                    <h3>{product.title}</h3>
                                    <div className='lead fw-bold'>



                                    <button className="btn btn-outline-primary me-4 my-4" onClick={()=>handleDeleteItem(product)}>
                                    <i className="fa fa-minus"></i>
                                     </button>
                                     <span  className='fs-4  text-primary   py-3 px-3'>{product.qty} </span>
                                     <button className="btn btn-outline-primary ms-3" onClick={()=> handleAddItem(product)}>
                                          <i className="fa fa-plus"></i>
                                    </button>

                                    
                                    <p className='lead fw-bold'>Product Price : ${product.price} </p>
                                    <p className='text-primary'>Total :${product.qty * product.price} </p>

                                     
                                    
                                    </div>
                                   
                                     
                                </div>
                            </div>
                        </div>
                </div>
            </Fragment>
        )
    }

    const button = () => {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </Fragment>
        )
    }

   return (
    <div>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItem)}
    {state.length !== 0 && button()}
</div>
   )
 }
 
 export default Cart
 