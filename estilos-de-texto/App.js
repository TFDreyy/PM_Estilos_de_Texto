import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome1}>
        Eduardo Braga
      </Text>
      <Text style={styles.nome2}>
        Andrey
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 8,
  },
  nome1: {
    margin: 24,
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#911111',
    fontFamily: 'courier',
  },
    nome2: {
    margin: 24,
    fontSize: 51,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
    fontFamily: 'times new roman',
  },
});
