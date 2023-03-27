import React, { useState } from 'react';

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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState(''); // Inferência de tipo

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Já existe um participante com esse nome na lista!");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants( (prevState) => prevState.filter(participant => participant !== name) )
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Domingo, 26 de março de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#9E9E9E'
          onChangeText={textEvent => setParticipantName(textEvent)} // Dispara um evento sempre que o usuário digitar algo no input
          value={participantName}
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