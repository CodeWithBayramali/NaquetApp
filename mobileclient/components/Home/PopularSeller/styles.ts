import { StyleSheet,Dimensions } from "react-native";

const {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    popularCard:{
        marginVertical:height*0.02,
        paddingBottom:height*0.02
    }
})

export default styles;