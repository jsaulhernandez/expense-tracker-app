import { Alert, Pressable, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { At, Lock } from "phosphor-react-native";
// components
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
// utils
import { verticalScale } from "@/utils/styling";
// constants
import { colors, spacingX, spacingY } from "@/constants/theme";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields.");
      return;
    }

    console.log("emailRef", emailRef);
    console.log("passwordRef", passwordRef);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"600"}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={"600"}>
            Welcome Back
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login now to track all your expenses
          </Typo>

          {/* email */}
          <CustomInput
            placeholder="Enter your email"
            onChangeText={(e) => (emailRef.current = e)}
            icon={
              <At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          {/* password */}
          <CustomInput
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(e) => (passwordRef.current = e)}
            icon={
              <Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          {/* forgot password */}
          <Typo size={14} color={colors.text} style={{ alignSelf: "flex-end" }}>
            Forgot Password?
          </Typo>

          {/* button login */}
          <CustomButton onPress={handleSubmit} loading={isLoading}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Login
            </Typo>
          </CustomButton>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Don't have an account?</Typo>

          <Pressable onPress={() => router.push("/register")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Sign Up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingX._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: { gap: spacingX._20 },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
