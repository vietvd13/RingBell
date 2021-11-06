import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonText,
  IonItem,
  IonButton 
} from '@ionic/react';
import ReactAudioPlayer from 'react-audio-player';
import './Home.css';

const Home: React.FC = () => {
  let musicPlayer: ReactAudioPlayer | null;

  return (
    <IonPage>
      {/* Header Page */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ring a Bell</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Page */}
      <IonContent fullscreen>
        
        {/* Music */}
        <IonItem>
          <IonText>
            <h4>Control Music</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton 
            onClick={() => musicPlayer?.audioEl.current?.play()}
          >Play music</IonButton>
          <IonButton 
            onClick={() => musicPlayer?.audioEl.current?.pause()}
          >Pause music</IonButton>

          <ReactAudioPlayer
            ref={(element) => { musicPlayer = element; }}
            src="./assets/music/I_Love_You_3000.mp3"
          />
        </IonItem>

        {/* Vibrate */}
        <IonItem>
          <IonText>
            <h4>Control Vibrate</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton 
            onClick={() => navigator.vibrate(2000)}
          >Vibrate</IonButton>
        </IonItem>

        <IonItem>
          <IonText>
            <h4>Ring a Bell</h4>
          </IonText>
        </IonItem>
        <IonItem>
          <IonButton
            onClick={() => {
              musicPlayer?.audioEl.current?.play();
              
              navigator.vibrate(5000);

              setTimeout(() => {
                musicPlayer?.audioEl.current?.pause()
              }, 5000);
            }}
          >Ring Bell</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
