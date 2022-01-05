function ContentLeft({ author, photoTitle, isLoading, averageColor }) {
  return (
    <div
      className="flex flex-col flex-wrap w-full justify-center items-start p-10"
      style={
        isLoading
          ? { backgroundColor: 'black' }
          : { background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, ${averageColor}` }
      }
    >
      <div>
        <p
          className="text-left text-sm md:text-base
        "
          style={{ filter: `invert(90%)` }}
        >
          <strong>Author:</strong> {author}
        </p>
        <hr className="text-white" />
        <br />
        <p className="text-left text-sm md:text-base" style={{ filter: `invert(90%)` }}>
          <strong>Title:</strong> {photoTitle}
        </p>
      </div>
    </div>
  );
}

export default ContentLeft;
