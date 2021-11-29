import * as React from "react";
import * as ReactDOM from "react-dom";


import { Stage, render, useApp, Sprite } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import { CreatureContainer } from "./../../components/creatureContainer";
import { Player } from "./../../components/players/player";

export class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  handleClick = () => {
    this.render();
  }

  generateContainer() {
    return (<div onClick={this.handleClick}>
    <Stage>
      <CreatureContainer></CreatureContainer>
      <Player
      researchPoints={0}
      team={0}
      ></Player>
      <Player
      researchPoints={0}
      team={1}
      ></Player>
    </Stage>
    </div>)
  }

  render() {
   return this.generateContainer()
  }
}

