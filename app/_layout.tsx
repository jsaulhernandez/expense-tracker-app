import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#171717" style="light" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)"></Stack.Screen>
        <Stack.Screen name="index"></Stack.Screen>
      </Stack>
    </>
  );
};

export default RootLayout;
