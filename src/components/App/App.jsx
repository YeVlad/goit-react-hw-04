import "./App.css";

import SearchForm from "../SearchForm/SearchForm";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useState, useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [searchWord, setsearchWord] = useState("");
  const [serverResponse, setserverResponse] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPic, setmodalPic] = useState("");

  useEffect(() => {
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
          console.log(response.data.results);

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

  function handleSubmit(values, actions) {
    if (values.keyWord.trim().length > 0) {
      setPage(1);
      setsearchWord(values.keyWord);
      actions.resetForm();
    } else {
      const notifyEmpty = () =>
        toast("Sorry, but you must write something in the textarea");
      notifyEmpty();
    }
  }

  function openModal(regPicture) {
    setmodalPic(regPicture);
    setIsOpen(true);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {serverResponse.length > 0 && (
        <ImageGallery serverResponse={serverResponse} openModal={openModal} />
      )}
      {load && <Loader />}
      {error && <ErrorMessage />}
      {serverResponse.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
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
