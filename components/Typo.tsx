import { StyleSheet, Text, TextStyle } from "react-native";
import React from "react";
// types
import { TypoProps } from "@/types";
// utils
import { verticalScale } from "@/utils/styling";
// constants
import { colors } from "@/constants/theme";

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
