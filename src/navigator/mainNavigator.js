import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313208Navigator from '../features/BlankScreen313208/navigator';
import CopyOfBlankScreen013203Navigator from '../features/CopyOfBlankScreen013203/navigator';
import BlankScreen013202Navigator from '../features/BlankScreen013202/navigator';
import BlankScreen013192Navigator from '../features/BlankScreen013192/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313208: { screen: BlankScreen313208Navigator },
CopyOfBlankScreen013203: { screen: CopyOfBlankScreen013203Navigator },
BlankScreen013202: { screen: BlankScreen013202Navigator },
BlankScreen013192: { screen: BlankScreen013192Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
