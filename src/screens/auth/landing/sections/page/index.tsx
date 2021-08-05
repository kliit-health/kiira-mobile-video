import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from './styles';

export type PageProps = {
    title: string;
    description: string;
    imageUrl: ImageSourcePropType;
};

const Page = ({ title, description, imageUrl }: PageProps) => (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={imageUrl}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
);

export default Page;
