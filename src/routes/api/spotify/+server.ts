import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Placeholder implementation for Spotify API
    // You will need to add your SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN to .env
    
    return json({
        isPlaying: false,
        title: 'Not playing',
        artist: 'Spotify',
        albumImageUrl: '',
        songUrl: ''
    });
};
