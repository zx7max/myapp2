import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function HomePage() {
    return (
        <div>
            <h1>Хомяяяяук</h1>
            <p>мур</p>
            <YMaps>
                <div>
                My awesome application with maps!
                <Map defaultState={{ center: [55.75, 37.57], zoom: 19 }} >
                <Placemark geometry={[55.684758, 37.738521]} options={{iconColor:'#ff0000'}}/>
                </Map>    
                </div>
            </YMaps>
        </div>
    );
}


export {HomePage};
