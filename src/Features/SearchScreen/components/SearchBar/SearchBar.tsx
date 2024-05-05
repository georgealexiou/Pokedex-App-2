import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SimpleContainer } from '../../../../components/Atoms/SimpleContainer/SimpleContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStyleSheet } from './styles';
import { Spacer } from '../../../../components/Atoms/Spacer.tsx/Spacer';
import { PokemonList } from '../../../../components/Organisms/PokemonList/PokemonList';
import { PokemonDetailsModal } from '../../../../components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { useSearchBar } from './useSearchBar';
import { useTheme } from '../../../../../themes/use-theme';

export const SearchBar: React.FC = () => {
  const theme = useTheme();
  const styles = useStyleSheet(theme);
  const {
    searchTerm,
    filteredPokemon,
    selectedPokemonId,
    onPokemonSelect,
    visibleModal,
    setVisibleModal,
    handleSearch,
    onXIconPress,
  } = useSearchBar();
  return (
    <View>
      <SimpleContainer style={styles.container}>
        <View style={styles.innerContainer}>
          <Icon style={{ color: theme.primaryTextColor }} name={'search'} size={20} />
          <Spacer.Row numberOfSpaces={2} />
          <TextInput
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder="Search for a Pokemon"
            placeholderTextColor={theme.primaryTextColor}
            style={styles.textField}
          />
          {searchTerm.length > 0 && (
            <Pressable onPress={onXIconPress}>
              <Icon style={{ color: theme.primaryTextColor }} name={'close'} size={20} />
            </Pressable>
          )}
        </View>
      </SimpleContainer>
      <Spacer.Column numberOfSpaces={2} />

      {searchTerm.length > 1 && <PokemonList pokemonIds={filteredPokemon} onPress={onPokemonSelect} />}
      {searchTerm.length > 1 && filteredPokemon.length === 0 && <Text style={styles.text}>No pokemon found</Text>}
      <PokemonDetailsModal visible={visibleModal} setModalVisible={setVisibleModal} pokemonId={selectedPokemonId} />
    </View>
  );
};
