import { StyleSheet, Pressable, View, Text } from "react-native";

export const ButtonComponent = (props) => {
  return (
    <Pressable onPress={props.handler}>
      <View style={styles.btnStyle}>
        <Text style={[styles.btnText, props.color]}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    // backgroundColor: "#FF8D8D",

    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    // fontFamily:'MyCustomFont',
  },
  red: {
    backgroundColor: "#FF8D8D",
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
});
