import { 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const participants: string[] = ['Wladson', 'Jonas', 'Bandeira', 'João', 'Maria', 'José', 'Henrique', 'Raimundo', 'Raquel'];

  function handleParticipantAdd() {
    if(participants.includes('Bandeira')) {
      Alert.alert("Participante existente", "Já existe um participante com esse nome na lista!");
      return;
    }

    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
    console.log("Você clicou no botão de remover!", name);
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listParticipantEmpty}>
            Nenhum participante adicionado! {'\n'}
            Cadastre participantes na sua lista!
          </Text>
        )}
        renderItem={({ index, item }) => (
          <Participant
            key={index}  
            name={item}
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
      />
    </View>
  );
}