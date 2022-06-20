import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:5,
        flexDirection:'row',
    },
    tinput:{
        height:50,
        borderRadius:5,
        paddingLeft:15,
    },
    searchIcon:{
        position:'absolute',
        left:10,
        bottom:14,
        zIndex:1
    },
    filteringIcon:{
        position:'absolute',
        right:10,
        bottom:14
        
    },
})

export default styles;