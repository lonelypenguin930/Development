import "./PlayerCard.css";

function PlayerCard(props){
    return(<div className="playerCard">
        <h3>{props.item.name}</h3>
        <img src ={props.item.image} alt = "portrait of the player" />
        <p>Position: {props.item.position}</p>
        <p>Team: {props.item.team}</p>
        <p>Goals: {props.item.goals}</p>
        <p>Assists: {props.item.assist}</p>

        
        <button onClick={()=>{props.addToCart(props.item)}}>Add to players to watch</button>
    </div>
    )
}

export default PlayerCard;