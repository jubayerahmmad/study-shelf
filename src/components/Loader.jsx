import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        autoplay={true}
        className="w-full h-96"
      />
    </div>
  );
};

export default Loader;
