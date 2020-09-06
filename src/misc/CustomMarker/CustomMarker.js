import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Callout, Marker} from 'react-native-maps';
import CustomCallout from '../CustomCallout/CustomCallout';
import {getWeatherAtMarkerAction} from '../../store/actions/markersWeatherActions';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const CustomMarker = ({coordinate, markersWeather, id}) => {
    const ref = useRef();
    const navigation = useNavigation();

    const currentWeather = useMemo(() => {
        return markersWeather[id];
    }, [markersWeather]);

    const moveToForecast = () => {
        const {city} = currentWeather;
        const splitted = city.split(' ');
        navigation.navigate('WeekForecast', {
            query: splitted.slice(0, splitted.length - 1).join(' '),
        });
    };

    const onMarkerPress = async ({nativeEvent}) => {
        ref.current.showCallout();
    };


    return (
        <Marker
            onPress={onMarkerPress}
            onCalloutPress={moveToForecast}
            pinColor="#000"
            image={require("../../../assets/marker.png")}
            {...{ref}}
            {...{coordinate}}
        >

            <Callout>
                <CustomCallout {...{coordinate}} {...{id}} />
            </Callout>
        </Marker>
    );
};

const mapStateToProps = (state) => ({
    markersWeather: state.markersWeather,
    isLoading: state.base.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
    getWeatherAtMarker: (lat, lon, markerId) => dispatch(getWeatherAtMarkerAction(lat, lon, markerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomMarker);
