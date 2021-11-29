import * as React from "react";
import * as ReactDOM from "react-dom";


import { Stage, render, useApp, Sprite } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import { CreatureContainer } from "c:/git/AutoArena/src/components/creatureContainer";

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
    </Stage>
    </div>)
  }

  render() {
   return this.generateContainer()
  }
}

