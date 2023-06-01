import "./deleteButton.css"

function DeleteButton({ onClick, loading, text }) {
  if (loading) {
    return (
      <>
        <button onClick={onClick} id="delete-button" className="button">
          {text}
          <div className="custom-loader"></div>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={onClick} id="delete-button" className="button">
          {text}
        </button>
      </>
    );
  }
}
export default DeleteButton;
