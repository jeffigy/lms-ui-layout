import { Stack } from "expo-router";
import React from "react";

const AuthenticatedLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(subject)/[id]" />
    </Stack>
  );
};

export default AuthenticatedLayout;
