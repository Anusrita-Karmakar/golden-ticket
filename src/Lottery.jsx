import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
            <Ticket ticket={ticket} isWinning={isWinning}/>
        </div>
        <br></br>
        <button onClick={buyTicket}>Buy New Ticket</button>
        {isWinning ? (<h3 >Congratulations, you've got the golden ticket!</h3>): null}
        </div>
    );
}