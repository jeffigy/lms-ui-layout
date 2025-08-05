import Container from "@/components/container";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";

const index = () => {
  return (
    <Container>
      <VStack>
        <Box className="p-6 bg-slate-200 rounded-md">
          <Text>Index Page</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default index;
