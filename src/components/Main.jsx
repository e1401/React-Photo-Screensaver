import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

function Main() {
  return (
    <div
      className="container h-screen w-full flex-col flex justify-end"
      style={{ backgroundColor: 'red' }}
    >
      {/* TODO GET A PICTURE, PEXELS API */}1
      <div
        className="container h-1/4 flex-row flex justify-between"
        style={{ backgroundColor: 'grey' }}
      >
        <div className="h-3/4 w-1/4" style={{ backgroundColor: 'white' }}>
          <ContentLeft title="Chromecast" />
        </div>
        <div className="h-3/4 w-1/4" style={{ backgroundColor: 'white' }}>
          <ContentRight />
        </div>
      </div>
    </div>
  );
}

export default Main;
