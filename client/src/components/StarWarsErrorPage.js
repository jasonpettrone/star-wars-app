import errorImage from "../images/StarWarsError.png";

function StarWarsErrorPage() {
  return (
    <>
        <img
          className="center-image-top mt-5"
          src={errorImage}
          alt="The Application Has Errored"
        />
        <button
          className="btn btn-warning mt-3 mb-3"
          onClick={() => window.location.reload(false)}
        >
          Try again!
        </button>
      </>
  );
}

export default StarWarsErrorPage;