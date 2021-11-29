import * as React from "react";
import * as ReactDOM from "react-dom";


import { Stage, Sprite, render, PixiRef,  } from '@inlet/react-pixi'


export class Player extends React.Component {
  researchPoints: Number
  score: Number
  team: Number
  ready: Boolean
  sprite: string
  scale = { x: 1, y: 1 };
  angle = 0
  x: number;
  y:number;

  constructor(props: any) {
    super(props);
    this.researchPoints = props.researchPoints
    this.score = props.score
    this.team = props.team
    this.ready = props.ready
    this.sprite = props.sprite
  }

  dragStart = () => {
    console.log('Click down');

    console.log(this.scale)
    this.render()
  }

  dragEnd = () => {
    console.log('Click release');

    console.log(this.scale)
    this.render()
  }

  renderPlayer() {
    return (
        <Sprite
          image={this.sprite}
          x={64}
          y={64}
          scale={this.scale}
          interactive={true}
          draggable={true}
          pointerdown={() => {
            this.dragStart()
          }}
          pointerup={() => {
            this.dragStart()
          }}
        />
    )
  }

  render() {
   return this.renderPlayer()
  }
}

