import React, { useCallback, useState } from "react";
import { Image, StyleSheet, Animated } from 'react-native';
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { SCREEN_NAMES } from "../../consts/screenNames";
import { useSelector } from 'react-redux';
import ImageWithAnimation from '../../components/ImageWithAnimation';

const Home = ({ navigation }) => {
    const imageUri = useSelector(state => state.home.image);
    const [toValueForImage, setToValueForImage] = useState(0);

    const openCamera = useCallback(() => {

        navigation.navigate(SCREEN_NAMES.CREATE_PHOTO);
    }, []);

    const rotateImage = useCallback(() => {

        setToValueForImage(toValueForImage + 30);
    }, [toValueForImage]);

    return (
        <Layout>
            <Button title='Open Cam' onPress={openCamera} containerStyle={styles.buttonContainer} />
            <Button title='Rotate' onPress={rotateImage} containerStyle={styles.buttonContainer} />
            <ImageWithAnimation toValue={toValueForImage} source={{ uri: imageUri }} style={styles.image} />
        </Layout>
    );
};

export default React.memo(Home);

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        borderRadius: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 50,
    }
});