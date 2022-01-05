import Clock from './Clock';

function ContentRight({ isLoading, averageColor }) {
  return (
    <div
      // className="h-3/4 w-1/4 place-content-center"
      className="flex flex-col flex-wrap w-full h-1/2 justify-center items-end pr-20"
      style={isLoading ? { backgroundColor: 'black' } : { backgroundColor: `${averageColor}` }}
    >
      <Clock />
    </div>
  );
}

export default ContentRight;
