import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../consts/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ 
    onPress, 
    title, 
    containerStyle, 
    iconColor = Colors.WHITE, 
    iconSize = 20,
    iconName,
}) => {
    return (
        <TouchableOpacity 
            activeOpacity={1} 
            onPress={onPress}
            style={[styles.container, containerStyle]}
        >
            {!!iconName && <Icon name={iconName} color={iconColor} size={iconSize} />}
            {!!title && <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.BLUE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        lineHeight: 15,
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
});