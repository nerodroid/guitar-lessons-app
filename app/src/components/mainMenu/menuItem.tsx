import React from "react";
import { Pressable, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import LinearGradient from "react-native-linear-gradient";

interface Props {
    title: string;
    color: string;
}

const MenuItem = (props: Props) =>{

    return  <Pressable style={styles.itemWrapper}>
            
                <View style={[styles.iconContainer,{shadowColor: props.color,}]} >
                </View>             
                <Text style={styles.textStyle}>title</Text>
             </Pressable>
}

const styles = EStyleSheet.create({
    itemWrapper:{
        width:'125rem',
        height:'140rem',
        
    },
    iconContainer:{
        alignSelf: 'center',
        width:'100rem',
        height:'100rem',
        borderRadius: '20rem',
        backgroundColor: 'white',
        
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 4,  
        elevation: 2

    },
    textStyle:{
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
    }
})
export default MenuItem;