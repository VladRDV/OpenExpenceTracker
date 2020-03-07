/**
 * Open Expence Tracker
 * https://github.com/VladRDV/OpenExpenceTracker.git
**/

import { AppRegistry } from 'react-native';
import TopAppWrapper from './js/TopAppWrapper';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => TopAppWrapper);
