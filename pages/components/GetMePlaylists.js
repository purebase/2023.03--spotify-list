import React, { useContext, useState } from "react";
import { AlbumContext } from "../context/albumContext";

export default function GetMePlaylists() {

  let GetMePlaylists = async () => {
    let tokenres = await fetch("/api/spotify?token=true", {
      method: "POST",
    });

    let tokenResponse = await tokenres.json();

      // https://developer.spotify.com/console/get-current-user-playlists
    let response = await fetch(
      `https://api.spotify.com/v1/me/playlists`,
      {
        headers: {
          Authorization: "Bearer " + tokenResponse.res.access_token,
          "Content-type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data);

  };
  return (
    <div className="flex flex-col gap-10  p-5 justify-center items-center mx-auto">
      <button
        className="mx-3 my-2 p-2 rounded-xl bg-gray-700 hover:bg-gray-500 text-white text-xl"
        onClick={() => GetMePlaylists()}
      >
        Get Playlist Name - see ConsoleLog
      </button>
    </div>
  );
}
