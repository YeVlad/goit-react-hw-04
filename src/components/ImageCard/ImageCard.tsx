type Props={
  link:string,
  altDesc:string,
  regPicture:string,
  openModal:(regPicture:string)=>void
}


export default function ImageCard({ link, altDesc, regPicture, openModal }:Props):React.ReactElement {
  function clickOnImg():void {
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
