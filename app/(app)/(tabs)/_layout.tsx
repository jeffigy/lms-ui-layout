import { Link, Tabs } from "expo-router";
import {
  Bell,
  BookOpen,
  Calendar,
  CircleUserRound,
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
        headerRight: ({ tintColor }) => (
          <Link href={"/"}>
            <CircleUserRound color={tintColor} />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerTitle: "HCCCI",
          tabBarLabel: "",
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color }) => <Calendar color={color} />,
          headerTitle: "Calendar",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <BookOpen color={color} />,
          headerTitle: "Subjects",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
          headerTitle: "Messages",
          tabBarLabel: "",
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <Bell color={color} />,
          headerTitle: "Notifications",
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
