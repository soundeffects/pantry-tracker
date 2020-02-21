import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListView from '../components/ListView';
import './Pantry.css';

const Pantry: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pantry</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListView />
      </IonContent>
    </IonPage>
  );
};

export default Pantry;
