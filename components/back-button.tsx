import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

const BackButton = ({ color }: { color: string | undefined }) => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()}>
      <ChevronLeft
        color={color}
        size={30}
        // style={{ marginHorizontal: 12 }}
      />
    </Pressable>
  );
};

export default BackButton;
