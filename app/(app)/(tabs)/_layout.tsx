import ProfileButton from "@/components/profile-button";
import { Tabs } from "expo-router";
import {
  Bell,
  BookOpen,
  Calendar,
  Home,
  MessageCircle,
} from "lucide-react-native";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "left",

        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },

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
        headerRight: ({ tintColor }) => <ProfileButton color={tintColor} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerTitle: "HCCCI",
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color }) => <Calendar color={color} />,
          headerTitle: "Calendar",
          tabBarLabel: "Calendar",
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <BookOpen color={color} />,
          headerTitle: "Subjects",
          tabBarLabel: "Subjects",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
          headerTitle: "Messages",
          tabBarLabel: "Messages",
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <Bell color={color} />,
          headerTitle: "Notifications",
          tabBarLabel: "Notifications",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
