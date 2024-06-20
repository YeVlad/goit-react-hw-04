export default function ImageCard({
  link,
  regPicture,
  setmodalPic,
  setIsOpen,
}) {
  function openModal() {
    setmodalPic(regPicture);
    setIsOpen(true);
  }
  return (
    <div className="photo-div">
      <img className="cover-image" src={link} onClick={openModal} />
    </div>
  );
}
