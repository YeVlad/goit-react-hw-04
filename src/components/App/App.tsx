import "./App.css";

import SearchForm from "../SearchForm/SearchForm";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import React,{ useState, useEffect } from "react";

import axios, { AxiosResponse } from 'axios';
import toast from "react-hot-toast";

type ServerResponseItem = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type ParamsForRequest = {
  query: string;
  per_page: number;
  page: number;
  client_id: string;
};

type Values = {
  keyWord: string;
};

function App(): React.ReactElement {
  const [searchWord, setSearchWord] = useState<string>("");
  const [serverResponse, setServerResponse] = useState<ServerResponseItem[]>([]);
  const [page, setPage] = useState<number>(1);

  const [error, setError] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalPic, setModalPic] = useState<string>("");

  
    useEffect(() => {
      if (searchWord) {
        const getData = async (): Promise<void> => {
          try {
            setError(false);
            setLoad(true);
            if (page === 1) {
              setServerResponse([]);
            }
  
            const params: ParamsForRequest = {
              query: searchWord,
              per_page: 3,
              page,
              client_id: "Zyv9YRAXEBUm6boWegYjry307ikEWlIWycIU_HdxBQU",
            };
  
        
          type ResponseResults = {
              results: object[];
          };
          
          type ResponseData = {
              data: ResponseResults;
          };
          

            const url: string = "https://api.unsplash.com/search/photos";
  
            const response = await axios.get<ResponseData>(url, { params });
            console.log(response);
            
            
  
            setServerResponse((prev) => [...prev, ...response.data.results]);
          } catch (error) {
            setError(true);
            toast.error("Failed to fetch data from server");
          } finally {
            setLoad(false);
          }
        };
  
        getData();
      }
    }, [searchWord, page, setServerResponse, setError, setLoad]);


  function handleSubmit(values: Values, actions: any): void {
    if (values.keyWord.trim().length > 0) {
      setPage(1);
      setSearchWord(values.keyWord);
      actions.resetForm();
    } else {
      toast.error("Sorry, but you must write something in the textarea");
    }
  }

  function openModal(regPicture: string): void {
    setModalPic(regPicture);
    setIsOpen(true);
  }

  function handleLoadMore(): void {
    setPage(page + 1);
  }

  function closeModal(): void {
    setIsOpen(false);
  }


  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {serverResponse.length > 0 && (
        <ImageGallery serverResponse={serverResponse} openModal={openModal} />
      )}
      {load && <Loader
  height="100"
  width="100"
  color="blue"
  ariaLabel="Loading"
/>}
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
