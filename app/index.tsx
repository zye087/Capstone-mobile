import { Link } from "expo-router";
import { Image, Text, TextInput, View, StyleSheet  } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4 bg-green-400">
      <Text className="font-bold text-4xl text-blue-700 text-center">LOGIN PAGE</Text>
      <Text>Username</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Password</Text>
      <TextInput style={styles.input}></TextInput>
      <Link className="text-bold text-3xl mt-4 border border-white p-4 text-center rounded-2xl bg-slate-800 color-white" href='/(home)/home'>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});