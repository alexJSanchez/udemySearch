import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIS/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null,
    }

    onTermSubmit = async term => {
     const response = await youtube.get('/search',{
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) => {
        console.log('from the app',video)
        this.setState({selectedVideo: video})
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            i have {this.state.videos.length} videos
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        )
    }
}
export default App;

