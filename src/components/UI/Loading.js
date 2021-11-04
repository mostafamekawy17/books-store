const Loading = () => {
  return (
    <div
      style={{ minHeight: "350px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="spinner-border border-5 text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
