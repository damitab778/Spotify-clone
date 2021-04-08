export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotifyy-clone.netlify.app/";
const clientId = "40e44171c4ed416ab2270754df3d289d";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
];

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((prev, current) => {
      let parts = current.split("=");
      prev[parts[0]] = decodeURIComponent(parts[1]);
      return prev;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
