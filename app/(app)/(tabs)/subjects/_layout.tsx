import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { CircleUserRound } from "lucide-react-native";
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

          headerRight: ({ tintColor }) => (
            <Link href={"/(app)/profile"}>
              <CircleUserRound color={tintColor} />
            </Link>
          ),
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
