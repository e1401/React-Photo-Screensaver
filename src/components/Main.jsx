import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import { useEffect, useState } from 'react';

function Main() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https:/dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPicture(data.message);
        setLoading(false);
      });
  }, []);

  console.log(picture);

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div
          className="container mx-auto h-screen flex-col flex justify-end bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${picture})` }}
        >
          {/* TODO GET A PICTURE, PEXELS API */}
          {/* <img src={picture} alt="" /> */}
          <div
            className="container h-1/4 flex-row flex justify-between"
            // style={{ backgroundColor: 'grey' }}
          >
            <div className="h-3/4 w-1/4" style={{ backgroundColor: 'white' }}>
              <ContentLeft title="Chromecast" />
            </div>
            <div className="h-3/4 w-1/4" style={{ backgroundColor: 'white' }}>
              <ContentRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
