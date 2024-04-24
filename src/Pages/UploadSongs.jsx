// frontend: UploadSongs.js

import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";

const genresList = [
  "Pop",
  "Rock",
  "Jazz",
  "Hip Hop",
  "Electronic",
  "Classical",
  "Folk",
  "Country",
  "Blues",
  "R&B",
  "Reggae",
  "Metal",
  "Indie",
  "Alternative",
  "Punk"
];

export const UploadSongs = () => {
  const baseUrl = process.env.REACT_APP_URI;
  const [songFile, setSongFile] = useState(null);
  const [songName, setSongName] = useState("");
  const [singerName, setSingerName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [databaseUploading, setDatabaseUploading] = useState(false);

  const handleSongFileChange = (e) => {
    const file = e.target.files[0];
    setSongFile(file);
    setSongName(file.name); // Automatically set the song name to the uploaded file name
  };

  const handleSongNameChange = (e) => {
    setSongName(e.target.value);
  };

  const handleSingerNameChange = (e) => {
    setSingerName(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleUpload = () => {
    setUploading(true);

    const formData = new FormData();
    formData.append("songFile", songFile);
    formData.append("songName", songName);
    formData.append("singerName", singerName);
    formData.append("genre", selectedGenre);

    axios
      .post(`${baseUrl}/songs`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        }
      })
      .then((res) => {
        console.log(res.data);
        setUploading(false);
        setDatabaseUploading(true);
        setTimeout(() => {
          setDatabaseUploading(false);
          // Reset form fields
          setSongFile(null);
          setSongName("");
          setSingerName("");
          setSelectedGenre("");
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setUploading(false);
      });
  };

  return (
    <div>
      <div className="flex-row justify-center items-center md:pt-8 pt-4">
        <p className="text-white text-4xl font-semibold text-center">
          Upload Song
        </p>
        <div className="w-[90%] bg-gradient-to-tr to-emerald-600 from-teal-900 opacity-90 hover:opacity-100 rounded-lg border-l-3 border-lime-600 shadow-md mx-auto md:mt-5 mt-2 flex justify-between">
          <div className="md:w-[50%] w-[40%] flex justify-center items-center">
            <div className="w-[90%] border border-dashed rounded-lg">
              <label className="flex flex-col items-center px-4 py-20 rounded-lg shadow-lg tracking-widest uppercase hover:bg-blue hover:text-white">
                <AiOutlineCloudUpload size={40} className="text-white" />
                <span className="mt-2 text-white leading-normal">
                  Select a Song to upload
                </span>
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleSongFileChange}
                />
              </label>
            </div>
          </div>

          <div className="md:w-[50%] w-[60%] flex justify-center items-start flex-col p-4 text-emerald-950">
            <label htmlFor="songname" className="text-white">
              Song Name
            </label>
            <input
              type="text"
              id="songname"
              placeholder="Enter Song Name"
              value={songName}
              onChange={handleSongNameChange}
              className="border rounded-md px-2 py-1 mb-2 text-sm md:text-base"
            />
            <label htmlFor="singername" className="text-white">
              Singer Name
            </label>
            <input
              type="text"
              id="singername"
              placeholder="Enter Singer Name"
              value={singerName}
              onChange={handleSingerNameChange}
              className="border rounded-md px-2 py-1 mb-2 text-sm md:text-base"
            />
            <label htmlFor="genre" className="text-white">
              Genre
            </label>
            <select
              id="genre"
              value={selectedGenre}
              onChange={handleGenreChange}
              className="border rounded-md px-2 py-1 mb-2 text-sm md:text-base"
            >
              <option value="">Select Genre</option>
              {genresList.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <button
              onClick={handleUpload}
              className="bg-emerald-600 hover:bg-garden text-white md:px-[17%] px-[35%] py-1 mt-2 hover:opacity-45 rounded-md shadow-md"
              disabled={uploading || databaseUploading}
            >
              {uploading
                ? `Uploading ${uploadProgress}%`
                : databaseUploading
                ? "Uploading to Database..."
                : "Upload"}
            </button>
          </div>
        </div>
        <hr className="md:mt-10 mt-5 w-[90%] mx-auto" />
      </div>
    </div>
  );
};
