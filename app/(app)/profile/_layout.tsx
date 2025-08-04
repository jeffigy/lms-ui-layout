import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

const ProfileLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f9f9f9",
        },

        headerLeft: ({ tintColor }) => (
          <Pressable onPress={() => router.back()}>
            <ChevronLeft color={tintColor} />
          </Pressable>
        ),
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
