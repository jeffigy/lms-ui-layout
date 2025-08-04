import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";

const index = () => {
  return (
    <VStack>
      <Box className="p-6 bg-slate-500 rounded-md">
        <Text>Hello world</Text>
      </Box>
    </VStack>
  );
};

export default index;
