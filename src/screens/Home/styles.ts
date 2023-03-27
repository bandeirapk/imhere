import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,

    height: 56,

    color: '#FFF',
    fontSize: 16,
    
    backgroundColor: '#1f1e25',

    borderRadius: 5,

    padding: 16,

    marginRight: 12,
  },
  form: {
    width: '100%',

    flexDirection: 'row',

    marginTop: 36,
    marginBottom: 42,
  },
  button: {
    width: 56,
    height: 56,

    borderRadius: 5,

    backgroundColor: '#31CF67',

    alignItems: 'center', // Alinha o conteúdo no centro no eixo horizontal (eixo X)
    justifyContent: 'center', // Alinha o conteúdo no centro no eixo vertical (eixo Y) 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  }
});
