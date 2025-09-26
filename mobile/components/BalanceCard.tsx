import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { Text, View } from "react-native";

interface Props {
  summary: {
    balance: number;
    income: number;
    expenses: number;
  };
}

export const BalancedCard = ({ summary }: Props) => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>
        ${Number(summary.balance).toFixed(2)}
      </Text>

      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            -${Math.abs(summary.income).toFixed(2)}
          </Text>
        </View>

        <View style={[styles.balanceStatItem, styles.statDivider]} />

        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expenses</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(summary.expenses).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
