import React, {useState} from 'react';
import axios from 'axios';
import './WorldCupPlayers.css';

class WorldCupPlayers extends React.Component {
    constructor(){
        super();
        this.state = {
            players:[],
            cardInfo:true
        }
   
    }

    

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(res =>{
            console.log("New Players data", res);
            this.setState({players:res.data});
            console.log("Fetched Api into Player state: ", this.state.players);
        })
        .catch(err =>{
            console.log("ERROR: ", err);
        })
  
    }
    
    // toggleCard = event => {
    //     event.preventDefault();
    //     console.log("toggleCard triggered");
    //     this.props.button;
    // }

    render(){
        return(
            <section>
            <h1 data-testid="playerhead">Players Info</h1>
            
            <div className="cardHolder">
            {this.state.players.map(info =>{
                return(
                <div className="mainCard" key={info.id}>
                <h3>Name: {info.name}</h3>
                <h6 className={this.cardInfo ? 'cardShow' : 'cardHide'}>Country: {info.country}</h6>
                <p className={this.cardInfo ? 'cardShow' : 'cardHide'}>Searches: {info.searches}</p>
                <button onClick={this.props.toggle}>Show Info</button>
                </div>
                )
            })}
            </div>
            </section>
        )
    }
}
export default WorldCupPlayers;