import React from 'react';
import { PermissionsAndroid, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ReduxStore, persistor } from 'reduxState/store';
import RootScreen from './RootScreen';
import { PersistGate } from 'redux-persist/es/integration/react';

export default function App() {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);

  React.useEffect(() => {
    function checkPermissions() {
      const PERMISSIONS = [
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple(PERMISSIONS).then(results => {
          const allPermissionsGranted = Object.values(results).every(
            result => result === 'granted',
          );
          if (allPermissionsGranted) {
            setPermissionsGranted(true);
          } else {
            checkPermissions();
          }
        });
      } else {
        setPermissionsGranted(true);
      }
    }
    checkPermissions();
  }, []);

  if (!permissionsGranted) {
    return null;
  }
  // redux-persis 持久化
  // async storage 异步的存储
  return (
    <Provider store={ReduxStore}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
}
