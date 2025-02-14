import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

const Loading = ({
  size = "large",
  color = "#a3e635",
}: ActivityIndicatorProps) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
