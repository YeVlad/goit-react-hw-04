import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loading-area">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
