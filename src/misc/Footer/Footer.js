import React from 'react';
import s from './Footer.s';
import {TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faMap, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import classnames from 'classnames-react-native';


const Footer = () => {
    const navigation = useNavigation();
    const {name} = useRoute()
    return (
        <View style={s.container}>
            <TouchableOpacity style={classnames(s.button, [s.secondaryButtonLeft, name !== "Home"])} onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon size={30} icon={faMap} />
            </TouchableOpacity>
            <TouchableOpacity style={classnames(s.button, [s.secondaryButtonRight, name !== "WeekForecast"])} onPress={() => navigation.navigate("WeekForecast")}>
                <FontAwesomeIcon size={30} icon={faSearch} />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
