import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  let TOKEN = "HF5F0ET-DQKMAF0-GAG56YR-8KHSTCV";

  const getData = async (url, state) => {
    try {
      const rest = await axios.get(
        `https://api.kinopoisk.dev/v1.4/movie/random`,
        {
          headers: {
            "X-API-KEY": TOKEN,
          },
        }
      );

      setMovieData(rest);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getData("movie?year=2023&genres.name=криминал", setData);
    getData("", setMovieData);
  }, []);
  // console.log(data.data);
  console.log(movieData.data);

  return (
    <>
      {/* {movieData?.data?.docs?.map((item, idx) => (
        <div key={idx}>
          <img src={item?.poster?.previewUrl} width={1000} alt="" />
        </div>
      ))} */}

      <div className="card"> 
        <img src={movieData.data?.poster?.previewUrl} width={1000} alt="" />
      </div>
    </>
  );
}

export default App;
