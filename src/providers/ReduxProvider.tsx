import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from '../store';
import { persistor } from 'store/Store';

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={Store}>
      {children}
      {/** Persist Örneği */}
      {/* <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate> */}
    </Provider>
  );
};

export default ReduxProvider;