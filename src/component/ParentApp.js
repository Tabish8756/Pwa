import { useNavigate } from "react-router-dom";

const ParentApp = () => {
  const navigate = useNavigate();
  const handleApp = () => {
    window.location.replace("https://superb-raindrop-1729e0.netlify.app") // parent to service
  };
  return (
    <div>
      <h1>Pwa App 2</h1>
      <button onClick={handleApp}>Create Health Id</button>
    </div>
  );
};
export default ParentApp;
