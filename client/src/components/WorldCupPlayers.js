import React from 'react';
import axios from 'axios';

class WorldCupPlayers extends React.Component {
    constructor(){
        super();
        this.state = {
            players:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(res =>{
            console.log("New Players data", res);
        })
        .catch(err =>{
            console.log("ERROR: ", err);
        })
    }
    

    render(){
        return(
            <div>PlayersInfo</div>
        )
    }
}
export default WorldCupPlayers;