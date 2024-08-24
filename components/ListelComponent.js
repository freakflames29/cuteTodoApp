import { StyleSheet,View,Text, Pressable } from "react-native";

export const ListelComponent = (props) => {
   if (props.id % 2 == 0){
      colorDetermine = styles.blue
   } 
   else if (props.id %3 == 0) {
    colorDetermine = styles.green
   }
   else{
    colorDetermine = styles.yellow
   }



  // let colors = [styles.yellow,styles.blue,styles.green]
  // let colorDetermine = colors[count]


 
  return (
    <Pressable onPress={props.deleteHandler.bind(this,props.id)}>
    <View style={[styles.goalsList,colorDetermine]} >
      <Text style={styles.goalHeading}>{props.goalText} </Text>
      <Text>{props.goalNotes}</Text>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    goalsList: {
        // height: "50%",
        borderRadius: 10,
        padding: 15,
        justifyContent: "space-between",
        overflow: "scroll",
        marginBottom:10,
        // flexWrap:'wrap-reverse'
      },
    
      goalHeading: {
        fontSize: 40,
        marginBottom:40,
        fontFamily:'MyCustomFont',
      },
      yellow: {
        backgroundColor: "#FFE2A9",
      },
      blue: {
        backgroundColor: "#8DADFF",
      },
      green: {
        backgroundColor: "#8DFFD6",
      },
})