import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { colors } from "./Colors";

export const Text = (props) => {
    const { text, title,heading,plan,main, color, children, style = {} } = props;

    return (
        <RNText
            style={[
                styles.heading,
                // heading && styles.heading,
                title && styles.title,
                plan && styles.plan,
                main && styles.main,
                color && { color: colors[color] },
                style && style
            ]}
        >
            {text ? text : children}
            {/* {text || children} */}
        </RNText>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: colors.quaternary,
        textAlign:'center',
        margin:10,
        // fontStyle:'bold',
        fontWeight: "bold",
        // marginTop:50
    },
    title: {
        fontSize: 30,
        color:colors.muneeb
    },
    plan:{
        marginTop:8,
        fontSize:16,
        color:'white',
        textAlign:'center',
            textDecorationLine:'underline'  
    },
    main:{
        marginTop:8,
        fontSize:16,
        color:'white',
        textAlign:'center', 
    },
});