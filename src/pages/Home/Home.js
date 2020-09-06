import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Footer from '../../misc/Footer/Footer';
import CustomMarker from '../../misc/CustomMarker/CustomMarker';


const Home = () => {
    const [markers, setMarkers] = useState([]);

    const addMarker = ({nativeEvent: {coordinate}}) => {
        setMarkers((prev) => [...prev, {coordinate, id: Math.random() + new Date().getTime()}]);
    };

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <MapView
                    customMapStyle={require('../../constants/googleMap.json')}
                    initialRegion={{
                        latitude: 49.5451535,
                        longitude: 25.5997143,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5,
                    }}
                    onLongPress={addMarker}
                    style={{...StyleSheet.absoluteFillObject}}
                    provider={PROVIDER_GOOGLE}
                >
                    {markers.map(({id, coordinate}) => (
                        <CustomMarker {...{coordinate}} {...{id}} key={id} />
                    ))}
                </MapView>
            </View>
            <Footer/>
        </View>
    );
};


export default Home
