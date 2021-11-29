import * as React from "react";

import { Stage, Sprite, render, PixiRef } from '@inlet/react-pixi'

interface IChildComponentProps extends React.Props<any> {
    //key: number;
    techLevel : number;
    creatureType : string;
    positionX: number;
    positionY: number;
}

interface PassedProps extends React.Props<any> {
    //key: number;
    techLevel : number;
    creatureType : string;
    positionX: number;
    positionY: number;
  }

export class CreatureEgg extends React.Component<IChildComponentProps & PassedProps, any>  {
    techLevel : number = 0;
    type: string = 'issaman';
    spriteImage: string = "blank";
    selected: boolean = false;
    scale = { x: 1, y: 1 };
    spriteX: number = 0;
    spriteY: number = 0;

    constructor(props: PassedProps) {
        super(props);
        this.techLevel = props.techLevel;
        this.type = props.creatureType;
        this.spriteX = props.positionX;
        this.spriteY = props.positionY;

        if(this.type === 'issaman') {
          this.spriteImage = "src/assets/images/issaman.png";
        } else if(this.type === 'charModel'){
          this.spriteImage = "src/assets/images/charModel.png";
        } else if(this.type === 'vinDiesel'){
          this.spriteImage = "src/assets/images/vinDiesel.png";
        } else if(this.type === 'spoolky'){
          this.spriteImage = "src/assets/images/spoolky.png";
        } 
      }

      render(){        
        return <Sprite
        image={this.spriteImage}
            x={this.spriteX}
            y={this.spriteY}
            scale={this.scale}
            visible={true} 
            interactive={true}
            pointerdown={() => {
                this.handleClick()
              }}
             />;
      }

      handleClick = () => {
        this.selected = !this.selected;
        this.render()
      }

      logMousePosition = (e: { clientX: any; clientY: any; }) => {
        this.setState({
            x: e.clientX - 30,
            y: e.clientY - 30
            });
      };

      componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition);
      }
}