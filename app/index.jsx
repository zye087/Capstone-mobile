import { 
  Link
} from "expo-router";

import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";

import bg from '@/assets/images/bg.png'
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

  return (
    // Container
    <View
      className={`
        flex-1
      `}
    >
      {/* BG */}
      <ImageBackground
        className={`
          h-full
          w-full
          flex-1
          px-20
          justify-center
        `}
        resizeMode="cover"
        source={bg}
      >
        {/* Logo */}
        <Image
          source={logo}
          className={`
            mx-auto
            size-40
            mb-10
          `}
        />
        {/* Username Text */}
        <Text
          className={`
            text-white
            mb-1
            text-2xl
          `}
        >
          Username
        </Text>
        {/* Username Input */}
        <TextInput
          className={`
            rounded-full
            border
            px-4
          `}
        />
        {/* Password */}
        <Text
          className={`
            text-white
            mb-1
            text-2xl
          `}
        >
          Password
        </Text>
        {/* Password Input */}
        <TextInput
          className={`
            rounded-full
            border
            px-4
          `}
          secureTextEntry
        />
        {/* Button */}
        <Link className={linkStyle} href='/(home)/home'>LOGIN</Link>
      </ImageBackground>
    </View>
  );
}