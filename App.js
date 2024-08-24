import { StatusBar } from "expo-status-bar";
import { cloneElement, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { ModalComponent } from "./components/ModalComponent";
import { ListelComponent } from "./components/ListelComponent";

import * as Font from "expo-font";
import { useFonts } from 'expo-font';

import { ButtonComponent } from "./components/ButtonComponent";
import { AppLoading } from 'expo';

export default function App() {

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // const loadFonts = async () => {
  //   try{await Font.loadAsync({
  //     MyCustomFont: require("./assets/fonts/Giarek - Demo Version.ttf"),
  //   });
  //   setFontsLoaded(true);}
  //   catch{
  //     console.log("Unable to load fonts");
  //   }
  // };

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  // const [loaded, error] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });

  // if (!loaded) {
  //   return <AppLoading />;
  // }


  const [fontsLoaded] = Font.useFonts({
    MyCustomFont: require("./assets/fonts/Giarek - Demo Version.ttf"), // Ensure the font name matches
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [goalText, setGoalText] = useState("");
  const [notes, setNotes] = useState("");
  const [goalData, setGoalData] = useState([]);

  const [IfNoText, setIfNoText] = useState("Set. Track. Conquer");
  const [imageShow, setImageShow] = useState(true);

  useEffect(() => {
    if (goalData.length > 0) {
      setIfNoText("");
      setImageShow(false);
    } else {
      setIfNoText("Set. Track. Conquer.");
      setImageShow(true);
    }
  }, [goalData]);

  const color = ["yellow", "blue", "green"];

  function modalToggleHandler() {
    setModalVisible((prevState) => !prevState);
  }

  function textInputHandler(theText) {
    setGoalText(theText);
    // console.log('====================================');
    // console.log(goalText);
    // console.log('====================================');
  }
  function notesInputHandler(theNotes) {
    setNotes(theNotes);
  }

  function addToGoals() {
    if (goalText.length > 0 && notes.length > 0) {
      setGoalData((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1, // generate 4 digit random number
          goal: goalText,
          notesText: notes,
        },
      ]);
      console.log("======================fdfdf==============");
      console.log(goalData.length);
      console.log("==========================fdfd==========");

      modalToggleHandler();
    }
    else {
      Alert.alert("Empty box","Please add text first")
    }
  }

  function deleteHandler(theID) {
    //TODO: Alert message needs to be added

    Alert.alert("Delete action", "Do you want to delete it ?", [
      {
        text: "cancel",
        style: "cancel",
        onPress: () => {
          console.log("Cancel pressed");
        },
      },
      {
        text: "Yes man",
        onPress: () => {
          setGoalData((prevState) => {
            return prevState.filter((item) => item.id != theID);
          });
        },
      },
    ]);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.wholeContainer}>
        <View style={styles.container}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>Goal Tracker</Text>

            <Pressable onPress={modalToggleHandler}>
              <View style={styles.btnStyle}>
                <Text style={styles.btnText}>Add now + </Text>
              </View>
            </Pressable>
            {/* 
           <ButtonComponent 
            handler = {modalToggleHandler}
            text = "Add nowss +"
            color= {styles.red}

           /> */}

            {/* <Button
              title="Add now + "
              color={"#FF8D8D"}
              onPress={modalToggleHandler}
            /> */}
          </View>
        </View>

        {/* Modal */}

        <ModalComponent
          modalVisible={modalVisible}
          modalToggle={modalToggleHandler}
          textInputHandler={textInputHandler}
          notesInputHandler={notesInputHandler}
          addToGoals={addToGoals}
          modalClose={modalToggleHandler}
        />
        {/* the goals lists */}

        {/* <ScrollView style={styles.scrollview}> */}
        <View style={styles.goalsListContainer}>
          {imageShow ? (
            <Text style={styles.HomeScreenPlaceholderText}>{IfNoText}</Text>
          ) : (
            ""
          )}

          {imageShow ? (
            <Image
              source={require("./assets/duck.jpeg")}
              style={styles.homeImg}
            />
          ) : (
            ""
          )}

          <FlatList
            data={goalData}
            renderItem={(itemData, index) => (
              <ListelComponent
                goalText={itemData.item.goal}
                goalNotes={itemData.item.notesText}
                deleteHandler={deleteHandler}
                ind={index}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "20%",
    paddingHorizontal: "10%",
  },
  headlineContainer: {
    flex: 1,
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

  headline: {
    fontSize: 45,
    marginBottom: 15,
    fontFamily: "MyCustomFont",
  },
  goalsListContainer: {
    paddingHorizontal: "10%",
    flex: 5,
  },
  scrollview: {
    flex: 1,
  },

  btnStyle: {
    backgroundColor: "#FF8D8D",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
  HomeScreenPlaceholderText: {
    fontFamily: "MyCustomFont",
    fontSize: 95,
    opacity: 0.1,
  },
  homeImg: {
    position: "absolute",
    width: 200,
    height: 100,
    // objectFit:"contain",
    bottom: 0,
    right: 0,
  },
  // modals
});
