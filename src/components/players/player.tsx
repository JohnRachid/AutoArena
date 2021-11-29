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
    console.log('Click happened');
    this.scale.x = this.scale.x * 2
    this.scale.y = this.scale.y * 2
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
          pointerdown={() => {
            this.dragStart()
          }}
        />
    )
  }

  render() {
   return this.renderPlayer()
  }
}

