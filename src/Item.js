import React from 'react';


const Item = (props) =>{
	return (
	<div className="item">
		<div className="left">
			
			<ItemImage/>
			
			<div className="imageDescription">
				<ItemTitle title={props.title}/>
				<ItemDescription description={props.description}/>
			</div>
		</div>
		<div className="right">
			<ItemPrice price={props.price}/>
				{props.children}
		</div>
	
	</div>
	
	);
}


const ItemImage = () =>{
	return (
		<div className="itemImage">
			
		</div>
	);
}
const ItemTitle = (props) =>{
	return(
		<p className="itemTitle">{props.title}</p>
	);
}
const ItemDescription = (props) =>{
	return(
		<p className="itemDescription">{props.description}</p>
	);
}
const ItemPrice = (props) =>{
	return (
		<span className="itemPrice">${props.price}</span>
	);
}

export default (Item);