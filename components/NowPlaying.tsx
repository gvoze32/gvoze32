import React from 'react';
import ReadmeImg from './ReadmeImg';
import Text from './Text';

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}) => {
  return (
    <ReadmeImg width="500" height={!track ? '64' : '90'}>
      <style>
        {`
            .paused {
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }

            img:not([src]) {
              content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
              border-radius: 6px;
              background: #FFF;
              border: 1px solid #e1e4e8;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              background: #e1e4e8;
              overflow: hidden;
              padding: 2px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: #ff3ca9;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }

            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #now-playing {
              animation-delay: 200ms;
              opacity: 1;
              margin-bottom: 16px;
            }

            #track {
              animation-delay: 400ms;
            }

            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            .hide {
              display: none;
            }

            #cover {
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
              border-radius: 2px;
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <Text id="now-playing" className={!isPlaying ? 'hide' : 'show'}>
        <strong>Now Playing</strong> on Spotify
      </Text>
      <div
        className={isPlaying ? 'disabled' : ''}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img id="cover" src={cover ?? null} width="48" height="48" />
        <div
          style={{
            display: 'flex',
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: '50%',
            flexDirection: 'column',
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          <Text id="track" weight="bold">
            {`${track ?? ''} `.trim()}
          </Text>
          <Text id="artist" color={!track ? 'gray' : undefined}>
            {artist || 'Nothing playing...'}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? 'paused' : ''} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};
