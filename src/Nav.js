import React from 'react';


const Nav = (props) =>{
	
	return (
		<div className="nav">
			<div className="leftNav">
				<ul>
					<li>
						<a onClick={props.handleClickItems} className={props.selectedTab === 'items'  ? "activeTab": ""}>Items</a>
					</li>
					
					<li>
						<a onClick={props.handleClickCart} className={props.selectedTab === 'cart'  ? "activeTab": ""}>Cart</a>
					</li>
				</ul>
				
			</div>
			<div className="rightNav">
				<a onClick={props.handleClickCart}>
					<i class="fas fa-shopping-cart"></i><span> {props.totalNItems} items</span>
						<span>(${props.totalPrice})</span>
				</a>
			</div>
		</div>
	);
}

export default Nav;