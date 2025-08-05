import { Link } from "expo-router";
import { CircleUserRound } from "lucide-react-native";
import React from "react";

const ProfileButton = ({ color }: { color: string | undefined }) => {
  return (
    <Link href={"/(app)/profile"} className="mr-5">
      <CircleUserRound color={color} />
    </Link>
  );
};

export default ProfileButton;
