import React from 'react';
import { Surface, Text } from 'react-native-paper';
import styles from '../config/styles';
import TrocaTema from './TrocaTema';

export default function HomeScreen() {
  return (
    <Surface style={styles.container}>
      <Text>Olá Vlad Dracula Tepes</Text>
      <TrocaTema />
    </Surface>
  );
}
