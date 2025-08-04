import { Stack } from "expo-router";
import React from "react";

const AuthenticatedLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default AuthenticatedLayout;
