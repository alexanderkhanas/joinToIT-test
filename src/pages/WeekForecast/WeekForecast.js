import React, {useEffect, useState} from 'react';
import s from './WeekForecast.s';
import {View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import {
    clearForecastAction,
    getForecastByCoordsAction,
    getForecastByQueryAction,
} from '../../store/actions/forecastActions';
import WeatherCard from '../../misc/WeatherCard/WeatherCard';
import {SvgUri} from 'react-native-svg';
import Footer from '../../misc/Footer/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const WeekForecast = ({values: {query}, handleChange, route, handleSubmit, forecast, setValues, clearForecast, isLoading}) => {
    useEffect(() => {
        if (route.params?.query) {
            setValues({query: route.params.query});
            handleSubmit();
        }
    }, [route.params]);
    return (
        <View style={s.container}>
            <View style={s.inner}>
                <View style={s.inputContainer}>
                    <TextInput
                        style={s.input}
                        onChangeText={handleChange('query')}
                        value={query}
                        onSubmitEditing={handleSubmit}
                        placeholder="Type city name ..."
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} size={30}/>
                    </TouchableOpacity>
                </View>
                {!forecast.length && isLoading ? (
                    <View style={s.loadingContainer}>
                        <ActivityIndicator color="#000" size="large"/>
                    </View>
                ) : (
                    <>
                        <Text style={s.title}>Next 7 days:</Text>
                        <ScrollView>
                            <View style={s.cardsContainer}>
                                {forecast.map((item, i) => (
                                    <WeatherCard key={i} {...{item}} />
                                ))}
                            </View>
                        </ScrollView>
                    </>
                )}
            </View>
            <Footer/>
        </View>
    );
};

const formikHOC = withFormik({
    mapPropsToValues: () => ({query: ''}),
    handleSubmit: ({query}, {props: {getForecastByQuery, clearForecast}}) => {
        if (query) {
            clearForecast()
            getForecastByQuery(query);
        }
    },
})(WeekForecast);


const mapStateToProps = (state) => ({
    forecast: state.forecast.days,
    isLoading: state.base.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
    getForecastByCoords: (lat, lon) => dispatch(getForecastByCoordsAction(lat, lon)),
    getForecastByQuery: (query) => dispatch(getForecastByQueryAction(query)),
    clearForecast: () => dispatch(clearForecastAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
