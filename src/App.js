import './App.css';

import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

import requests from './requests';

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />

            <Row title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow={true}/>
            
            <Row title="Trending Now" 
                fetchUrl={requests.fetchTrendingAllDay}/>

            <Row title="TopRated" 
                fetchUrl={requests.fetchMovieTopRated}/>
            
            <Row title="Popular" 
                fetchUrl={requests.fetchMoviePopular}/>
            
            <Row title="Action Movies" 
                fetchUrl={requests.fetchDiscoverMovieAction}/>
            <Row title="Comedy Movies" 
                fetchUrl={requests.fetchDiscoverMovieComedy}/>
            <Row title="Horror Movies" 
                fetchUrl={requests.fetchDiscoverMovieHorror}/>
            <Row title="Romance Movies" 
                fetchUrl={requests.fetchDiscoverMovieRomance}/>
            <Row title="Documentaries" 
                fetchUrl={requests.fetchDiscoverMovieDocumentary}/>
        </div>
    );
}

export default App;
