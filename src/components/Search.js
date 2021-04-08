import React, { useState, useEffect } from "react";
import "../style/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import SpotifyWebApi from "spotify-web-api-js";
import Avatar from "@material-ui/core/Avatar";
import SearchTopRight from "./SearchTopRight";
import SearchTopLeft from "./SearchTopLeft";
import Albums from "./Albums";
import { useDataLayerValue } from "../StateProvider";
import Tracks from "./Tracks";
const spotify = new SpotifyWebApi();
function Search() {
  const [
    { user, searchAll, info, songs, albums, songsBottom, searchTrack },
    dispatch,
  ] = useDataLayerValue();
  const [search, setSearch] = useState("");
  const [max, setMax] = useState(0);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setMax(0);
  }, [searchAll]);

  useEffect(() => {
    spotify
      .search(search, ["artist", "track", "album", "playlist"])
      .then((result) => {
        console.log("searchALL", result);
        dispatch({
          type: "SET_SEARCH_ALL",
          searchAll: result,
        });
      });
    spotify.searchTracks(search).then((result) => {
      dispatch({
        type: "SET_SEARCH_TRACK",
        searchTrack: result,
      });
    });
  }, [search, dispatch]);

  useEffect(() => {
    searchAll?.artists.items.map((current) =>
      current.popularity > max ? setMax(current.popularity) : null
    );
  }, [searchAll, max]);

  useEffect(() => {
    searchAll?.artists.items.filter((current) =>
      current.popularity === max
        ? dispatch({
            type: "SET_MOST_POPULAR",
            info: {
              name: current.name,
              img: current.images,
              id: current.id,
            },
          })
        : null
    );
  }, [searchAll, dispatch, max]);

  useEffect(() => {
    dispatch({
      type: "CLR_ALBUM",
    });
    searchAll?.albums.items.map((album) => {
      album.artists.map((artist) =>
        info?.id === artist.id
          ? dispatch({
              type: "SET_ALBUM",
              albumInfo: album,
            })
          : null
      );
    });
  }, [searchAll, info, dispatch]);

  useEffect(() => {
    dispatch({
      type: "CLR_TOP_TRACK",
    });
    searchAll?.tracks.items.map((track) => {
      track.artists.map((artist) =>
        info?.id === artist.id
          ? dispatch({
              type: "SET_TOP_TRACK",
              trackInfo: {
                trackUri: track.uri,
                trackAlbum: track.album.images[0]?.url,
                trackId: track.id,
                trackName: track.name,
                trackDuration: track.duration_ms,
              },
            })
          : null
      );
    });
  }, [searchAll, info, dispatch]);

  useEffect(() => {
    dispatch({
      type: "CLR_BOTTOM_TRACKS",
    });
    searchTrack?.tracks.items.map((track) =>
      dispatch({
        type: "SET_BOTTOM_TRACKS",
        trackBottom: track,
      })
    );
  }, [searchTrack, dispatch]);
  return (
    <>
      <div className="search">
        <div className="search__header">
          <div className="search__header__left">
            <SearchIcon fontSize="large" />
            <input
              type="text"
              placeholder="Search fors Songs, Artist.."
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="search__header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
          </div>
        </div>
        {searchAll ? (
          <div>
            <h1 className="header__best__result">Best reasult artist</h1>
            <div className="search__body">
              <div className="search__body__top">
                <div className="search__body__top__wrapper">
                  {info ? (
                    <div className="body__top__left">
                      {
                        <SearchTopLeft
                          key={info.id}
                          img={info.img}
                          name={info.name}
                        />
                      }
                    </div>
                  ) : null}
                </div>

                {songs ? (
                  <div className="body__top__right">
                    {songs.map((curr, id) => (
                      <SearchTopRight
                        key={id}
                        trackDuration={curr.trackDuration}
                        trackName={curr.trackName}
                        trackUri={curr.trackUri}
                        trackAlbum={curr.trackAlbum}
                        trackId={curr.trackId}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="search__body__bottom">
                {albums ? <h1>Albums</h1> : null}
                <div className="body__bottom__albums">
                  {albums?.slice(0, 6).map((curr, id) => (
                    <Albums key={id} album={curr} />
                  ))}
                </div>
                <div className="body__bottom__track">
                  <h1>Tracks</h1>
                  {songsBottom?.slice(0, 10).map((curr, id) => (
                    <Tracks key={id} track={curr} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Search;

/*

/*

       trackUri: track.uri,
          trackAlbum: track.album.images[0]?.url,
          trackId: track.id,
          trackName: track.name,
          trackDuration: track.duration_ms,

               <SearchTopRight
                  key={id}
                  trackDuration={curr.trackDuration}
                  trackName={curr.trackName}
                  trackUri={curr.trackUri}
                  trackAlbum={curr.trackAlbum}
                  trackId={curr.trackId}
                />
  */
