import { useUser } from "@clerk/clerk-expo";
import { Href, Redirect, Stack } from "expo-router";

export default function Layout() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return <Redirect href={"/sign-in" as Href} />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
