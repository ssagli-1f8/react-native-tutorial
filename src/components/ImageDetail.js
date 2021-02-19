import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const ImageDetail = ({ title, imageUrl, score }) => {
    console.log('title', title)
    console.log('imageUrl', imageUrl)
    return (
        <View>
            <Text>{title}</Text>
            <Image
                style={styles.imageStyle}
                source={imageUrl}
            />
            <Text>Image Score - {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100
    }
})


export default ImageDetail