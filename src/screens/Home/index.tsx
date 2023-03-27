import { 
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento:
      </Text>

      <Text style={styles.eventDate}>
        Domingo, 26 de março de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#9E9E9E'
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd} // Handle -> Função que será executada quando o usuário clicar no botão
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}