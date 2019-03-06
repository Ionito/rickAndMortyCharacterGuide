import React, { Component } from "react";
import CharacterTable from "./components/characterTable";
import TopMenu from './components/topMenu';
import { getCharacter, getEpisode } from "rickmortyapi";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCaretRight, faSkullCrossbones, faQuestionCircle, faMapMarkerAlt,faUser} from '@fortawesome/free-solid-svg-icons';
library.add([faHeart,faCaretRight,faSkullCrossbones,faQuestionCircle,faMapMarkerAlt,faUser])


class App extends Component {

  state={
    episodes:[],
    selectedEpisode:'Filter by Episode',
    characters: [],
    page:1,
    showing:"all",
    nextPage:''
  }

   handleSelect = async (eventKey) => {
 
    if(eventKey==='all'){
      const {results: characters, info}= await getCharacter();
      this.setState({selectedEpisode:'Filter by Episode', showing:'all', characters, page:1, nextPage:info.next})
    }else{
      const  charactersIds = this.state.episodes[eventKey-1].characters.map(x=>x.slice(42));
      const characters = await getCharacter(charactersIds);
      this.setState({selectedEpisode:this.state.episodes[eventKey-1].episode, showing:'episode', characters, nextPage:''});
    }

  }

  async componentDidMount() {
    const { results: characters, info } = await getCharacter();
    const {results:episodes} = await getEpisode();
    this.setState({ characters, nextPage:info.next, episodes });
    
    window.onscroll = async() => {
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
         if(this.state.nextPage!==''){
              const page = this.state.page +1;
              const newChars = await getCharacter({page});
              const characters = [ ...this.state.characters, ...newChars.results]
              this.setState({characters,nextPage:newChars.info.next,page})
         }
         
        }
      };
  }


render() {
return (
<React.Fragment>
  <header>
     <TopMenu onSelect={this.handleSelect} episodes={this.state.episodes} title={this.state.selectedEpisode}/>
  </header>
  <main className="container">
     <CharacterTable characters={this.state.characters} more={(this.state.nextPage!=='')?true:false} />
  </main>
</React.Fragment>
);
}
}

export default App;