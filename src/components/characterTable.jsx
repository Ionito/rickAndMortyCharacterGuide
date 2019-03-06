import React, { Component } from "react";
import CharacterCard from "./characterCard";

class CharacterTable extends Component {

  render() {
    const characters = this.props.characters;

    return (
      <section>
        {characters.map(char => (
          <CharacterCard key={char.id} title={char.name} img={char.image} species={char.species} loc={char.location.name} status={char.status} created={char.created}/>
        ))}
      </section>
    );
  }
}

export default CharacterTable;


