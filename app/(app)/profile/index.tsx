import Container from "@/components/container";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import React from "react";

const ProfileScreen = () => {
  return (
    <Container>
      <Link href={"/(app)/profile/personal-information"}>
        <Text>Personal Information</Text>
      </Link>
      <Link href={"/(app)/profile/grades"}>
        <Text>Grades</Text>
      </Link>
      <Link href={"/(app)/profile/gale-library"}>
        <Text>Gale Library</Text>
      </Link>
    </Container>
  );
};

export default ProfileScreen;
