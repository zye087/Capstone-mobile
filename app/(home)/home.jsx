import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Button
} from 'react-native'

import React from 'react'

import bg from '@/assets/images/bg.jpg'
import profile from '@/assets/images/profile.png'
import qrcode from '@/assets/images/qrCode.png'

const home = () => {
  return (
    // For iOS Notches
    <SafeAreaView
      className={`
        flex-1
      `}
    >
      {/* Container */}
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
            items-center
          `}
          resizeMode="cover"
          source={bg}
        >
          {/* Profile */}
          <View>
            <Image
              source={profile}
              resizeMode='contain'
              className={`
                size-28
                border-black
                bg-white
                rounded-full
              `}
            />
            <Text
             className={`
                font-bold
                text-white
                text-2xl
                text-center
                mt-3
              `}
            >
              Jon Snow
            </Text>
          </View>
          {/* QR Code */}
          <View
            className={`
              w-64
              bg-white
              rounded-3xl
              p-4
              items-center
            `}
          >
            <Image
              source={qrcode}
              resizeMode='contain'
              className={`
                size-52
              `}
            />
            <Text
             className={`
                font-bold
                text-4xl
                text-center
                mt-3
              `}
            >
              My QR Code
            </Text>
          </View>
          {/* Buttons */}
          <View>
            <Button title='Notificattions' />
            <Button title='Manage Guardians' />
            <Button title='Emergency Pick-up' />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default home