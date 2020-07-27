import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Animated } from "react-native";
import { Button } from "react-native-elements";
import { BarCodeScanner } from "expo-barcode-scanner";
import { buttonColor, headerColor, fondoColor } from "../../Common/constans";
import { RotationGestureHandler } from "react-native-gesture-handler";

export default ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animationLineHeight, setAnimationLineHeight] = useState(0);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    animateLine();
  }, []);

  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(animateLine);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    const [agentId, destinationAccount, cbu] = data.split(",");
    setScanned(true);
    navigation.navigate("SelectAccount", {
      agentId: agentId,
      value: route.params.value,
      destinationAccount: destinationAccount,
      cbu: cbu,
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ ...StyleSheet.absoluteFill }}
      />

      <View
        style={{
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ width: 300, height: 300 }}
          onLayout={(e) => setAnimationLineHeight(e.nativeEvent.layout.height)}
        >
          {!scanned && (
            <Animated.View
              style={[
                style.animationLineStyle,

                {
                  transform: [
                    {
                      translateY: focusLineAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, animationLineHeight],
                      }),
                    },
                  ],
                },
              ]}
            />
          )}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, ...leftTop }}></View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...leftBottom }}></View>
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, ...rightTop }}></View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...rightBottom }}></View>
          </View>
        </View>
        {scanned && (
          <Button
            buttonStyle={style.scanerButton}
            titleStyle={style.scanerTitle}
            title={"Volver a escanear"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  scanerButton: {
    width: 180,
    height: 70,
    backgroundColor: `${buttonColor}`,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 60,
  },
  scanerTitle: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "nunito",
    color: "white",
    fontWeight: "400",
  },
  texto: {
    marginBottom: 10,
    fontSize: 35,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
  animationLineStyle: {
    height: 1.5,
    width: "100%",
    backgroundColor: "red",
  },
});
const leftTop = {
  borderLeftWidth: 3,
  borderTopWidth: 3,
  borderColor: "white",
};

const rightTop = {
  borderLeftWidth: 3,
  borderBottomWidth: 3,
  borderColor: "white",
};

const leftBottom = {
  borderRightWidth: 3,
  borderTopWidth: 3,
  borderColor: "white",
};

const rightBottom = {
  borderRightWidth: 3,
  borderBottomWidth: 3,
  borderColor: "white",
};
