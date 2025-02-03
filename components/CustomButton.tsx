import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
// components
import Loading from "./Loading";
// types
import { CustomButtonProps } from "../types";
// utils
import { verticalScale } from "@/utils/styling";
// constants
import { colors, radius } from "@/constants/theme";

const CustomButton = ({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) => {
  if (loading)
    return (
      <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
        <Loading />
      </View>
    );

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: "continuous",
    height: verticalScale(52),
    justifyContent: "center",
    alignItems: "center",
  },
});
