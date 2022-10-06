import React, { useMemo } from "react";
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { BsSearch } from "react-icons/bs";
import Link from 'next/link';
import { BsBagCheckFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import { BsDashLg } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import Toggle from './Toggle';
import HIdeShow from './HIdeShow';
import { addToCart } from "../actions/cart";
import { updateProductQuantity, deleteProduct } from '../actions/cart'
import styles from '../styles/Menu.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import PlusMinusButton from "./PlusMinusButton";

const renderSearchDishes = (data) => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => {
    return useMemo (() => state.cart,[state.cart])
  });

  const cartIdArr = cartProducts.map((i)=>{
    return i.id

  })

  const handelquantity = (e, product) => {

    dispatch(addToCart(product))
  }

  return Object.values(data).map((product) => {


    return (


      <div className='row' key={product.itemCode}>
      {/* cart images */}
      <div className='col-md-2 col-11 mx-auto  d-flex bg-light justify-content-center align-items-center shadow product_img'>


        <img src={product.img} className='img-fluid' alt="cart img" />

      </div>

      <div className="col-md-8 col-11 mx-auto px-4 mt-2">

        <div className='row' >
          <div className='col-6 card-title'>
            <h1 className='mb-6 product_name'> {product.title} </h1>
           
            <p className='mb-2'>₹{product.price}</p>

          </div>
          {cartIdArr.some((p) => p == product.id ) ? (
           <PlusMinusButton/>
          ) : (
            <Button
              onClick={(e) => handelquantity(e, product)}
            >
               "Add to Cart"
            </Button>
          )}
          {/* <div className="col-6">
          <Button variant="light" className='add-to-cart shadow' id="add-animation"  type=" button"  onClick={(e) => handelquantity(e, product)} style={{ backgroundColor: product.id ===  ( [] || productId)?.find((n)=> n == product.id ) ? "red" : "blue" }}> ADD</Button>

          </div> */}
          <div className='row'>
            <div className="col-8 d-flex justify-content-between remove_wish">
            
              {/* <p><BsSuitHeartFill color="red" />Move to wish list</p> */}
              {/* onClick={() => handleRemove(item.itemcode)} */}

              {/* <div className="total">
                <span>₹  {product.quantity * product.price}</span>
                <span style={{ textDecoration:"line-through" }}> {product.mrp}</span>
              </div> */}
            </div>


          </div></div>

      </div>
      <hr />
    </div>

    )
  });

};

export default function SearchDishes() {
  const products = useSelector((state) => {
    return useMemo(() => state.teamMembers, [state.teamMembers]);
  });
  const [data, setData] = useState(products);


  const calculateProductsTotal = (products) =>
  products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const filterResult = (catItem) => {
    console.log(catItem)
    const result = products.filter((carData) => {
      return carData.category === catItem
    });
    setData(result);

  }

  return (
    <div className="container">

      <div className={styles.col}>
        <h1 className={styles.filter_title}>Filter By Category</h1>
      </div>

      <div className={styles.row} >
        {/* left */}
        <div className={styles.col}>
          <button className={styles.btn_category} onClick={() => setData(products)}>all</button>
          <button className={styles.btn_category} onClick={() => filterResult('Breakfast')}>BrekFast</button>
          <button className={styles.btn_category} onClick={() => filterResult('Lunch')}>lunch</button>
          <button className={styles.btn_category} onClick={() => filterResult('Dinner')}>dinner</button>

        </div>

        <div className={styles.col}>
          <div className="cards">
            <div className="row special-list">{renderSearchDishes(data)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
