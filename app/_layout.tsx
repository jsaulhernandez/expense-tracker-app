import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <StatusBar backgroundColor="#171717" style="light" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)"></Stack.Screen>
      </Stack>
    </>
  );
};

export default _layout;
