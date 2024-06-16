export default function ImageCard({ link }) {
  function openModal(event) {}
  return (
    <div className="photo-div">
      <img className="cover-image" src={link} onClick={openModal} />
    </div>
  );
}
