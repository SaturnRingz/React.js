import "./loadingScreen.css"
function LoadingScreen({ loading, children }) {
  if (loading) {
    return (
      <div id="loading_screen">
        <img
          src={require("../../Assets/pictures/loading_ufo.png")}
          alt="loading_alien"
        ></img>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

export default LoadingScreen;
