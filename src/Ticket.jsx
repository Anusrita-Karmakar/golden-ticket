import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket,isWinning}){
    return (
        <div className={isWinning? "ticket-winning":"Ticket"}>
            {isWinning? <h2>Jackpot!</h2> : <h2>Ticket</h2>}
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}