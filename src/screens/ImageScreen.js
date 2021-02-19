import React from 'react'
import { View, FlatList, Text } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const list = [
        { 
            imageUrl: require('../../assets/beach.jpg'),
            title: 'Beach',
            score: '6'
        },
        { 
            imageUrl: require('../../assets/forest.jpg'),
            title: 'Forest',
            score: '8'
        },
        { 
            imageUrl: require('../../assets/mountain.jpg'),
            title: 'Moutain',
            score: '10'
        }
    ]
    return (
        <View>
            <Text>Image</Text>
            <FlatList
                keyExtractor={(item) => item.title}
                data={list}
                renderItem={({item, key}) => {
                    return <ImageDetail imageUrl={item.imageUrl} title={item.title} score={item.score}/>
                }}
            />
        </View>
    )
}

export default ImageScreen