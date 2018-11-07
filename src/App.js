import React, { Component } from 'react';
import Nav from './Nav.js';
import './App.css';
import {items} from './staticData.js';
import ItemPage from './ItemPage.js';
import CartPage from './CartPage.js';

class App extends Component {
	
   constructor(){
	  super();
	  this.state = ({
		  currentTab:'items',
		  arrayItemsCart:[0,2,4,2]
	  });
   }
  
  addItemToCart = (itemId) =>{
	 this.setState({
		arrayItemsCart : [...this.state.arrayItemsCart,itemId]
	}); 
  }
  sustractItemFromCart = (itemId) =>{//esto es una forma de quitar un elemento del array usando inmutabilidad, que al parecer es basico en redux
	  let i = this.state.arrayItemsCart.indexOf(itemId);
	
	  if(i != -1){
		  this.setState({
			  arrayItemsCart: [
				...this.state.arrayItemsCart.slice(0,i), 
				...this.state.arrayItemsCart.slice(i+1)
			  ]
		  });
	  }
  }
  
  renderItemsCart = () =>{
	  
		let itemCounts = this.state.arrayItemsCart.reduce((itemCounts, itemId) =>{
			itemCounts[itemId] = itemCounts[itemId] || 0; //esto lo que hace es que si es undefined le da valor 0 para que no haya que inicializarlo
			itemCounts[itemId]++;
			return itemCounts;
		},{});
		
		let itemsCart = Object.keys(itemCounts).map(itemId => {
			let item = items.find(item => 
				item.id === parseInt(itemId,10));
				//el siguiente return al usar ...item lo que se hace
				//es que se añade un campo 'count' al objeto item
			return {
				...item,count:itemCounts[itemId]
			}
		});
		
		 return (<CartPage 
				items={itemsCart}
				sustractItemFromCart={this.sustractItemFromCart}
				isEmpty={itemsCart.length === 0 ? true: false}
				addItemToCart={this.addItemToCart}
			/>)
		
		
  }
  
  
	renderNav = () =>{
		
		let itemCounts = this.state.arrayItemsCart.reduce((itemCounts, itemId) =>{
			itemCounts[itemId] = itemCounts[itemId] || 0; //esto lo que hace es que si es undefined le da valor 0 para que no haya que inicializarlo
			itemCounts[itemId]++;
			return itemCounts;
		},{});
		
		let sumaItems = 0;
		let sumaPrice = 0;
		
		let itemsCart = Object.keys(itemCounts).map(itemId => {
			let item = items.find(item => 
				item.id === parseInt(itemId,10));
				sumaItems = sumaItems + itemCounts[itemId];
				sumaPrice = sumaPrice + (itemCounts[itemId]*item.price)
				
		});
		
		
		
		return (
			<Nav 
				selectedTab = {this.state.currentTab}
				handleClickItems={this.toggleToItems}
				handleClickCart={this.toggleToCart}
				totalPrice = {sumaPrice.toFixed(2)}
				totalNItems= {sumaItems}
			/>
		);
	}
  
  //gestiona link nav
  toggleToCart = () =>{
	this.setState({currentTab:'cart'} ); 
	
  }
  //gestiona link nav
  toggleToItems = () =>{
	this.setState({currentTab:'items'});  
  }
  
 
  
  
  render() {
	let mainContent = "";
	  if(this.state.currentTab === 'items'){
		mainContent = (
		<ItemPage items={items}
			addItemToCart={this.addItemToCart}
		/>
		  )
	  }else{
		mainContent = this.renderItemsCart();
	  }
	
    return (
	
	
      <div className="App">
	
		{this.renderNav()}
		{mainContent}
		
      </div>
    );
  }
}

export default App;
