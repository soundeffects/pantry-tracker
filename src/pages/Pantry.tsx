import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <ExploreContainer name="Pantry page" />
      </IonContent>
    </IonPage>
  );
};

export default Pantry;
