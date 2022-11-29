import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import React, { useState } from 'react';
import PlayerData from "./player-data.json";
import PlayerCard from "./PlayerCard";
import { Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';
import { OtherHouses } from '@mui/icons-material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [fantasyScore, setfantasyScore] = useState(0)
  const [country, setCountry] = useState("All");
  const [position, setPosition] = useState("All");
  //0 = default, 1= goals, 2=assists, 3=fantasy score
  const [sort, setSort] = useState(0);

  var countryFilterClick = 0;
  var positionFilterClick = 0;


  function addToCart(item){
    var isDuplicate = false;
    for(var i=0; i<cartItems.length;i++){
      if(cartItems[i].name === item.name){
        isDuplicate = true;
      }
    }
  
    if(!isDuplicate){
    setCartItems([...cartItems,item])
    setfantasyScore(fantasyScore + item.fantasyScore)
    }
    else alert("Player is already added");
  }

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    const fs = e.target.getAttribute("fantasyScore");
     setCartItems(cartItems.filter(item => item.name !== name));
     setfantasyScore(fantasyScore-fs);
   };

  

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

  const sortData = item => {
    if(sort === 1){
      var gData = filteredData.sort((a, b) => {
        return b.goals - a.goals;})
        console.log(gData);
        for(var i=0; i<gData.length; i++){
          filteredData[i] = gData[i];
    }
  }
    else if (sort === 2){
      var aData = filteredData.sort((a, b) => {
        return b.assist - a.assist;})
        console.log(aData);
        for(var i=0; i<aData.length; i++){
          filteredData[i] = aData[i];
    }
    }
    else if (sort === 3){
      var fData = filteredData.sort((a, b) => {
        return b.fantasyScore - a.fantasyScore;})
        for(var i=0; i<fData.length; i++){
          filteredData[i] = fData[i];
    }
    }
  }

  const filteredData = PlayerData.filter(matchCountry).filter(matchPosition);
  sortData();

  

  return (
    <div className="App">
      <div className = "sidenav" id="Sidenav">
      <a className = "title" href="#">World Cup 2022 Player Database</a> {/* TODO: personalize your bakery (if you want) */}
        <a href="#" onClick={() => {
    setCountry("All");
    setSort(0);
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
    document.getElementById("goalSort").style.color = "#818181";
    document.getElementById("assistSort").style.color = "#818181";
    document.getElementById("fantasySort").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";

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
        <a href="#" className="checkbox" id="allCountry" onClick={() => {
    setCountry("All");
    document.getElementById("allCountry").style.color = "yellow";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";

    }}>All Teams</a>
          <a href="#" className="checkbox" id = "argentina" onClick={() => {
    setCountry("Argentina");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "yellow";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";
    }}>Argentina</a>
          <a href="#" className="checkbox"  id = "spain"onClick={() => {
    setCountry("Spain");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "yellow";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";
  }}>Spain</a>
  <a href="#" className="checkbox"  id = "france" onClick={() => {
    setCountry("France");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "yellow";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";
  }}>France</a>
  <a href="#" className="checkbox"  id = "england" onClick={() => {
    setCountry("England");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "yellow";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "#818181";
  }}>England</a>

<a href="#" className="checkbox"  id = "por" onClick={() => {
    setCountry("Portugal");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "yellow";
    document.getElementById("bra").style.color = "#818181";

  }}>Portugal</a>

<a href="#" className="checkbox"  id = "bra" onClick={() => {
    setCountry("Brazil");
    document.getElementById("allCountry").style.color = "#818181";
    document.getElementById("argentina").style.color = "#818181";
    document.getElementById("spain").style.color = "#818181";
    document.getElementById("france").style.color = "#818181";
    document.getElementById("england").style.color = "#818181";
    document.getElementById("por").style.color = "#818181";
    document.getElementById("bra").style.color = "yellow";
  }}>Brazil</a>
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
 <a href="#" className="checkbox" id="allPosition"onClick={() => {
    setPosition("All");
    document.getElementById("allPosition").style.color = "yellow";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "#818181";
    }}>All Positions</a>
          <a href="#" className="checkbox" id = "att" onClick={() => {
    setPosition("Attacker");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "yellow";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "#818181";
    }}>Attacker</a>
          <a href="#" className="checkbox" id = "mf" onClick={() => {
    setPosition("Midfield");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "yellow";
    document.getElementById("df").style.color = "#818181";
  }}>Midfield</a>
  <a href="#" className="checkbox" id="df" onClick={() => {
    setPosition("Defender");
    document.getElementById("allPosition").style.color = "#818181";
    document.getElementById("att").style.color = "#818181";
    document.getElementById("mf").style.color = "#818181";
    document.getElementById("df").style.color = "yellow";
  }}>Defender</a>
          </FormGroup>




          <FormGroup className="sortmenu" id = "sort">
        <a href="#" onClick={() => {
     setSort(0);
     document.getElementById("goalSort").style.color = "#818181";
    document.getElementById("assistSort").style.color = "#818181";
    document.getElementById("fantasySort").style.color = "#818181";

     
     }}>Sort</a>
        <a href="#" className="sortbox" id= "goalSort" onClick={() => {
          setSort(1);
          document.getElementById("goalSort").style.color = "yellow";
          document.getElementById("assistSort").style.color = "#818181";
          document.getElementById("fantasySort").style.color = "#818181";

      
    }}>By Goals</a>
    <a href="#" className="sortbox" id= "assistSort" onClick={() => {
     setSort(2);
     document.getElementById("goalSort").style.color = "#818181";
    document.getElementById("assistSort").style.color = "yellow";
    document.getElementById("fantasySort").style.color = "#818181";
    }}>By Assists</a>

<a href="#" className="sortbox" id= "fantasySort" onClick={() => {
     setSort(3);
     document.getElementById("goalSort").style.color = "#818181";
    document.getElementById("assistSort").style.color = "#818181";
    document.getElementById("fantasySort").style.color = "yellow";

    }}>By Fantasy Score</a>
      </FormGroup>
      </div>
      

      <div id="main">
      <div className = "PlayersToWatch">
        <h2>Players to Watch</h2>
        {cartItems.map((item, index) => (
        <>
        <div href="#" className = "PlayerInCart" name={item.name} fantasyScore = {item.fantasyScore} onClick={handleRemoveItem}>
          x {item.name}  ({item.fantasyScore})
        </div>
      </>
        ))}
        <h2>Average Fantasy Score: {(fantasyScore/cartItems.length).toFixed(2)}</h2>
        <Button onClick={()=> {window.location.reload(false);}}>Clear Players</Button>
      </div>
      <div className = "BakeryContainer">
        
      <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 3, sm: 5, md: 12 }}>

      {filteredData.map((item, index) => ( 
      <Grid xs={2} sm={3} md={4} key={index}>
        <PlayerCard item = {item} addToCart = {addToCart}/>
        </Grid>
      ))}
      </Grid>
      </div>

      
      </div>
    </div>
  );

}

export default App;
