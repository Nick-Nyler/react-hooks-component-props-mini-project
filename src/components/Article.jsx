import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  const defaultDate = "January 1, 1970";
  let readTimeDisplay = '';

    if (minutesToRead) {
        if (minutesToRead < 30) {
            const coffeeCups = Math.ceil(minutesToRead / 5);
            readTimeDisplay = '☕️'.repeat(coffeeCups) + ` ${minutesToRead} min read`;
        } else {
            const bentoBoxes = Math.ceil(minutesToRead / 10);
            readTimeDisplay = '🍱'.repeat(bentoBoxes) + ` ${minutesToRead} min read`;
        }
    }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        Date: {date || defaultDate}
        {readTimeDisplay && <>, {readTimeDisplay}</>}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
