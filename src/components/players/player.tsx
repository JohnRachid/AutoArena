import * as React from "react";
import * as ReactDOM from "react-dom";


import { Stage, Sprite, render, PixiRef,  } from '@inlet/react-pixi'

interface IChildComponentProps extends React.Props<any> {
  //key: number;
  researchPoints: Number
  score: Number
  team: Number
  ready: Boolean
  sprite: string
  scale: { x: Number, y: Number };
  angle:Number
  x: number;
  y:number;
}

interface PassedProps extends React.Props<any> {
  //key: number;
  researchPoints: Number
  score: Number
  team: Number
  ready: Boolean
  scale: { x: Number, y: Number };
  angle:Number
  x: number;
  y:number;
}

export class Player extends React.Component {
  researchPoints: Number
  score = 0
  team: Number
  ready = false
  selected = false
  scale = { x: 1, y: 1 };
  angle = 0
  sprite = 'src/assets/images/charModel.png'
  x: number;
  y:number;

  constructor(props: any) {
    super(props);
    this.researchPoints = props.researchPoints
    this.team = props.team
    if(this.team == 0 ){
      this.x = 50
      this.y = 250
    }else{
      this.x = 500
      this.y = 250
    }
    this.render()

  }

  // logMousePosition = (e: { clientX: any; clientY: any; }) => {
  //     if(this.selected){
  //       this.x = e.clientX
  //       this.y = e.clientY
  //       console.log(this.x, this.y)
  //       this.render()
  //     }
  // };

  componentDidMount() {
  }

  dragStart = () => {
    // window.addEventListener("mousemove", this.logMousePosition, true);
    console.log(this.x, this.y)

    this.x = this.x-10
    this.y = this.y-10
    console.log(this.x, this.y)
    this.render()
  }

  dragEnd = () => {
  //  window.removeEventListener("mousemove", this.logMousePosition, false)
  }

  renderPlayer() {
    return (
        <Sprite
          image={this.sprite}
          x={this.x}
          y={this.y}
          scale={this.scale}
          interactive={true}
          draggable={true}
          pointerdown={() => {
            this.selected = true;
            this.dragStart()
          }}
          pointerup={() => {
            this.selected = false
            this.dragEnd()
          }}
        />
    )
  }

  render() {
   return this.renderPlayer()
  }
}

