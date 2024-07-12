import ImageCard from "../ImageCard/ImageCard";

type ServerResponseItem = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type Props = {
  serverResponse: ServerResponseItem[];
  openModal: (regPicture: string) => void;
};

export default function ImageGallery({ serverResponse, openModal }:Props):React.ReactElement {
  return (
    <>
      <ul className="gallery">
        {serverResponse.map((oneElement) => {
          return (
            <li key={oneElement.id} id={oneElement.id}>
              <ImageCard
                link={oneElement.urls.small}
                altDesc={oneElement.alt_description}
                regPicture={oneElement.urls.regular}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
