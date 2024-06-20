import "./App.css";

import SearchForm from "../SearchForm/SearchForm";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBut from "../LoadMoreBut/LoadMoreBut";
import ImageModal from "../ImageModal/ImageModal";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [searchWord, setsearchWord] = useState("");
  const [serverResponse, setserverResponse] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPic, setmodalPic] = useState("");

  useEffect(() => {
    console.log(modalIsOpen);

    if (searchWord) {
      const getData = async () => {
        try {
          setError(false);
          setLoad(true);
          if (page === 1) {
            setserverResponse([]);
          }

          const params = {
            query: searchWord,
            per_page: 3,
            page,
            client_id: "Zyv9YRAXEBUm6boWegYjry307ikEWlIWycIU_HdxBQU",
          };
          const url = "https://api.unsplash.com/search/photos";

          const response = await axios.get(url, { params });

          setserverResponse((prev) => {
            return [...prev, ...response.data.results];
          });
        } catch {
          setError(true);
        } finally {
          setLoad(false);
        }
      };
      getData();
    }
  }, [searchWord, page]);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchForm setsearchWord={setsearchWord} setPage={setPage} />
      {serverResponse.length > 0 && (
        <ImageGallery
          serverResponse={serverResponse}
          setmodalPic={setmodalPic}
          setIsOpen={setIsOpen}
        />
      )}
      {load && <Loader />}
      {error && <ErrorMessage />}
      {serverResponse.length > 0 && (
        <LoadMoreBut setPage={setPage} page={page} />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalPic={modalPic}
        />
      )}
    </>
  );
}

export default App;
