/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppNavigation from './android/app/src/navigation/navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigation);
