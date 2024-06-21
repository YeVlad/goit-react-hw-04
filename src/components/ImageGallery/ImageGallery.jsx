import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ serverResponse, openModal }) {
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
