import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { Pokeball } from '../../assets/svgs';
import { SimplePressable } from '../../components/Atoms/SimplePressable/SimplePressable';
import { Spacer } from '../../components/Atoms/Spacer.tsx/Spacer';
import { PokemonDetailsModal } from '../../components/Organisms/PokemonDetailsModal/PokemonDetailsModal';
import { PokemonList } from '../../components/Organisms/PokemonList/PokemonList';
import { textStyle } from '../../../themes/textStyle';
import { FeaturedPokemon } from './FeaturedPokemon/FeaturedPokemon';
import { styles } from './styles';
import { useTheme } from '../../../themes/use-theme';

const HomeScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState<number>(1);
  const [featuredId, setFeaturedId] = useState<number>(0);

  useMemo(() => {
    setFeaturedId(Math.floor(Math.random() * 1008));
  }, []);

  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.primaryBackgroundColor,
        paddingTop: 60,
        flex: 1,
      }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ ...textStyle.h1, textAlign: 'left', width: '100%', color: theme.primaryTextColor }}>
          Welcome to your Pokedex!
        </Text>
        <Spacer.Column numberOfSpaces={4} />
        <FeaturedPokemon
          id={featuredId as number}
          onPress={() => {
            setId(featuredId);
            setModalVisible(true);
          }}></FeaturedPokemon>
        <Spacer.Column numberOfSpaces={5} />

        <View style={{ flexDirection: 'row' }}>
          <SimplePressable
            style={styles.button}
            onPress={() => navigation.navigate('GenerationsScreen', { screen: 'Settings' })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ ...textStyle.h2, color: theme.primaryTextColor }}>Generations</Text>
            </View>
          </SimplePressable>
          <Spacer.Flex />
          <SimplePressable style={styles.button}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ ...textStyle.h2, color: theme.primaryTextColor }}>Favourites</Text>
            </View>
          </SimplePressable>
        </View>
        <View>
          <Spacer.Column numberOfSpaces={6} />
          <Text style={{ ...textStyle.h1, color: theme.primaryTextColor }}>Favourites</Text>
          <Spacer.Column numberOfSpaces={1} />
        </View>
      </View>
      <PokemonList
        horizontal
        pokemonIds={[814, 920, 1000]}
        onPress={(id: number) => {
          setModalVisible(true);
          setId(id);
        }}
      />
      <View style={{ position: 'absolute', zIndex: -1, height: '100%', justifyContent: 'flex-end', right: -170 }}>
        <Pokeball color={theme.contrastIconColor} />
      </View>
      <PokemonDetailsModal visible={modalVisible} setModalVisible={setModalVisible} pokemonId={id} />
    </View>
  );
};

export default HomeScreen;
function typeOf(arg0: string): any {
  throw new Error('Function not implemented.');
}
