import { Alert, Pressable, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { At, Lock, User } from "phosphor-react-native";
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

const Register = () => {
  const router = useRouter();
  const nameRef = useRef("");
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
            Let's
          </Typo>
          <Typo size={30} fontWeight={"600"}>
            Get Started
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account to track your expenses
          </Typo>

          {/* name */}
          <CustomInput
            placeholder="Enter your name"
            onChangeText={(e) => (nameRef.current = e)}
            icon={
              <User
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

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

          {/* button login */}
          <CustomButton onPress={handleSubmit} loading={isLoading}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Sign Up
            </Typo>
          </CustomButton>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Already have an account?</Typo>

          <Pressable onPress={() => router.push("/login")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Login
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
