import BackButton from "@/components/back-button";
import { Link, Tabs } from "expo-router";
import {
  ClipboardList,
  InfoIcon,
  MessagesSquare,
  UsersRound,
} from "lucide-react-native";
import React from "react";

const SubjectLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: ({ tintColor }) => <BackButton color={tintColor} />,
        headerTitleAlign: "left",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },
        // tabBarActiveTintColor: "#135da0",
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
        headerRight: ({ tintColor }) => (
          <Link href={"/(app)/(subject)/subject-info"} className="mr-5">
            <InfoIcon color={tintColor} />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <MessagesSquare color={color} />,
          tabBarLabel: "Stream",
          headerTitle: "Stream",
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarIcon: ({ color }) => <ClipboardList color={color} />,
          tabBarLabel: "Activities",
          headerTitle: "Activities",
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          tabBarIcon: ({ color }) => <UsersRound color={color} />,
          tabBarLabel: "Students",
          headerTitle: "Students",
        }}
      />
    </Tabs>
  );
};

export default SubjectLayout;
