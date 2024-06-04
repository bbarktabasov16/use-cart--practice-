import React from "react";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
	const {addItem} = useCart()
  return (
    <div>
      <div className="card" style={styles}>
        <img src={props.img} className="card-img-top" />
        <div className="card-body" style={cardBody}>
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text">{props.description}</div>
					<h6 className="card-price">{props.price} сом</h6>
					<button className="btn btn-success" onClick={() => addItem(props.item)}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
	width: '200px',
	height: "350px"
}

const cardBody = {
	display: "flex",
	justifyContent: "space-around",
	flexDirection: "column"
}

export default ItemCard;
