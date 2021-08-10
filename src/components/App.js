import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        error: false
    };

    componentDidMount() {
        this.onTermSubmit('cat');
    }

    onTermSubmit = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params:{
                    id: "7lCDEYXw3mM",
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyAb5cs2M-tEPC7hGhXiU4mNHKpugVf7vpk',
                    q: term
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        }catch(error) {
            console.log(error)
            this.setState({error: true})
        }
        
        
        
        // fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCj2c6yHhwzGRR-r9NcjxP9r5NJH_Yu44c&q=' + term)
        // .then(resp => resp.json())
        // .then((resp) => {
        //     console.log(resp);
        //     this.setState({videos: resp.items});
        //     console.log(this.state.videos);
        // });
    };

    onVideoSelect = (video) => {
        console.log('from the App', video);
        this.setState({selectedVideo:video});
    };

    render(){
        return (
            <div className="ui container app">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui stackable row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} error={this.state.error} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default App;