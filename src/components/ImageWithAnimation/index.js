import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const ImageWithAnimation = ({ source, style, toValue }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        if (toValue) {
            Animated.timing(animatedValue, {
                duration: 200,
                useNativeDriver: true,
                toValue,
            }).start();
        }
    }, [toValue]);

    const imageRotateZ = animatedValue.interpolate({
        inputRange: [0, toValue],
        outputRange: [`0deg`, `${toValue}deg`],
    });

    return (
        <Animated.Image source={source} style={[style, { transform: [{ rotateZ: imageRotateZ }] }]} />
    );
};

export default React.memo(ImageWithAnimation);