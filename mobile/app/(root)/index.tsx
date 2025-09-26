import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { useUser } from "@clerk/clerk-expo";
import { Href, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PageLoader from "@/components/PageLoader";
import { BalancedCard } from "@/components/BalanceCard";
import { SignOutButton } from "@/components/SignOutButton";

import { styles } from "@/assets/styles/home.styles";

import { useTransactions } from "@/hooks/useTransactions";
import { TransactionItem } from "@/components/TransactionItem";
import NoTransactionsFound from "@/components/NoTransactionsFound";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTransaction(id),
        },
      ]
    );
  };

  if (isLoading && !refreshing) return <PageLoader />;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* LEFT */}
          <View style={styles.headerLeft}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.headerLogo}
              contentFit="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* RIGHT */}
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push("/create" as Href)}
            >
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        {/* 잔액 카드 */}
        <BalancedCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      {/* FlatList is a performant way to render long lists in React Native. */}
      {/* it renders items lazily - only those on the screen. */}

      {/* 리스트 */}
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          // 리스트 화면 아래로 내리면 재조회
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
