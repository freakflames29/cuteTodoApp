import { StyleSheet, View, Modal, Button, TextInput,Pressable,Text ,Image} from "react-native";

export const ModalComponent = (props) => {
  return (
    <Modal visible={props.modalVisible} animationType="slide" style={styles.modalBox}>
    
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <TextInput placeholder="Enter goal" style={styles.textInput} onChangeText={props.textInputHandler}/>
          <TextInput placeholder="add notes" style={styles.addNotes} onChangeText={props.notesInputHandler}/>
          <View style={styles.modalBtns}>

          <Pressable onPress={props.modalToggle}>
              <View style={[styles.btnStyle,styles.red]}>
                <Text style={styles.btnText}>Cancel</Text>
              </View>
            </Pressable>

            {/* <Button title="Cancel" style={styles.btn}  onPress={props.modalToggle}/> */}
            <Pressable onPress={props.addToGoals}>
              <View style={[styles.btnStyle,styles.blue]}>
                <Text style={styles.btnText}>Done</Text>
              </View>
            </Pressable>

            {/* <Button title="Done" onPress={props.addToGoals} /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox:{
    flex:1,
    flexDirection:'column'
  },
  modalContainer: {
    flex:10,
    margin: "10",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'blue',
    height: "100%",
  },
  modal: {
    width: "80%",
  },
  textInput: {
    width: "100%",
    // backgroundColor: "red",
    padding: 40,
    borderRadius: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#FFDE8B",
    marginBottom: 10,
  },
  addNotes: {
    width: "100%",
    // backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#FFDE8B",
  },
  modalBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  btnStyle: {
    // backgroundColor: "#FF8D8D",
    width:100,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // width:'100%'
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
    // width:150
  },
  green: {
    backgroundColor: "#8DFFD6",
  },
  // imageContainer:{
  //   // flex:1,
  //   // borderWidth:3,
  //   // backgroundColor:'red',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   marginTop:100,
  //   height:"50%"

  // },
  // modalImg:{
  //   // position:'absolute',
  //   top: 100,
  //   left:30,
  //   width:350,
  //   height:200,
  //   objectFit:'contain',
  //   // borderWidth:2,
  // }
});
