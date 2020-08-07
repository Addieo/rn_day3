import 'react-native-gesture-handler';
import { YellowBox } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();
YellowBox.ignoreWarnings(['Warning: componentWillMount', 'RCTBridge']);
