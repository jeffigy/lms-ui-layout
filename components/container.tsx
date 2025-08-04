import { Box } from "@/components/ui/box";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Box className="flex-1 bg-[#f9f9f9]">{children}</Box>;
};

export default Container;
