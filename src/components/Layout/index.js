import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../../consts/styles';

const Layout = ({ children }) => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Layout);

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
});