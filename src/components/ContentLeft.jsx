function ContentLeft({ author, photoTitle, isLoading, averageColor }) {
  return (
    <div
      className="flex flex-col flex-wrap w-full h-1/2 justify-center items-start pl-20"
      style={
        isLoading
          ? { backgroundColor: 'black' }
          : { background: `linear-gradient(90deg, rgba(0,0,0,1) 10%, ${averageColor}` }
      }
    >
      <div>
        <p className="text-white">
          <strong>Author:</strong> {author}
        </p>
        <hr className="text-white" />
        <br />
        <p className="text-white">
          <strong>Title:</strong> {photoTitle}
        </p>
      </div>
    </div>
  );
}

export default ContentLeft;
