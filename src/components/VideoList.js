import React from 'react';
import { VideoItem } from './VideoItem';

const VideoList = ({ videos, onSelect }) => {
    const cells = videos.map(video => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onSelect={onSelect}
            />
        );
    });
    
    return (
        <div className="ui relaxed divided list">
            {cells}
        </div>
    );
}

export { VideoList };
