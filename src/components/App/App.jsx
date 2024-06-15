import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [searchWord, setsearchWord] = useState("");
  const [serverResponse, setserverResponse] = useState("");

  useEffect(() => {
    if (searchWord) {
      const getData = async () => {
        const params = {
          query: searchWord,
          per_page: 5,
          page: 1,
          client_id: "Zyv9YRAXEBUm6boWegYjry307ikEWlIWycIU_HdxBQU",
        };
        const url = "https://api.unsplash.com/search/photos";

        const response = await axios.get(url, { params });
        console.log(response.data.results);

        setserverResponse(response.data.results);
      };
      getData();
    }
  }, [searchWord]);

  return (
    <>
      <SearchForm setsearchWord={setsearchWord} />
      {serverResponse && <ImageGallery serverResponse={serverResponse} />}
    </>
  );
}

export default App;
