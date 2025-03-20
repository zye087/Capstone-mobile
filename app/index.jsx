import { Link } from "expo-router";
import { Image, Text, TextInput, View, StyleSheet, ImageBackground  } from "react-native";

import bgImgUrl from '@/assets/images/bg.jpg'
import logo from '@/assets/images/school-logo.png'

export default function Index() {
  const linkStyle = [
    'text-bold',
    'text-3xl',
    'mt-4',
    'p-4',
    'text-center',
    'rounded-full',
    'bg-slate-800',
    'color-white',
  ].join(' ')

  const inputStyle = [
    'rounded-full',
    'px-4',
    'bg-white',
    'mb-4',
  ].join(' ')

  return (
    <View className="flex-1 flex-col">
      <ImageBackground className="h-full w-full flex-1 px-20 justify-center" resizeMode="cover" source={bgImgUrl}>
        <Image source={logo} className="mx-auto size-40 mb-10"/>

        <Text className={`font-bold text-4xl mb-5 text-white text-center`}>LOGIN PAGE</Text>

        <Text className="text-white mb-1 text-2xl">Username</Text>

        <TextInput textContentType="password" className={inputStyle}></TextInput>

        <Text className=" mb-1 text-2xl">Password</Text>
        
        <TextInput textContentType="password" secureTextEntry={true} className={inputStyle} />

        <Link className={linkStyle} href='/(home)/home'>LOGIN</Link>

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