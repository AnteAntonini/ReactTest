import "./loadingSpinner.css";
import { useEffect } from "react";

export default function LoadingSpinner({ message }: { message: string }) {
  useEffect(() => {
    console.log(`${message} Loading Spinner`);
  }, []);

  return (
    <div className="loading-spinner-wrapper">
      <div className="loading-spinner"></div>
    </div>
  );
}
