import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../consts/colors";

const HomeScreen = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
            <Text
              style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
            >
              Plant Shop
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
})

export default HomeScreen;
