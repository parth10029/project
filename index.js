/** @format */

import {AppRegistry} from 'react-native';
import config from './App/config';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => config);
