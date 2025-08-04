import { Tabs, useRouter } from "expo-router";
import {
  ChevronLeft,
  ClipboardList,
  MessagesSquare,
  UsersRound,
} from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

const SubjectLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerLeft: ({ tintColor }) => (
          <Pressable onPress={() => router.back()}>
            <ChevronLeft color={tintColor} />
          </Pressable>
        ),

        headerTitleAlign: "left",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },

        tabBarActiveTintColor: "#135da0",
        tabBarInactiveTintColor: "#cad5e2",

        tabBarStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },

        headerStyle: {
          backgroundColor: "#f9f9f9",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <MessagesSquare color={color} />,
          headerTitle: "Stream",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarIcon: ({ color }) => <ClipboardList color={color} />,
          headerTitle: "Activities",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          tabBarIcon: ({ color }) => <UsersRound color={color} />,
          headerTitle: "Students",
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default SubjectLayout;
