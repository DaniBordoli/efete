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
    const agentId = data.slice(0, data.indexOf(","));
    const destinationAccount = data.slice(data.indexOf(",") + 1);
    setScanned(true);

    navigation.navigate("SelectAccount", {
      agentId: agentId,
      value: route.params.value,
      destinationAccount: destinationAccount,
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={style.texto}>Escanea tu codigo QR</Text>
      </View>

      <View style={{ flex: 4 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, style.container]}
        >
          <View style={style.layerTop} />
          <View style={style.layerCenter}>
            <View style={style.layerLeft} />
            <View style={style.focused}>
              <View
                onLayout={(e) =>
                  setAnimationLineHeight(e.nativeEvent.layout.height)
                }
                style={style.focusedContainer}
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
              </View>
            </View>

            <View style={style.layerRight} />
          </View>
          <View style={style.layerBottom} />
        </BarCodeScanner>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-start" }}>
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
const opacity = "rgba(0, 0, 0, .6)";
const style = StyleSheet.create({
  scanerButton: {
    width: 180,
    height: 70,
    backgroundColor: `${buttonColor}`,
    marginTop: 5,
    alignSelf: "center",
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
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layerTop: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  focused: {
    flex: 2,
    borderColor: "grey",
    borderWidth: 0.5,
  },
  layerRight: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  animationLineStyle: {
    height: 1,
    width: "100%",
    backgroundColor: headerColor,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  focusedContainer: {
    flex: 6,
  },
});
