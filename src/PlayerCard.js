import "./PlayerCard.css";
import {Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function PlayerCard(props){
    return(<div className="playerCard">
        <h3>{props.item.name}</h3>
        <img src ={props.item.image} alt = "portrait of the player" />
        <p>{props.item.position}</p>
        <p>{props.item.team}</p>
        <p>Goals: {props.item.goals}</p>
        <p>Assists: {props.item.assist}</p>
        <p>Fantasy Score: {props.item.fantasyScore}</p>

        
        <Button startIcon={<AddIcon/>} onClick={()=>{props.addToCart(props.item)}}>Add to players to watch</Button>
    </div>
    )
}

export default PlayerCard;