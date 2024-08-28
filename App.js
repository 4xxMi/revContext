import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TemaContext, { TemaProvider } from './src/context/TemaContext';
import HomeScreen from './src/components/HomeScreen';
import TrocaTema from './src/components/TrocaTema';

export default function App() {
  let tema = useContext(TemaContext);
  return (
    <TemaProvider>
          <PaperProvider theme={tema}>
            <HomeScreen />
            <TrocaTema />
          </PaperProvider>
    </TemaProvider>
  );
}
