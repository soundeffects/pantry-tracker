import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

export default class ListView extends React.Component {
  render() {
    return <IonList>
      <IonItem>
        <IonLabel>Test</IonLabel>
      </IonItem>
    </IonList>;
  }
}