import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
// components
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import CustomButton from "@/components/CustomButton";
// utils
import { verticalScale } from "@/utils/styling";
// constants
import { welcome } from "@/constants/images";
import { colors, spacingX, spacingY } from "@/constants/theme";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* login button & image */}
        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Typo fontWeight="500">Sign In</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(1000)}
            source={welcome}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            style={{ alignItems: "center" }}
          >
            <Typo size={30} fontWeight={"800"}>
              Always take control
            </Typo>

            <Typo size={30} fontWeight={"800"}>
              of your finances
            </Typo>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(100)
              .springify()
              .damping(12)}
            style={{ alignItems: "center", gap: 2 }}
          >
            <Typo size={17} color={colors.textLight}>
              Finances must be arranged to set better
            </Typo>

            <Typo size={17} color={colors.textLight}>
              lifestyle in future
            </Typo>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(200)
              .springify()
              .damping(12)}
            style={styles.buttonContainer}
          >
            <CustomButton onPress={() => router.push("/register")}>
              <Typo size={22} fontWeight={"600"} color={colors.neutral900}>
                Get Started
              </Typo>
            </CustomButton>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
