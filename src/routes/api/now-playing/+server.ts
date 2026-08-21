import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

const RECENT_TRACKS_ENDPOINT = 'https://ws.audioscrobbler.com/2.0/';

const NOT_PLAYING = {
	isPlaying: false,
	title: 'Not playing',
	artist: 'Spotify',
	albumImageUrl: '',
	songUrl: ''
};

export const GET: RequestHandler = async () => {
	const apiKey = env.LASTFM_API_KEY;
	const username = env.LASTFM_USERNAME;

	// Keep the graceful placeholder until Last.fm is configured.
	if (!apiKey || !username) {
		return json(NOT_PLAYING);
	}

	try {
		const url = new URL(RECENT_TRACKS_ENDPOINT);
		url.searchParams.set('method', 'user.getrecenttracks');
		url.searchParams.set('user', username);
		url.searchParams.set('api_key', apiKey);
		url.searchParams.set('format', 'json');
		url.searchParams.set('limit', '1');

		const res = await fetch(url);
		if (!res.ok) return json(NOT_PLAYING);

		const data = await res.json();
		const track = data?.recenttracks?.track?.[0];
		if (!track) return json(NOT_PLAYING);

		// Last.fm returns the most recent scrobble; `nowplaying` is set only when live.
		const isPlaying = track['@attr']?.nowplaying === 'true';

		// Pick the largest album image that actually has a URL.
		const images = Array.isArray(track.image) ? track.image : [];
		const albumImageUrl = [...images].reverse().find((img) => img?.['#text'])?.['#text'] ?? '';

		return json(
			{
				isPlaying,
				title: track.name ?? 'Unknown track',
				artist: track.artist?.['#text'] ?? 'Unknown artist',
				albumImageUrl,
				songUrl: track.url ?? ''
			},
			{ headers: { 'Cache-Control': 'public, max-age=30' } }
		);
	} catch (e) {
		console.error('Last.fm API error:', e);
		return json(NOT_PLAYING);
	}
};
