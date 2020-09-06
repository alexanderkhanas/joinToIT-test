import React from 'react';
import s from './WeatherCard.s';
import {Text, View} from 'react-native';
import days from '../../constants/days';


const WeatherCard = ({item}) => {
    const {dt, temp} = item;

    return (
        <View style={s.container}>
            <Text style={s.dayText}>
                {days[new Date( +`${dt}000`).getDay()]}
            </Text>
            <Text style={s.tempText}>
                {temp.eve} °
            </Text>
        </View>
    );
};

export default WeatherCard;
