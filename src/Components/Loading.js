import ClipLoader from "react-spinners/ClipLoader";

const css = {
  position: "absolute",
  top: "45%",
  left: "45%",
};

function Loading() {
  return (
    <>
      <div
        style={{ height: "100vh", background: "rgba(204, 204, 204,.3)", position: "relative" }}
      >
        <ClipLoader cssOverride={css} size={100} />
      </div>
    </>
  );
}

export default Loading;
