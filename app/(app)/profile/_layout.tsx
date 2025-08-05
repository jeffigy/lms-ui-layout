import BackButton from "@/components/back-button";
import { Stack, useRouter } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f9f9f9",
        },
        headerLeft: ({ tintColor }) => <BackButton color={tintColor} />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="gale-library" />
      <Stack.Screen name="grades" />
      <Stack.Screen name="personal-information" />
    </Stack>
  );
};

export default ProfileLayout;
