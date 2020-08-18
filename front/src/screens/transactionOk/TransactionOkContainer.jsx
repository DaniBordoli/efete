import React, { useRef } from "react";
import { useSelector } from "react-redux";
import TransactionOk from "./TransactionOk";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";

export default ({ navigation, route }) => {
  const user = useSelector((state) => state.users.user);

  const mode = useSelector((state) => state.users.mode);
  const transaction = route.params.transaction;
  const [showPopUp, setShowPopUp] = useState(false);

  const viewShot = useRef();

  const takeScreenshot = () => {
    viewShot.current
      .capture()
      .then((data) => MediaLibrary.saveToLibraryAsync(data))
      .then(() => {
        setShowPopUp(true);
        setTimeout(() => {
          setShowPopUp(false);
        }, 3000);
      });
  };

  return (
    <TransactionOk
      mode={mode}
      navigation={navigation}
      transaction={transaction}
      takeScreenshot={takeScreenshot}
      viewShot={viewShot}
      showPopUp={showPopUp}
    />
  );
};
