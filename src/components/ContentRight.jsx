import Clock from './Clock';

function ContentRight({ author }) {
  return (
    <div>
      <Clock />
      <p
        className="pt-6
      "
      >
        Author: {author}
      </p>
    </div>
  );
}

export default ContentRight;
