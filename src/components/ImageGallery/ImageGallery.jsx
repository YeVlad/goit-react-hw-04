import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ serverResponse }) {
  return (
    <>
      <ul className="gallery">
        {serverResponse.map((oneElement) => {
          return (
            <li key={oneElement.id} id={oneElement.id}>
              <ImageCard link={oneElement.urls.small} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
