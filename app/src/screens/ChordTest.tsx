import React, {useState,useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Card, Layout, Text } from '@ui-kitten/components';

import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import { ScrollView, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
  titleText: {
    fontSize: 12, 
    fontFamily: 'monospace' 
  }
});

var guitar_chords = `

[Intro]
--------------------------------------------------
|$ A  |$ E7  |$ A   |
|-  |-   |$ Bm  |
|$ A  |$ Dbm |$ Gbm |
|$ E  |$ A   |$ E   |
|$ D  |-   |-   |
|-  |$ G   |$ D   |
|$ A  |-   |$ E   |
|-  |-   |-   |
|$ D  |-   |$ A   |
|$ D  |$ A   |

 [Chorus]
--------------------------------------------------
$ A                                $ D
Sanda apa langata wela tharu mal kinithi sala
$ Bm     $ E            $ D    $ A   $ D       $ E      $ A
Oba ma langata wela siti aae mohotha mataka doo //

[Verse 1]
----------------------------------------------
$ A                      $ Bm             $ E
Sihina kodewu pura mal suwanda sihila ura
      $ D             $ Bm          $ E           $ A
Matha pawana pemina rendila apa dedena wata unna
$ G      $ D     $ G     $ D     $ E            $ A
Mataka pothe pitu athare obage satuta endila
$ Bm         $ E           $ D      $ E     $ A
Apata hora lowata hora sandak hinehuna

[Verse 2]
-----------------------------------------------
$ A                        $ Bm        $ E
Tambara kekulu hada yali sanin sinasuna
      $ D               $ Bm         $ E           $ A
Bingu thudaka riduma iwasa nethu yuwala wesi thibuna
$ G      $ D   $ G        $ D  $ E             $ A
Satuta dara nisala una suwanda susun denuna
$ Bm         $ E           $ D      $ E     $ A
Apata hora lowata hora sandak hinehuna


`;

const ChordTest = () => {

  const Transposer = require('chord-transposer');   
  guitar_chords = guitar_chords.replace(/["$"] /g, '' )
  const [guitarChords, setGuitarChords] = useState(guitar_chords);
  
  const transpose = () =>{
    try {
      const transposedChords = Transposer.transpose(guitarChords).up(1).toString().replace(/["$"] /g, '' );
      console.log(transposedChords)
      setGuitarChords(transposedChords) ;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50,}}>
      <Text category='h1'>CHORDS</Text>
      <Button onPress={transpose}>Transpose</Button>

      <ScrollView style={{padding: 5,}}>
        <Text style={styles.titleText}>{guitarChords}</Text> 
      </ScrollView>
 
    </Layout>
  );
}

export default ChordTest;