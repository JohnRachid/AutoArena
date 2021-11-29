import * as React from "react";
import * as ReactDOM from "react-dom";


import { Stage, Sprite, render, PixiRef } from '@inlet/react-pixi'


export class App extends React.Component {
  scale = { x: 1, y: 1 };

  constructor(props: any) {
    super(props);
    
  }

  handleClick = () => {
    console.log('Click happened');
    this.scale.x = this.scale.x * 2
    this.scale.y = this.scale.y * 2
    console.log(this.scale)
    this.render()
  }

  generateDude() {
    return (
      <Stage>
        <Sprite
          image="src\assets\charModel.png"
          x={64}
          y={64}
          scale={this.scale}
          interactive={true}
          pointerdown={() => {
            this.handleClick()
          }}
        />
      </Stage>
    )
  }

  render() {
   return this.generateDude()
  }
}

