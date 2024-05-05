import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme as OldTheme } from '../../../../themes/theme';
import { Pokeball } from '../../../assets/svgs';
import { PokemonTypes, stringToType } from '../../../global/types';
import { capitalizeFirstLetter, formatNumberForList } from '../../../global/helper';
import { PokemonImage } from '../../Atoms/PokemonImage/PokemonImage';
import { Spacer } from '../../Atoms/Spacer.tsx/Spacer';
import { Type } from '../../Atoms/Type/Type';
import { Stats } from '../../Molecules/Stats/Stats';
import { useStyleSheet } from './styles';
import { usePokemonDetailsModal } from './usePokemonDetailsModal';
import { useTheme } from '../../../../themes/use-theme';

type PokemonDetailsModalProps = {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonId: number;
};

export const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ visible, pokemonId, setModalVisible }) => {
  const { pokemon, closeModal } = usePokemonDetailsModal({ pokemonId, setModalVisible });
  const theme = useTheme();
  const styles = useStyleSheet(theme);

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View
        style={{ ...styles.container, backgroundColor: OldTheme.getBackgroundTypeColor(pokemon?.types[0].type.name) }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`#${formatNumberForList(pokemon?.id)}`}</Text>
        </View>
        <Spacer.Column numberOfSpaces={3} />
        <Text style={styles.pokemonNameText}>{capitalizeFirstLetter(pokemon?.name)}</Text>
        <Pressable style={styles.closeModalPressable} onPress={closeModal}>
          <Icon name={'close'} color={theme.primaryTextColor} size={20} />
        </Pressable>
        <View style={styles.pokemonImageContainer}>
          <PokemonImage style={styles.pokemonImage} id={pokemonId} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <View style={styles.backgroundPokeball}>
              <Pokeball color={theme.contrastIconColor} />
            </View>
            <View style={styles.typesContainer}>
              <Type type={stringToType(pokemon?.types[0]?.type.name)} />
              <Type type={stringToType(pokemon?.types[1]?.type.name)} />
            </View>
            <Spacer.Column numberOfSpaces={2} />
            <Stats
              hp={pokemon?.stats[0].base_stat}
              attack={pokemon?.stats[1].base_stat}
              defence={pokemon?.stats[2].base_stat}
              spAttack={pokemon?.stats[2].base_stat}
              spDefence={pokemon?.stats[4].base_stat}
              speed={pokemon?.stats[5].base_stat}
              color={OldTheme.typePalette.get(capitalizeFirstLetter(pokemon?.types[0].type.name) as PokemonTypes)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
