import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";

import { useTransactions } from "@/hooks/useTransactions";
import { useEffect } from "react";

export default function Page() {
  const { user } = useUser();
  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log("transactions:", transactions);
  console.log("summary:", summary);

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text>Income: {summary.income}</Text>
        <Text>Balance: {summary.balance}</Text>
        <Text>Expenses: {summary.expenses}</Text>
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
