import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215647Navigator from '../features/BlankScreen215647/navigator';
import BlankScreen115560Navigator from '../features/BlankScreen115560/navigator';
import BlankScreen015559Navigator from '../features/BlankScreen015559/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215647: { screen: BlankScreen215647Navigator },
BlankScreen115560: { screen: BlankScreen115560Navigator },
BlankScreen015559: { screen: BlankScreen015559Navigator },

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
