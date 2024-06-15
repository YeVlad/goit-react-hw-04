import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ serverResponse }) {
  return (
    <>
      <ul>
        {serverResponse.map((oneElement) => {
          return (
            <li key={oneElement.id}>
              <ImageCard link={oneElement.urls.small} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
