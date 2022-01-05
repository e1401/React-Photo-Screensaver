import Clock from './Clock';

function ContentRight({ isLoading, averageColor }) {
  return (
    <div
      // className="h-3/4 w-1/4 place-content-center"
      className="flex flex-col flex-wrap w-full  justify-start
       items-end pt-10 pr-10"
      style={isLoading ? { backgroundColor: 'black' } : { backgroundColor: `${averageColor}` }}
    >
      <Clock />
    </div>
  );
}

export default ContentRight;
