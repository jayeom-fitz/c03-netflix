import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
    return (
        <div className="App">
            <h1>Netflix Clone</h1>

            <Row title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchNetflixOriginals} />
            
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
