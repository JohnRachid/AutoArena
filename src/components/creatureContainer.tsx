import { Container, Sprite } from "@inlet/react-pixi";
import * as React from "react";
import { CreatureEgg } from "./creatureEgg";

export class CreatureContainer extends React.Component {

    creatureEggs = this.initializeEggs();

    constructor(props: any) {
        super(props);
        this.render();
      }
 
      render(){
          try {
        return <Container> {
            this.creatureEggs.map((item) => (
                <CreatureEgg key = {item.creatureType}
                techLevel={item.techLevel} 
                creatureType={item.creatureType} 
                positionX={item.positionX} 
                positionY={item.positionY}
                />
            ))}
        </Container>}
        catch(e ){
            console.log('catch ' + e);
        }
      }

      initializeEggs() : any[] {
        var listOfEggs = [];
        listOfEggs.push({techLevel: 0, creatureType:'issaman', positionX:0, positionY:0 });
        listOfEggs.push({techLevel: 0, creatureType:'charModel', positionX:100, positionY:0 });
        listOfEggs.push({techLevel: 0, creatureType:'vinDiesel', positionX:200, positionY:0 });
        listOfEggs.push({techLevel: 0, creatureType:'spoolky', positionX:300, positionY:0 });
    
        return listOfEggs;
    }
}



// return <Container>
//             <Sprite image="src\assets\images\charModel.png" 
//             x={this.sprite0X} 
//             y={this.sprite0Y} 
//             visible={true} 
//             interactive={true}
//             pointerdown={() => {
//                 this.handleClick(0)
//             }}/>

//             <Sprite image="src\assets\images\vinDiesel.png" 
//             x={this.sprite1X} 
//             y={this.sprite1Y} 
//             visible={true}
//             interactive={true} 
//             pointerdown={() => {
//                 this.handleClick(1)
//             }}/>

//             <Sprite image="src\assets\images\issaman.png" 
//             x={this.sprite2X} 
//             y={this.sprite2Y} 
//             visible={true} 
//             interactive={true}
//             pointerdown={() => {
//                 this.handleClick(2) 
//             }}/>

//             <Sprite image="src\assets\images\spoolky.png" 
//             x={this.sprite3X} 
//             y={this.sprite3Y} 
//             visible={true}
//             interactive={true}
//             pointerdown={() => {
//                 this.handleClick(3)
//               }}/>