import ProfileButton from "@/components/profile-button";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const SubjectLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#f9f9f9",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerRight: ({ tintColor }) => <ProfileButton color={tintColor} />,
          drawerItemStyle: {
            borderRadius: 10,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: "Subjects",
            drawerLabel: "Subjects",
          }}
        />
        <Drawer.Screen
          name="coil-program"
          options={{
            headerTitle: "COIL Program",
            drawerLabel: "COIL Program",
          }}
        />
        <Drawer.Screen
          name="hali-program"
          options={{
            headerTitle: "HALI Program",
            drawerLabel: "HALI Program",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default SubjectLayout;
