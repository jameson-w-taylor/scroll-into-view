import { useRef, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { DateRange, DayPicker } from 'react-day-picker';
import { addDays } from 'date-fns';

import './Home.css';

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const contentRef = useRef<HTMLIonContentElement>(null);
  const initialRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(initialRange);

  const confirm = () => {
    modal.current?.dismiss(null, 'confirm');
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton id="open-modal">Open Calendar</IonButton>

        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent ref={contentRef}>
            <DayPicker
              defaultMonth={new Date(2024, 0)}
              disableNavigation
              initialFocus={false}
              mode="range"
              numberOfMonths={12}
              selected={range}
              onSelect={setRange}
            />
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
