import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";

export default function RootLayout() {
  return (
    <SafeScreen>
      {/* 헤더 안보이도록 설정 */}
      <Stack screenOptions={{ headerShown: false }} />
    </SafeScreen>
  );
}
