import React, {useState,useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Card, Layout, Text } from '@ui-kitten/components';

import { StyleSheet, TextPropTypes, View } from 'react-native';
import { ScrollView, useWindowDimensions } from "react-native";
import RenderHtml, { TNode } from 'react-native-render-html';

const styles = StyleSheet.create({
  chordsText: {
    fontSize: 12, 
    fontFamily: 'monospace' 
  },
  chordStyle: {
    color: 'red'
  },
});

var guitar_chords = `

[Intro] 
----------------------------------- 
|<c> Abm </c>  |<c> Gb </c>  |<c> E </c>  |<c> Gb </c>  | 
 
 
[Verse 1] 
----------------------------------- 
<c> Abm </c>                  <c> Gb </c> 
System eka update da beluwada malli 
<c> E </c>                   <c> Gb </c> 
Virus eka ain karamu wigahata nangi 
<c> Abm </c>                     <c> Gb </c>  
Delete karapu un aayeth gannepa malli 
<c> E </c>                  <c> Gb </c> 
Life ekata undo botthama eka na nangi 
<c> Abm </c>                    <c> Gb </c> 
Methana thena rendenna ath alan wate yanna 
<c> E </c>                      <c> Gb </c> 
Kiri kiri bole karanna gahapan dole 
<c> Abm </c>     
Kauda enne thatu kapanna  
<c> Gb </c>                   <c> E </c>          
Apita one piyambanna awoth  
                          <c> Gb </c>                       
Hota thala ganna wenawa some 
 
[Chorus] 
----------------------------------- 
<c> Abm </c>          
Indagena naam inda machan 
 
Hitagena naam hitaa machan 
<c> Gb </c> 
Duwa duwa naam duwa machan 
<c> E </c> 
Serada machan serada machan // 
 
[Rap] 
----------------------------------- 
<c> Abm </c>                        <c> Gb </c> 
Thanamal wila nangi lowata horawana malaki 
    <c> E </c>                        <c> Gb </c> 
Kan kalu pahayata gajarameta hede mage kawi gee 
     <c> Abm </c>                  <c> Gb </c> 
Grahaloka sawaraiyak yamu yuri gagari 
    <c> E </c>                     <c> Gb </c> 
Slowmotion no tention paawewi sithuwili 
<c> Abm </c>                          <c> Gb </c> 
Kithul galata dura na kollo biligannata mithure 
<c> E </c>                         <c> Gb </c> 
Beli mal ranawara wathura hakuru sale mithure 
<c> Abm </c>                              <c> Gb </c> 
Ape kama ape deta mul thena dena me nagare 
<c> E </c> 
One nation celebration malli ganna ape de 
 
[Verse 2] 
----------------------------------- 
<c> Abm </c>                   <c> Gb </c> 
Hemin hemin yan api isstart eke  
<c> E </c>                     <c> Gb </c> 
gear ekak maru karamu Shape eke 
<c> Abm </c>              <c> Gb </c> 
Speed eke dan isspeed eke 
<c> E </c>                      <c> Gb </c> 
Wangu walata brake one mind eke 
<c> Abm </c>                <c> Gb </c> 
Hand brake adinnepa road eke 
<c> E </c>              <c> Gb </c> 
Speed eke api speed eke 
<c> Abm </c>                    <c> Gb </c>      
Race ekak apita na ne life eke 
<c> E </c>                      <c> Gb </c> 
face ekata one deyak kiyan puthe 
<c> Abm </c>             <c> Gb </c> 
Sure eke apinam sure eke 
<c> E </c>                     <c> Gb </c> 
Ekai dekai thunai api ganan kale 
<c> Abm </c>                         <c> Gb </c> 
Lorry thousand talks walata padiri nowe 
<c> E </c>               <c> Gb </c> 
Sure eke apinam sure eke 
 
[Rap] 
------------------------------------------------ 
   <c> Abm </c> 
Diwwata me gamana sansare 
<c> Gb </c> 
Pagala me yana maha pare  
<c> E </c> 
reverse gear weten na life eke 
<c> Gb </c> 
Attha binda mache paya burulen 
<c> Abm </c> 
Inda hita diltho pagal 
<c> Gb </c> 
Keruwata weda api mongal 
<c> E </c>                        <c> Gb </c> 
Kollo sihiyen meetarayen gahamu gema jeewithayen 
<c> Abm </c>                      <c> Gb </c> 
Track painne nathuwa mudalen mainne nathuwa 
<c> E </c>                             
Limi denagena ganna somigena  
<c> Gb </c> 
parissametama kollo wisirena 
<c> Abm </c>                           <c> Gb </c>   
Dena dena kapagena wala welalunu den kaale awasan 
<c> E </c>                       <c> Gb </c>                              
Owadan mewa adareta ban kiyapan mewa sarada machan

`;


var guitar_html = `

<pre transpose-ref="song_inParts"><span><span>[Intro]</span></span>
<span><span>-----------------------------------</span></span>
<span><span>|</span><span class="c">Abm</span>  <span>|</span><span class="c"> F# </span>  <span>|</span><span class="c">E</span>  <span>|</span><span class="c">F#</span>  <span>|</span></span>


<span>[Verse 1]</span>
<span><span>-----------------------------------</span></span>
<span><span class="c"> Abm </span>                  <span class="c">F#</span></span>
<span>System eka update da beluwada malli</span>
<span><span class="c">E</span>                   <span class="c">F#</span></span>
<span>Virus eka ain karamu wigahata nangi</span>
<span><span class="c">Abm</span>                     <span class="c">F#</span> </span>
<span>Delete karapu un aayeth gannepa malli</span>
<span><span class="c">E</span>                  <span class="c">F#</span></span>
<span>Life ekata undo botthama eka na nangi</span>
<span><span class="c">Abm</span>                    <span class="c">F#</span></span>
<span>Methana thena rendenna ath alan wate yanna</span>
<span><span class="c">E</span>                      <span class="c">F#</span></span>
<span>Kiri kiri bole karanna gahapan dole</span>
<span><span class="c">Abm</span>    </span>
<span>Kauda enne thatu kapanna </span>
<span><span class="c">F#</span>                   <span class="c">E</span>         </span>
<span>Apita one piyambanna awoth </span>
<span>                          <span class="c">F#</span>                      </span>
<span>Hota thala ganna wenawa some</span>

<span><span>[Chorus]</span></span>
<span><span>-----------------------------------</span></span>
<span><span class="c">Abm</span>         </span>
<span>Indagena naam inda machan</span>

<span>Hitagena naam hitaa machan</span>
<span><span class="c">F#</span></span>
<span>Duwa duwa naam duwa machan</span>
<span><span class="c">E</span></span>
<span>Serada machan serada machan //</span>

<span>[Rap]</span>
<span><span>-----------------------------------</span></span>
<span><span class="c">Abm</span>                        <span class="c">F#</span></span>
<span>Thanamal wila nangi lowata horawana malaki</span>
<span>    <span class="c">E</span>                        <span class="c">F#</span></span>
<span>Kan kalu pahayata gajarameta hede mage kawi gee</span>
<span>     <span class="c">Abm</span>                  <span class="c">F#</span></span>
<span>Grahaloka sawaraiyak yamu yuri gagari</span>
<span>    <span class="c">E</span>                     <span class="c">F#</span></span>
<span>Slowmotion no tention paawewi sithuwili</span>
<span><span class="c">Abm</span>                          <span class="c">F#</span></span>
<span>Kithul galata dura na kollo biligannata mithure</span>
<span><span class="c">E</span>                         <span class="c">F#</span></span>
<span>Beli mal ranawara wathura hakuru sale mithure</span>
<span><span class="c">Abm</span>                              <span class="c">F#</span></span>
<span>Ape kama ape deta mul thena dena me nagare</span>
<span><span class="c">E</span></span>
<span>One nation celebration malli ganna ape de</span>

<span>[Verse 2]</span>
<span><span>-----------------------------------</span></span>
<span><span class="c">Abm</span>                   <span class="c">F#</span></span>
<span>Hemin hemin yan api isstart eke </span>
<span><span class="c">E</span>                     <span class="c">F#</span></span>
<span>gear ekak maru karamu Shape eke</span>
<span><span class="c">Abm</span>              <span class="c">F#</span></span>
<span>Speed eke dan isspeed eke</span>
<span><span class="c">E</span>                      <span class="c">F#</span></span>
<span>Wangu walata brake one mind eke</span>
<span><span class="c">Abm</span>                <span class="c">F#</span></span>
<span>Hand brake adinnepa road eke</span>
<span><span class="c">E</span>              <span class="c">F#</span></span>
<span>Speed eke api speed eke</span>
<span><span class="c">Abm</span>                    <span class="c">F#</span>     </span>
<span>Race ekak apita na ne life eke</span>
<span><span class="c">E</span>                      <span class="c">F#</span></span>
<span>face ekata one deyak kiyan puthe</span>
<span><span class="c">Abm</span>             <span class="c">F#</span></span>
<span>Sure eke apinam sure eke</span>
<span><span class="c">E</span>                     <span class="c">F#</span></span>
<span>Ekai dekai thunai api ganan kale</span>
<span><span class="c">Abm</span>                         <span class="c">F#</span></span>
<span>Lorry thousand talks walata padiri nowe</span>
<span><span class="c">E</span>               <span class="c">F#</span></span>
<span>Sure eke apinam sure eke</span>

<span>[Rap]</span>
<span><span>------------------------------------------------</span></span>
<span>   <span class="c">Abm</span></span>
<span>Diwwata me gamana sansare</span>
<span><span class="c">F#</span></span>
<span>Pagala me yana maha pare </span>
<span><span class="c">E</span></span>
<span>reverse gear weten na life eke</span>
<span><span class="c">F#</span></span>
<span>Attha binda mache paya burulen</span>
<span><span class="c">Abm</span></span>
<span>Inda hita diltho pagal</span>
<span><span class="c">F#</span></span>
<span>Keruwata weda api mongal</span>
<span><span class="c">E</span>                        <span class="c">F#</span></span>
<span>Kollo sihiyen meetarayen gahamu gema jeewithayen</span>
<span><span class="c">Abm</span>                      <span class="c">F#</span></span>
<span>Track painne nathuwa mudalen mainne nathuwa</span>
<span><span class="c">E</span>                            </span>
<span>Limi denagena ganna somigena </span>
<span><span class="c">F#</span></span>
<span>parissametama kollo wisirena</span>
<span><span class="c">Abm</span>                           <span class="c">F#</span>  </span>
<span>Dena dena kapagena wala welalunu den kaale awasan</span>
<span><span class="c">E</span>                       <span class="c">F#</span>                             </span>
<span>Owadan mewa adareta ban kiyapan mewa sarada machan</span>

</pre>
`;






const strs = "I am john mike . I love #reactProgramming. I have 2 years of experience in React Native Developer #ReactNative. #JS. I am working on the xyz Ltd. #xyz";

const ChordTest = () => {

  const { width } = useWindowDimensions();
  

  const Transposer = require('chord-transposer');   
 
  const [guitarChords, setGuitarChords] = useState(guitar_html);
  const [keyChange, setKeyChange]= useState(0);

  const source = {
    html: guitar_html
  };
  function checkChords(str: string){
    var regex = /<c>(.*?)<\/c>/g
        ,   body = guitar_chords
      ,   result = body.replace(regex, "");

      return result;

  }
  const transpose = () =>{
   /*  try {
      const transposedChords = Transposer.transpose(guitarChords).up(1).toString();
      
      setGuitarChords(transposedChords) ;
      console.log('New state set');
    } catch (error) {
      console.log(error);
    } */
    setKeyChange(keyChange+1);
  }

  function clickableWords(str: string) {
    const words = str.replace(/["\n"] /g, ' \n').split(/ /g);
    console.log("-------------------------------------------");

    
    let temp_string = <Text>

      {words.map(word => {

        if (word.match('<c>')){
          //return <Text style={{color:'red'}} onPress={clickCallback}>{word} </Text>
          return <Text style={{color:'red'}} >{word} </Text>

        }else{
          return <Text style={{color:'black'}} >{word} </Text>
        } 
      }
      )}

    </Text>

      return temp_string;


   
    
      
  }
  interface ChordRendererProps {
    chordName?: string;
  }

  function clickCallback ( chordName: string){

    console.log("Callback called "+ chordName);
  }
  
  const ChordRenderer: React.FC<ChordRendererProps> = ({ chordName }) => {

    const transposedChord = Transposer.transpose(chordName).up(keyChange).toString();
    return <Text onPress={() => clickCallback.bind(chordName)} style={styles.chordStyle}>{ transposedChord }</Text>
  } 
    
  const renderers = {
    span: ({...props}) => {
      
      const a = props.tnode.domNode.attribs;
  
      if (a.class == 'c') {
        //console.log(props.tnode.domNode.children[0].data);
        return (
          <ChordRenderer chordName={props.tnode.domNode.children[0].data}></ChordRenderer>
     
        );
      }
      return <props.TDefaultRenderer tnode={props.tnode} {...props} />;
    },
  };
 

  return (
    
    <Layout style={{flex: 1, alignItems: 'center', paddingTop: 50,}}>
      <Text category='h1'>CHORDS</Text>
      <Button onPress={transpose}>Transpose</Button>

      <ScrollView style={{paddingHorizontal: 5 , }}>
        <View style={{flex: 1}}>
          
            {/* WEb View eka Screen eke manage kranna amarui */}
            {/* <WebView style = {{width:900, height:600}} source={{ html: guitar_html}}  /> */}


            {/* Clickable Words Method eka slow and not 100% accurately functioning */}
            {/* <Text style={styles.chordsText}> {clickableWords(guitarChords)} </Text> */}
            {/* <Text style={styles.chordsText}> {guitarChords} </Text> */}

          <RenderHtml
            contentWidth={width}
            source={source}
            renderers={renderers}
          />
        </View>
        
      </ScrollView>
 
    </Layout>
  );
}





export default ChordTest;