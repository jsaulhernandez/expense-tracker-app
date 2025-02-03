import { Image, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
// constants
import { splashImage } from "@/constants/images";
import { colors } from "@/constants/theme";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/welcome");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={splashImage} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});
