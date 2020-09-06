import React, {useEffect, useMemo} from 'react';
import s from './CustomCallout.s';
import {Text, View} from 'react-native';
import classnames from 'classnames-react-native';
import {getWeatherAtMarkerAction} from '../../store/actions/markersWeatherActions';
import {connect} from 'react-redux';


const Popup = ({
                   style,
                   markersWeather,
                   getWeatherAtMarker,
                   id,
                   coordinate,
               }) => {
    const {title, body} = useMemo(() => {
        return markersWeather[id]
            ? {title: markersWeather[id].city, body: `${markersWeather[id].data?.main?.temp}°`}
            : {}
    }, [markersWeather]);

    useEffect(() => {
        getWeatherAtMarker(coordinate.latitude, coordinate.longitude, id);
    }, []);

    return (
        <View style={classnames(s.container, style)}>
            {!title && !body ? (
                <View style={s.loadingContainer}>
                    <Text style={s.loadingMessage}>Loading</Text>
                </View>
            ) : (
                <View style={s.inner}>
                    <Text style={s.title}>{title}</Text>
                    <Text style={s.body}>{body}</Text>
                </View>
            )}
        </View>
    );
};

const mapStateToProps = (state) => ({
    markersWeather: state.markersWeather,
    isLoading: state.base.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    getWeatherAtMarker: (lat, lon, markerId) => dispatch(getWeatherAtMarkerAction(lat, lon, markerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
