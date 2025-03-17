import { Link } from "expo-router";
import { Image, Text, TextInput, View, StyleSheet, ImageBackground  } from "react-native";

import bgImgUrl from '@/assets/images/bg.jpg'
import logo from '@/assets/images/school-logo.png'

export default function Index() {
  const linkStyle = [
    'text-bold',
    'text-3xl',
    'mt-4 border',
    'border-white',
    'p-4',
    'text-center',
    'rounded-2xl',
    'bg-slate-800',
    'color-white',
  ].join(' ')

  return (
    <View className="flex-1 flex-col">
      <ImageBackground className="h-full w-full flex-1 px-20 justify-center" resizeMode="cover" source={bgImgUrl}>
        <Image source={logo} className="mx-auto size-40 mb-10"/>
        <Text className="font-bold text-4xl mb-5 text-white text-center">LOGIN PAGE</Text>
        <Text className="text-white mb-1 text-2xl">Username</Text>
        <TextInput style={styles.input}></TextInput>
        <Text className="text-white mb-1 text-2xl">Password</Text>
        <TextInput style={styles.input}></TextInput>
        <Link className={linkStyle} href='/(home)/home'>Login</Link>
      </ImageBackground>
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
    marginBottom: 20
  },
});