import { useEffect, useState } from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
// TODO attribution

function PexelMain() {
  const apiKey = '563492ad6f91700001000001fb904d7910e244fc8fb7260900855abc';

  const [pictures, setPictures] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://api.pexels.com/v1/curated?page=9&per_page=1', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: apiKey,
        },
      });

      const data = await response.json();
      console.log(data.photos[0].src);
      console.log(data.photos[0].photographer);
      setPictures(data.photos[0].src.landscape);
      setAuthor(data.photos[0].photographer);
    };
    loadData();
  }, []);

  console.log(pictures);

  return (
    <div
      className="container h-screen flex-col flex justify-end bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${pictures})` }}
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
          <ContentRight author={author} />
        </div>
      </div>
    </div>
  );
}

export default PexelMain;
