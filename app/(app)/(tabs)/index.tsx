import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { useState } from "react";

const HomeScreen = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    if (passwordInput?.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      setEmailInput("");
      setPasswordInput("");
    }
  };
  return (
    <Center className="flex-1">
      <Text>HomeScreen</Text>
    </Center>
  );
};

export default HomeScreen;
