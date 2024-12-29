import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import { NavigationContainer } from '@react-navigation/native';

type Props = {
  children: ReactNode;
};

export const navigationRef: any = React.createRef();

const AppProvider = ({children}: Props) => {
 

  return (
    <Provider stabilityCheck='never' store={store}>
        <NavigationContainer ref={navigationRef}>
          {children}
        </NavigationContainer>
        
        
    </Provider>
  );
};

export default AppProvider;
