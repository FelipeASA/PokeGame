import React, { Component } from 'react';
import './Pokecard.css';
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):
    number);
class Pokecard extends Component{
   render(){
       let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
       //let imgSrc = `${POKE_API}${this.props.id}.png`;
       return(
           <div className={'Pokecard'}>
               <h4 className={"Pokecard-title"}>{this.props.name}</h4>
               <div className={'Pokecard-image'}>
                   <img src={imgSrc} alt={this.props.name} width={180} height={180}/>
               </div>
               <h2 className={"Pokecard-data"}>Type: {this.props.type}</h2>
               <h2 className={"Pokecard-data"}>EXP: {this.props.EXP}</h2>

           </div>
       )
   }
}

export default Pokecard