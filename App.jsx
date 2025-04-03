import React, { useEffect, useState } from "react";
import {View, Text, Image, ScrollView, SafeAreaView, TextInput} from 'react-native';
import api from "./src/services/api";
import globalStyles from "./src/styles/globalStyles";

export default function App(){
  const [filmes, setFilmes] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    async function carregarFilmes(){
      if(pesquisa.trim() !== ''){
        try{
          const response = await api.get(pesquisa.replace(" ", "%20")); //substitui o espaço em branco por %20
          setFilmes(response.data);
        }
        catch(error){
          console.error('Deu erro!!!!!!!!', error);
        }
      }
      else{
        setFilmes([]);
      }
    }
    carregarFilmes();
  }, [pesquisa]);

  const handlePesquisa = (texto) => {
    setPesquisa(texto);
  }

  return(
    <SafeAreaView style={ globalStyles.container } >
    <TextInput
      style={globalStyles.input}
      placeholder='Digite o nome do filme'
      value={pesquisa}
      onChandeText={handlePesquisa}
    />

    <Text style = { globalStyles.titulo }>
      Lista de filmes
    </Text>

    <ScrollView contentContainerStyle={ globalStyles.lista }>
      {filmes.map((filme) => (
        <View key={filme.show.id} style = {globalStyles.card}>
        {filme.show.image && (
          <Image
          source={{uri: filme.show.image.medium}}
          style={globalStyles.imagem}
          resizeMode="cover"
          />
        )}
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.tituloFilme} numberOfLines={1}>
        {filme.show.name}
        </Text>

        <Text style={globalStyles.url} numberOfLines={2}>
        {filme.show.url}
        </Text>

      </View>
        </View>
      ))}
    </ScrollView>

    </SafeAreaView>
  )

}