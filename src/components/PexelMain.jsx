import { useEffect, useState } from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
// TODO attribution

function PexelMain() {
  const apiKey = '563492ad6f91700001000001fb904d7910e244fc8fb7260900855abc';

  const [picture, setPicture] = useState(null);
  const [author, setAuthor] = useState(null);
  const [photoTitle, setPhotoTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //Average color state for left and right elements
  const [averageColor, setAverageColor] = useState(null);

  //getRandom image from a non-radom Api
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min));
  }

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${getRandomInt(1, 99)}&per_page=1`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: apiKey,
          },
        },
      );

      const data = await response.json();
      console.log(data);
      //   console.log(data.photos[0].src);
      //   console.log(data.photos[0].photographer);
      setPicture(data.photos[0].src.landscape);
      setAuthor(data.photos[0].photographer);
      setAverageColor(data.photos[0].avg_color);
      setPhotoTitle(data.photos[0].alt);
      setIsLoading(false);
      console.log(averageColor);
      console.log(photoTitle);
    };
    loadData();
  }, []);

  return (
    <div
      className="container h-screen flex-col flex justify-end bg-no-repeat bg-cover bg-center"
      // style={{ backgroundImage: `url(${picture})` }}
      style={
        isLoading ? { backgroundColor: `${averageColor}` } : { backgroundImage: `url(${picture})` }
      }
    >
      <div
        className="container h-1/4 flex-row flex justify-between"
        // style={{ backgroundColor: 'grey' }}
      >
        <div className="h-3/4 w-1/4" style={{ backgroundColor: `${averageColor}` }}>
          <ContentLeft author={author} photoTitle={photoTitle} />
        </div>
        <div className="h-3/4 w-1/4" style={{ backgroundColor: `${averageColor}` }}>
          <ContentRight />
        </div>
      </div>
    </div>
  );
}

export default PexelMain;
