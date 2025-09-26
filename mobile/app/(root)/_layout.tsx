import { useUser } from "@clerk/clerk-expo";
import { Href, Redirect, Stack } from "expo-router";

export default function Layout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // this is for a better UX

  if (!isSignedIn) return <Redirect href={"/sign-in" as Href} />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
