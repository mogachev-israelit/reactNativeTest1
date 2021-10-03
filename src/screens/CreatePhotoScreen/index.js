import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, InteractionManager } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Button from '../../components/Button';
import { loadImage } from '../../store/features/homeSlice';
import { useDispatch } from 'react-redux';

const CreatePhoto = ({ navigation }) => {
    const cameraRef = useRef(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        InteractionManager.runAfterInteractions(() => {

            setLoading(false);
        });
    }, []);

    const goBack = useCallback(() => {

        navigation.goBack();
    }, []);

    const takePhoto = useCallback(() => {

        if (cameraRef.current) {

            cameraRef.current.takePictureAsync({ 
                quality: 0.5, 
                base64: false,
            }).then(handleTakePhoto);
        }
    }, []);

    const handleTakePhoto = (res) => {
        dispatch(loadImage({ image: res.uri }));
        goBack();
    };

    return (
        <View style={styles.container}>
            {!loading && (
                <RNCamera
                    ref={cameraRef}
                    style={styles.camera} 
                    captureAudio={false} 
                />
            )}
            <Button 
                containerStyle={styles.buttonBack}
                iconName='chevron-left'
                iconSize={16}
                onPress={goBack}
            />
            <Button 
                containerStyle={styles.buttonCreatePhoto}
                iconName='camera'
                iconSize={30}
                onPress={takePhoto}
            />
        </View>
    );
}

export default React.memo(CreatePhoto);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonBack: {
        width: 40,
        height: 40,
        borderRadius: 40,
        position: 'absolute',
        marginTop: 60,
        zIndex: 10,
        marginLeft: 30,
    },
    buttonCreatePhoto: {
        width: 80,
        height: 80,
        borderRadius: 80,
        position: 'absolute',
        bottom: 90,
        alignSelf: 'center',
        zIndex: 10,
    }
});