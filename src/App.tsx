import React from 'react'
import ReduxProvider from 'providers/ReduxProvider';
import Navigation from 'navigation';

const App = () => {
  return (
    <ReduxProvider>
      <Navigation/>
    </ReduxProvider>
  )
}

export default App