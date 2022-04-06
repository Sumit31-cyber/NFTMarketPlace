import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imageUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                ...props
            }}>
            <Image source={imageUrl} resizeMode='contain' style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )
}
export const RectButton = ({ handlePress, minWidth, fontSize, ...props }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props
            }}>
            <Text style={{
                color: COLORS.white,
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                textAlign: 'center'

            }}>Place a bid</Text>
        </TouchableOpacity>
    )
}