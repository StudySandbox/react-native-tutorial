import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href={"/sign-in" as Href}>
          <Text>Sign in</Text>
        </Link>
        <Link href={"/sign-up" as Href}>
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
