import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({
  serverResponse,
  setmodalPic,
  setIsOpen,
}) {
  return (
    <>
      <ul className="gallery">
        {serverResponse.map((oneElement) => {
          return (
            <li key={oneElement.id} id={oneElement.id}>
              <ImageCard
                link={oneElement.urls.small}
                regPicture={oneElement.urls.regular}
                setmodalPic={setmodalPic}
                setIsOpen={setIsOpen}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
