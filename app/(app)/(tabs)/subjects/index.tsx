import subjects from "@/assets/data.json";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";

const SubjectsScreen = () => {
  return (
    <View>
      <FlatList
        className="m-5"
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/(app)/(subject)/[id]", // ✅ string literal — not backticks
              params: { id: item.id },
            }}
            asChild
          >
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "#fff",
                marginBottom: 10,
                borderRadius: 10,
                elevation: 2,
                gap: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "300" }}>
                  {item.teacher}
                </Text>
              </View>
              <Text style={{ fontSize: 16 }}>{item.room}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default SubjectsScreen;
