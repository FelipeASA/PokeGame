import React, {Component} from 'react';
import Pokedex from './Pokedex';
import "./Pokegame.css";
import NavBar from './NavBar';


function generateHand(pokemon, n){

    let hand = [];
    while(hand.length < n ){
        let randomIndex = Math.floor(Math.random() * pokemon.length );
        let randomPokemon = pokemon[randomIndex];
        if( !hand.includes(randomPokemon)){
            hand.push(randomPokemon)
        }
    }
    return hand;
}

class Pokegame extends Component{
    static defaultProps ={
    "pokemon":[
        {"id": 1, "name":"Bulbasaur", "type":"Grass/Poison", "EXP": 62},
        {"id": 2, "name":"Ivisaur", "type":"Grass/Poison", "EXP": 120},
        {"id": 3, "name":"Venusaur", "type":"Grass/Poison", "EXP": 240},
        {"id": 4, "name":"Charmander", "type":"Fire", "EXP": 62},
        {"id": 5, "name":"Charmeleon", "type":"Fire", "EXP": 120},
        {"id": 6, "name":"Charizard", "type":"Fire/Fliying", "EXP": 240},
        {"id": 7, "name":"Squirtle", "type":"Water", "EXP": 62},
        {"id": 8, "name":"Wartortle", "type":"Water", "EXP": 120},
        {"id": 9, "name":"Blastoise", "type":"Water", "EXP": 240},
        {"id": 10, "name":"Caterpie", "type":"Bug", "EXP": 30},
        {"id": 11, "name":"Metapod", "type":"Bug", "EXP": 60},
        {"id": 12,"name" :"Butterfree", "type":"Bug/Fliying", "EXP": 120},
        {"id": 13, "name":"Weedle", "type":"Bug/Poison", "EXP": 30},
        {"id": 14, "name":"Kakuna", "type":"Bug/Poison", "EXP": 62},
        {"id": 15, "name":"Beedril", "type":"Bug/Poison", "EXP": 120},
        {"id": 16, "name":"Pidgey", "type":"Normal/Fliying", "EXP": 40},
        {"id": 17, "name":"Pidgeotto", "type":"Normal/Fliying", "EXP": 80},
        {"id": 18, "name":"Pidgeot", "type":"Normal/Fliying", "EXP": 160},
        {"id": 19, "name":"Rattata", "type":"Normal", "EXP": 30},
        {"id": 20, "name":"Raticate", "type":"Normal", "EXP": 60},
        {"id": 21, "name":"Spearow", "type":"Normal/Fliying", "EXP": 40},
        {"id": 22, "name":"Fearow", "type":"Normal/Fliying", "EXP": 80},
        {"id": 23, "name":"Ekans", "type":"Poison", "EXP": 50},
        {"id": 24, "name":"Arbok", "type":"Poison", "EXP": 100},
        {"id": 25, "name":"Pikachu", "type":"Electric", "EXP": 80},
        {"id": 26, "name":"Raichu", "type":"Electric", "EXP": 160},
        {"id": 27, "name":"Sandshrew", "type":"Ground", "EXP": 160},
        {"id": 28, "name":"Sandslash", "type":"Ground", "EXP": 160},
        {"id": 29, "name":"Nidoran♀", "type":"Poison", "EXP": 60},
        {"id": 30, "name":"Nidorina", "type":"Poison", "EXP": 120},
        {"id": 31, "name":"Nidoqueen", "type":"Poison/Ground", "EXP": 240},
        {"id": 32, "name":"Nidoran♂", "type":"Poison", "EXP": 60},
        {"id": 33, "name":"Nidorino", "type":"Poison", "EXP": 120},
        {"id": 34, "name":"Nidoking", "type":"Poison/Ground", "EXP": 240},
        {"id": 35, "name":"Clefairy", "type":"Fairy", "EXP": 80},
        {"id": 36, "name":"Clefable", "type":"Fairy", "EXP": 160},
        {"id": 37, "name":"Vulpix", "type":"Fire", "EXP": 80},
        {"id": 38, "name":"Ninetales", "type":"Fire", "EXP": 160},
        {"id": 39, "name":"Jigglypuff", "type":"Normal/Fairy", "EXP": 80},
        {"id": 40, "name":"Wigglytuff", "type":"Normal/Fairy", "EXP": 160},
        {"id": 41, "name":"Zubat", "type":"Poison/Fliying", "EXP": 80},
        {"id": 42, "name":"Golbat", "type":"Poison/Fliying", "EXP": 160},
        {"id": 43, "name":"Oddish", "type":"Grass/Poison", "EXP": 60},
        {"id": 44, "name":"Gloom", "type":"Grass/Poison", "EXP": 120},
        {"id": 45, "name":"Vileplum", "type":"Grass/Poison", "EXP": 240},
        {"id": 46, "name":"Paras", "type":"Bug/Grass", "EXP": 80},
        {"id": 47, "name":"Parasect", "type":"Bug/Grass", "EXP": 160},
        {"id": 48, "name":"Venonat", "type":"Bug/Poison", "EXP": 90},
        {"id": 49, "name":"Venomoth", "type":"Bug/Poison", "EXP": 180},
        {"id": 50, "name":"Diglett", "type":"Ground", "EXP": 90},
        {"id": 51, "name":"Dugtrio", "type":"Ground", "EXP": 180},
        {"id": 52, "name":"Meowth", "type":"Normal", "EXP": 30},
        {"id": 53, "name":"Persian", "type":"Normal", "EXP": 60},
        {"id": 54, "name":"Psyduck", "type":"Water", "EXP": 90},
        {"id": 55, "name":"Golduck", "type":"Water", "EXP": 180},
        {"id": 56, "name":"Mankey", "Type":"Fighting", "EXP": 80},
        {"id": 57, "name":"Primeape", "Type":"Fighting", "EXP": 160},
        {"id": 58, "name":"Growlithe", "Type":"Fire", "EXP": 90},
        {"id": 59, "name":"Arcanine", "Type":"Fire", "EXP": 240},
        {"id": 60, "name":"Poliwag", "Type":"Water", "EXP": 60},
        {"id": 61, "name":"Poliwhirl", "Type":"Water", "EXP": 120},
        {"id": 62, "name":"Poliwrath", "Type":"Water/Fighting", "EXP": 240},
        {"id": 63, "name":"Abra", "Type":"Psychic", "EXP": 60},
        {"id": 64, "name":"Kadabra", "Type":"Psychic", "EXP": 120},
        {"id": 65, "name":"Alakazam", "Type":"Psychic", "EXP": 240},
        {"id": 66, "name":"Machop", "Type":"Fighting", "EXP": 60},
        {"id": 67, "name":"Machoke", "Type":"Fighting", "EXP": 120},
        {"id": 68, "name":"Machamp", "Type":"Fighting", "EXP": 240},
        {"id": 69, "name":"Bellsprout", "Type":"Grass/Poison", "EXP": 50},
        {"id": 70, "name":"Weepinbell", "Type":"Grass/Poison", "EXP": 100},
        {"id": 71, "name":"Victreebel", "Type":"Grass/Poison", "EXP": 200},
        {"id": 72, "name":"Tentacool", "Type":"Water/Poison", "EXP": 80},
        {"id": 73, "name":"Tentacruel", "Type":"Water/Poison", "EXP": 160},
        {"id": 74, "name":"Geodude", "Type":"Rock/Ground", "EXP": 60},
        {"id": 75, "name":"Graveler", "Type":"Rock/Ground", "EXP": 120},
        {"id": 76, "name":"Golem", "Type":"Rock/Ground", "EXP": 240},
        {"id": 77, "name":"Ponyta", "Type":"Fire", "EXP": 90},
        {"id": 78, "name":"Rapidash", "Type":"Fire", "EXP": 180},
        {"id": 79, "name":"Slowpoke", "Type":"Water/Psychic", "EXP": 120},
        {"id": 80, "name":"Slowbro", "Type":"Water/Psychic", "EXP": 240},
        {"id": 81, "name":"Magnemite", "Type":"Electric/Steel", "EXP": 100},
        {"id": 82, "name":"Magneton", "Type":"Electric/Steel", "EXP": 200},
        {"id": 83, "name":"Farfetch'd", "Type":"Normal/Flying", "EXP": 100},
        {"id": 84, "name":"Doduo", "Type":"Normal/Flying", "EXP": 80},
        {"id": 85, "name":"Dodrio", "Type":"Normal/Flying", "EXP": 160},
        {"id": 86, "name":"Seel", "Type":"Water", "EXP": 100},
        {"id": 87, "name":"Dewgong", "Type":"Water/Ice", "EXP": 200},
        {"id": 88, "name":"Grimer", "Type":"Poison", "EXP": 90},
        {"id": 89, "name":"Muk", "Type":"Poison", "EXP": 180},
        {"id": 90, "name":"Shellder", "Type":"Water", "EXP": 110},
        {"id": 91, "name":"Cloyster", "Type":"Water/Ice", "EXP": 220},
        {"id": 92, "name":"Gastly", "Type":"Ghost/Poison", "EXP": 60},
        {"id": 93, "name":"Haunter", "Type":"Ghost/Poison", "EXP": 120},
        {"id": 94, "name":"Gengar", "Type":"Ghost/Poison", "EXP": 240},
        {"id": 95, "name":"Onix", "Type":"Rock/Ground", "EXP": 240},
        {"id": 96, "name":"Drowzee", "Type":"Psychic", "EXP": 100},
        {"id": 97, "name":"Hypno", "Type":"Psychic", "EXP": 200},
        {"id": 98, "name":"Krabby", "Type":"Water", "EXP": 90},
        {"id": 99, "name":"Kingler", "Type":"Water", "EXP": 180},
        {"id": 100, "name":"Voltorb", "Type":"Electric", "EXP": 110},
        {"id": 101, "name":"Electrode", "Type":"Electric", "EXP": 220},
        {"id": 102, "name":"Exeggcute", "Type":"Grass/Psychic", "EXP": 100},
        {"id": 103, "name":"Exeggutor", "Type":"Grass/Psychic", "EXP": 240},
        {"id": 104, "name":"Cubone", "Type":"Ground", "EXP": 80},
        {"id": 105, "name":"Marowak", "Type":"Ground", "EXP": 160},
        {"id": 106, "name":"Hitmonlee", "Type":"Fighting", "EXP": 150},
        {"id": 107, "name":"Hitmonchan", "Type":"Fighting", "EXP": 150},
        {"id": 108, "name":"Lickitung", "Type":"Normal", "EXP": 120},
        {"id": 109, "name":"Koffing", "Type":"Poison", "EXP": 80},
        {"id": 110, "name":"Weezing", "Type":"Poison", "EXP": 200},
        {"id": 111, "name":"Rhyhorn", "Type":"Ground/Rock", "EXP": 110},
        {"id": 112, "name":"Rhydon", "Type":"Ground/Rock", "EXP": 220},
        {"id": 113, "name":"Chansey", "Type":"Normal", "EXP": 200},
        {"id": 114, "name":"Tangela", "Type":"Grass", "EXP": 80},
        {"id": 115, "name":"Kangaskhan", "Type":"Normal", "EXP": 150},
        {"id": 116, "name":"Horsea", "Type":"Water", "EXP": 80},
        {"id": 117, "name":"Seadra", "Type":"Water", "EXP": 170},
        {"id": 118, "name":"Goldeen", "Type":"Water", "EXP": 100},
        {"id": 119, "name":"Seaking", "Type":"Water", "EXP": 200},
        {"id": 120, "name":"Staryu", "Type":"Water", "EXP": 110},
        {"id": 121, "name":"Starmie", "Type":"Water/Psychic", "EXP": 220},
        {"id": 122, "name":"Mr.Mime", "Type":"Psychic/Fairy", "EXP": 180},
        {"id": 123, "name":"Scyther", "Type":"Bug/Flying", "EXP": 190},
        {"id": 124, "name":"Jynx", "Type":"Ice/Psychic", "EXP": 200},
        {"id": 125, "name":"Electabuzz", "Type":"Electric", "EXP": 180},
        {"id": 126, "name":"Magmar", "Type":"Fire", "EXP": 180},
        {"id": 127, "name":"Pinsir", "Type":"Bug", "EXP": 160},
        {"id": 128, "name":"Tauros", "Type":"Normal", "EXP": 190},
        {"id": 129, "name":"Magikarp", "Type":"Water", "EXP": 10},
        {"id": 130, "name":"Gyarados", "Type":"Water/Flying", "EXP": 240},
        {"id": 131, "name":"Lapras", "Type":"Water/Ice", "EXP": 240},
        {"id": 132, "name":"Ditto", "Type":"Normal", "EXP": 120},
        {"id": 133, "name":"Eevee", "Type":"Normal", "EXP": 60},
        {"id": 134, "name":"Vaporeon", "Type":"Water", "EXP": 200},
        {"id": 135, "name":"Jolteon", "Type":"Electric", "EXP": 220},
        {"id": 136, "name":"Flareon", "Type":"Fire", "EXP": 190},
        {"id": 137, "name":"Porygon", "Type":"Normal", "EXP": 80},
        {"id": 138, "name":"Omanyte", "Type":"Rock/Water", "EXP": 80},
        {"id": 139, "name":"Omastar", "Type":"Rock/Water", "EXP": 160},
        {"id": 140, "name":"Kabuto", "Type":"Rock/Water", "EXP": 90},
        {"id": 141, "name":"Kabutops", "Type":"Rock/Water", "EXP": 180},
        {"id": 142, "name":"Aerodactyl", "Type":"Rock/Flying", "EXP": 220},
        {"id": 143, "name":"Snorlax", "Type":"Normal", "EXP": 240},
        {"id": 144, "name":"Articuno", "Type":"Ice/Flying", "EXP": 280},
        {"id": 145, "name":"Zapdos", "Type":"Electric/Flying", "EXP": 300},
        {"id": 146, "name":"Moltres", "Type":"Fire/Flying", "EXP": 280},
        {"id": 147, "name":"Dratini", "Type":"Dragon", "EXP": 60},
        {"id": 148, "name":"Dragonair", "Type":"Dragon", "EXP": 120},
        {"id": 149, "name":"Dragonite", "Type":"Dragon/Flying", "EXP": 240},
        {"id": 150, "name":"Mewtwo", "Type":"Psychic", "EXP": 350},
        {"id": 151, "name":"Mew", "Type":"Psychic", "EXP": 400}

        ]



    };
    render(){

        let hand1 = generateHand(this.props.pokemon, 4);
        let hand2 = generateHand(this.props.pokemon.filter( p => !hand1.includes(p)),4);
        let exp1 = hand1.reduce((exp, pokemon ) => exp + pokemon.EXP,
            0);
        let exp2 = hand2.reduce((exp, pokemon ) => exp + pokemon.EXP,
            0);

        return(
            <div>
            <NavBar/>
            <div className={"Pokegame "}>


                <Pokedex className={"Teams"} pokemon={hand1} exp ={exp1} isWinner={exp1 > exp2}/>


                <Pokedex className={"Teams"} pokemon={hand2} exp = {exp2} isWinner={exp2 > exp1}/>
                <br/>
                <h1>Pokedex, First Generation, </h1>
            </div>
            </div>
        )
    }
}
export default Pokegame