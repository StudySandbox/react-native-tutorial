import { Text, View } from "react-native";

const CATEGORIES = [
  { id: "food", name: "Food & Drinks", icon: "fast-food" },
  { id: "shopping", name: "Shopping", icon: "cart" },
  { id: "transportation", name: "Transportation", icon: "car" },
  { id: "entertainment", name: "Entertainment", icon: "film" },
  { id: "bills", name: "Bills", icon: "receipt" },
  { id: "income", name: "Income", icons: "cash" },
];

const CreateScreen = () => {
  return (
    <View>
      <Text>create</Text>
    </View>
  );
};

export default CreateScreen;
