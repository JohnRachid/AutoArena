import * as React from "react";

import { Stage, Sprite, render, PixiRef } from '@inlet/react-pixi'

interface IChildComponentProps extends React.Props<any> {
    techLevel : number;
}

interface PassedProps extends React.Props<any> {
    techLevel : number;
  }

export class CreatureEgg extends React.Component<IChildComponentProps & PassedProps, any>  {
    techLevel : number = 0;
    type: string = 'headcrab';
    scale = { x: 1, y: 1 };

    constructor(props: PassedProps) {
        super(props);
        this.techLevel = props.techLevel;
        console.log(this.techLevel);

      }

      render(){

        return <Sprite
        image="src\assets\images\issaman.png"
            x={128}
            y={128}
            scale={this.scale}
            interactive={true}
            pointerdown={() => {
                this.handleClick()
               
              }}
             />;
      }

      handleClick = () => {
        console.log('Click happened');
        this.scale.x = this.scale.x * 2
        this.scale.y = this.scale.y * 2
        console.log(this.scale)
        this.render()
      }
}