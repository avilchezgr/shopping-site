import React from 'react';
import Item from './Item.js';

function CartPage(props) {
	
	
	let empty = (
		<React.Fragment><p className="emptyCartP"> Your Cart is empty.</p> <p className="emptyCartP"> Why not add some expensive products to it?</p></React.Fragment>
	);
	let notEmpty = (

			<ul> 
				{
					props.items.map((item) => 
						<li key={item.id}> 
							<Item title={item.name} 
							description={item.description}
							price={item.price}>
							<div className="buttonsCartDiv">
								<button type="button" className="buttonAddToCart" onClick={() => props.addItemToCart(item.id)}>+</button>
								<span>{item.count}</span>
								<button type="button" className="buttonAddToCart" onClick={() => props.sustractItemFromCart(item.id)}>-</button>
							</div>
							</Item> 
						</li> 
					) 
				
				}
			</ul> 

	);
	
	return (
	
	<div>
	
	{props.isEmpty ? empty: notEmpty}
		
	</div>
	); 
} 

export default CartPage;