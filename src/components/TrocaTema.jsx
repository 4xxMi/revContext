import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { TemaContext } from "../contexts/TemaContext";
import styles from "../config/styles";


export default function TrocaTema() {
  const { alterarTema } = useContext(TemaContext);

  return <Button onPress={alterarTema}> 
  Mude o tema Drácula vamos mude Vlad Drácula Tepes 
  <br></br>mude o tema Vlad Drácula Tepes 
  </Button>
  ;
}


