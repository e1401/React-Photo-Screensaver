import { useEffect, useState } from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import SampleImg from '../img/sample.jpg';
// TODO attribution

function Main() {
  const apiKey = '563492ad6f91700001000001fb904d7910e244fc8fb7260900855abc';

  const [picture, setPicture] = useState(null);
  const [author, setAuthor] = useState(null);
  const [photoTitle, setPhotoTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authorUrl, setAuthorUrl] = useState(null);
  //Average color state for left and right elements
  const [averageColor, setAverageColor] = useState('');

  //getRandom image from a non-radom Api
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min));
  }

  useEffect(() => {
    const interval = setInterval(() => {
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
        setPicture(data.photos[0].src.landscape);
        setAuthor(data.photos[0].photographer);
        setAverageColor(data.photos[0].avg_color);
        setPhotoTitle(data.photos[0].alt);
        setAuthorUrl(data.photos[0].photographer_url);
        setIsLoading(false);
      };
      loadData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container h-screen flex-col flex justify-end bg-no-repeat bg-cover bg-center"
      style={isLoading ? { backgroundColor: 'white' } : { backgroundImage: `url(${picture})` }}
    >
      {isLoading ? (
        <div
          className="container h-screen flex-col flex justify-end bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${SampleImg})` }}
        >
          <div className="flex justify-center items-center">
            <h2 className="text-3xl">Loading...</h2>
          </div>
        </div>
      ) : (
        <div className="container max-w-full min-h-max flex-row flex justify-between opacity-70">
          <div>
            <ContentLeft
              averageColor={averageColor}
              isLoading={isLoading}
              author={author}
              authorUrl={authorUrl}
              photoTitle={photoTitle}
            />
          </div>

          <ContentRight averageColor={averageColor} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}

export default Main;
