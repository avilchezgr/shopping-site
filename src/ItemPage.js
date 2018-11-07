import React from 'react';
import Item from './Item.js';

function ItemPage(props) {
	return (
	<div className="itemPage">
		<ul> 
			{
				props.items.map((item) => 
					<li key={item.id}> 
						<Item title={item.name} 
						description={item.description}
						price={item.price}>
						
						<button type="button" className="buttonAddToCart" onClick={() => props.addItemToCart(item.id)}>Add to Cart</button>
						</Item> 
					</li> 
				) 
			
			}
		</ul> 
	</div>
	); 
} 

export default ItemPage;