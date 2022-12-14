import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const Reminder = props => {

    const post = props.post;

    const navigation = useNavigation();

    const onPress = () => {       
        console.log(post.title);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.date}>{post.date}</Text>
                <Text style={styles.priority}>{post.priority}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Reminder;