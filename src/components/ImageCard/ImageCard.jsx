export default function ImageCard({ link, altDesc, regPicture, openModal }) {
  function clickOnImg() {
    openModal(regPicture);
  }

  return (
    <div className="photo-div">
      <img
        className="cover-image"
        src={link}
        onClick={clickOnImg}
        alt={altDesc}
      />
    </div>
  );
}
