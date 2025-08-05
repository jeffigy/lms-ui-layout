import { SubjectType } from "@/types/subject";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

const Subject = ({ subject }: { subject: SubjectType }) => {
  return (
    <Link
      href={{
        pathname: "/(app)/(subject)/[id]", // ✅ string literal — not backticks
        params: { id: subject.id },
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
            {subject.subject_name}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>
            {subject.subject_description}
          </Text>
        </View>
        <Text style={{ fontSize: 16 }}>{subject.duration}</Text>
      </Pressable>
    </Link>
  );
};

export default Subject;
