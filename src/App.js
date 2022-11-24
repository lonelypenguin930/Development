import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import React, { useState } from 'react';
import PlayerData from "./player-data.json";
import PlayerCard from "./PlayerCard";

function App() {
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0)

  function addToCart(item){
    setCartItems([...cartItems,item])
    setPrice(price + item.price)
  }

  return (
    <div className="App">
      <h1>World Cup 2022 Player Database</h1> {/* TODO: personalize your bakery (if you want) */}
      
      <div className = "Filters">
        <h3> Filters</h3>
      </div>
      <div className = "BakeryContainer">
      <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 3, sm: 5, md: 12 }}>

      {PlayerData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      <Grid xs={2} sm={4} md={4} key={index}>
        <PlayerCard item = {item} addToCart = {addToCart}/>
        </Grid>
      ))}
      </Grid>
      </div>

      <div className = "Players to Watch">
        <h2>Players to Watch</h2>
        {cartItems.map((item, index) => (<p> {item.name}</p>))}
        <h2>Total Price: {price.toFixed(2)}</h2>
      </div>
    </div>
  );

}

export default App;
