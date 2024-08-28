// import { Button, DefaultTheme, MD3DarkTheme, Surface } from "react-native-paper";
// import styles from "../config/styles";
// import { Children, createContext, useState } from "react";

// const TemaContext = createContext();

// export default function TrocaTema({children}) {
//     const [tema, setTema] = useState(DefaultTheme);

//     function altera() {
//         setTema(tema === DefaultTheme ? MD3DarkTheme : DefaultTheme);
//     };

//     return (
//         <TrocaTema.Provider value={{ tema, altera }}>
//             {children}
//         </TrocaTema.Provider>
//     );
// };
// style={{ color: tema.textColor }}
{/* <Text style={{ color: tema.textColor }}>Welcome to my app!</Text> */}



import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { temaContext } from '../context/TemaContext';
import { DefaultTheme, Surface } from 'react-native-paper';

export const TrocaTema = () => {
  const { tema, setTema } = useContext(temaContext);

  return (
    <Surface>
      <TouchableOpacity value={DefaultTheme} onValueChange={setTema}>
        <Text >Mude mude o tema dracula</Text>
      </TouchableOpacity>
    </Surface>
  );
};