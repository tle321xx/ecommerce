import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
    {/* add onClick={window.scrollTo(0,0)} ทำให้สามารถคลิก item ที่อยู่ตรง related ให้ไปที่สินค้านั้นได้ */}
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
