import "./loadButton.css"

function LoadButton({loading, text }) {
  if (loading) {
    return (
      <>
        <button id="load-button" className="button" type="submit">
          {text}
          <div className="custom-loader"></div>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button id="load-button" className="button" type="submit">
          {text}
        </button>
      </>
    );
  }
}
export default LoadButton;
