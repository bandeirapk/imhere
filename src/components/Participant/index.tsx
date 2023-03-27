import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  name: string | number;
  onRemove: () => void;
}

// Props -> Tipagem o componente, posso acessar também via desestruturação {nameProps}
export function Participant(  {name, onRemove}: Props ) { 
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>
        { name }
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onRemove}
      >
        <Text 
          style={styles.buttonText}
        >
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}