import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('cat');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyD7moKkzIE-4s1qxm-wDp1NHScUx-xRGMc',
                q: term
            }
        });
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(this.state.videos);
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
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
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