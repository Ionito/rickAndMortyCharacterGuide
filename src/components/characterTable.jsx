import React, { Component } from "react";
import CharacterCard from "./characterCard";
import ScrollDownCard from "./scrollDownCard";

class CharacterTable extends Component {

  render() {
    const {characters, more} = this.props;
      console.log(more)
    return (
      <section>
        {characters.map(char => (
          <CharacterCard key={char.id} title={char.name} img={char.image} species={char.species} loc={char.location.name} status={char.status} created={char.created}/>
        ))}
        {
          (more)?<ScrollDownCard/>:''
        }
       
      </section>
    );
  }
}

export default CharacterTable;


