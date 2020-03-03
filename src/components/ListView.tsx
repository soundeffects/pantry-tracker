import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import FoodItem from './FoodItem';

interface IProps {
  children?: any;
}

interface IState {
  items: FoodItem[];
}

export default class ListView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: [
        new FoodItem("Bread", new Date()),
        new FoodItem("Oats", new Date()),
        new FoodItem("Cereal", new Date()),
        new FoodItem("Candy", new Date()),
        new FoodItem("Milk", new Date()),
        new FoodItem("Apples", new Date()),
        new FoodItem("Potatoes", new Date()),
        new FoodItem("Soup Cans", new Date()),
        new FoodItem("Mushrooms", new Date()),
        new FoodItem("Chips", new Date()),
        new FoodItem("Cookies", new Date()),
        new FoodItem("Rice", new Date()),
      ]
    }
  }
  
  renderList() {
    return this.state.items.map((item:FoodItem) => {
      return <IonItem>
        <IonLabel>{item.getName()}</IonLabel>
        <IonLabel>{item.getExpiryDate().toString()}</IonLabel>
      </IonItem>;
    });
  }
  
  render() {
    return <IonList>
      { this.renderList() }
    </IonList>;
  }
}