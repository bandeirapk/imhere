import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%', 

    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 10,

    backgroundColor: '#1F1E25',
  },
  participantName: { 
    flex: 1,

    fontSize: 16,

    marginLeft: 10,

    color: '#FFF',
  },
  button: {
    width: 56,
    height: 56,

    borderRadius: 5,

    backgroundColor: '#E23C44',

    alignItems: 'center', // Alinha o conteúdo no centro no eixo horizontal (eixo X)
    justifyContent: 'center', // Alinha o conteúdo no centro no eixo vertical (eixo Y) 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  }
});

