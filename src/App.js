import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import React, { useState } from 'react';
import PlayerData from "./player-data.json";
import PlayerCard from "./PlayerCard";
import { Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0)
  const [country, setCountry] = useState("All");
  const [position, setPosition] = useState("All");

  var countryFilterClick = 0;
  var positionFilterClick = 0;


  function addToCart(item){
    setCartItems([...cartItems,item])
    setPrice(price + item.price)
  }

  function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  

  const matchCountry = item => {
    // all items should be shown when no filter is selected
    if(country === "All") { 
      return true
    } else if (country === item.team) {
      return true
    } else {
      return false
    }
  }

  const matchPosition = item => {
    // all items should be shown when no filter is selected
    if(position === "All") { 
      return true
    } else if (position === item.position) {
      return true
    } else {
      return false
    }
  }

  const filteredData = PlayerData.filter(matchCountry).filter(matchPosition);

  

  return (
    <div className="App">
      <div className = "sidenav" id="Sidenav">
      <a className = "title" href="#">World Cup 2022 Player Database</a> {/* TODO: personalize your bakery (if you want) */}
        <a href="#" onClick={() => {
    setCountry("All");
    setPosition("All");
    document.getElementById("allCountry").style.color = "yellow";
    document.getElementById("allPosition").style.color = "yellow";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "#818181";
    }}>All Players</a>
        
        
        <a href="#" onClick={() => {
          if(countryFilterClick === 0){
            document.getElementById("countryFilter").style.height = "120px";
            document.getElementById("countryFilter").style.visibility = "visible";
            countryFilterClick =1;
          }
          else{
            document.getElementById("countryFilter").style.visibility = "hidden";
            document.getElementById("countryFilter").style.height = "0px";
            countryFilterClick =0;
          }
    }}>Country Filter</a>

        <FormGroup className="checkboxmenu" id = "countryFilter">
        <a className="checkbox" id="allCountry" onClick={() => {
    setCountry("All");
    document.getElementById("allCountry").style.color = "yellow";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";

    }}>All Teams</a>
          <a className="checkbox" id = "argentina" onClick={() => {
    setCountry("Argentina");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "yellow";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    }}>Argentina</a>
          <a className="checkbox"  id = "spain"onClick={() => {
    setCountry("Spain");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "yellow";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
  }}>Spain</a>
  <a className="checkbox"  id = "france" onClick={() => {
    setCountry("France");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "yellow";
    document.getElementById("england").style.color = "#818181";
  }}>France</a>
  <a className="checkbox"  id = "england" onClick={() => {
    setCountry("England");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "yellow";
  }}>England</a>
          </FormGroup>
        <a href="#" onClick={() => {
          if(positionFilterClick === 0){
            document.getElementById("positionFilter").style.height = "120px";
            document.getElementById("positionFilter").style.visibility = "visible";
            positionFilterClick =1;
          }
          else{
            document.getElementById("positionFilter").style.visibility = "hidden";
            document.getElementById("positionFilter").style.height = "0px";
            positionFilterClick =0;
          }
    }}>Position Filter</a>

 <FormGroup className="checkboxmenu" id = "positionFilter">
 <a className="checkbox" id="allPosition"onClick={() => {
    setPosition("All");
    document.getElementById("allPosition").style.color = "yellow";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "#818181";
    }}>All Positions</a>
          <a className="checkbox" id = "att" onClick={() => {
    setPosition("Attacker");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "yellow";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "#818181";
    }}>Attacker</a>
          <a className="checkbox" id = "mf" onClick={() => {
    setPosition("Midfield");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "yellow";
    document.getElementById("df").style.color = "#818181";
  }}>Midfield</a>
  <a className="checkbox" id="df" onClick={() => {
    setPosition("Defender");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "yellow";
  }}>Defender</a>
          </FormGroup>




        <a href="#">Sort</a>
        <a className="checkbox" onClick={() => {
          
     filteredData = filteredData.sort((a, b) => {
      return a.goals - b.goals;})
    }}>By Goals</a>
    <a className="checkbox" onClick={() => {
     filteredData = filteredData.sort((a, b) => {
      return a.assist - b.assist;})
    }}>By Assists</a>
      
      </div>
      

      <div id="main">
      <div className = "BakeryContainer">
      <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 3, sm: 5, md: 12 }}>

      {filteredData.map((item, index) => ( 
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
    </div>
  );

}

export default App;
