import { Stack } from "expo-router";
import React from "react";

const SubjectGroupLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]" />
      <Stack.Screen
        name="subject-info"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default SubjectGroupLayout;
