import "../styles/overlay.css";
import { useEffect, useState } from "react";

const LoadingOverlay = ({ externalLoading, externalText }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading && !externalLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p>{externalText || "Loading..."}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
