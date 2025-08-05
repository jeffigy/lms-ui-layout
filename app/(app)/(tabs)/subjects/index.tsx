import subjectsData from "@/assets/data.json";
import Container from "@/components/container";
import Subject from "@/features/subjects/subject/Subject";
import { SubjectType } from "@/types/subject";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const subjects = subjectsData as SubjectType[];

const SubjectsScreen = () => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={subjects}
        keyExtractor={(subject: SubjectType) => subject.id.toString()}
        renderItem={({ item }) => <Subject subject={item} />}
      />
    </Container>
  );
};

export default SubjectsScreen;
