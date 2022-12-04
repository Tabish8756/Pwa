

const ParentApp = () => {
  const handleApp = () => {
    window.location.replace("https://superb-raindrop-1729e0.netlify.app") // parent to service
  };
  return (
    <div>
      <h1>Pwa App 2</h1>
      <button onClick={handleApp}>Create Health</button>
    </div>
  );
};
export default ParentApp;
