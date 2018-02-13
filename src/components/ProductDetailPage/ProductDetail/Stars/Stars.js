import React from 'react';

import styles from './Stars.scss';

const stars = props => {
  const starFilled = <i className="fas fa-star" />;
  const starEmpty = <i className="far fa-star" />;

  const ratingPercentage = `${+props.rating * 20}%`;

  return (
    <div className={styles.ratingStars}>
      <div className={styles.ratingStarsEmpty}>
        {starEmpty}
        {starEmpty}
        {starEmpty}
        {starEmpty}
        {starEmpty}
      </div>
      <div
        className={styles.ratingStarsFilled}
        style={{ width: ratingPercentage }}
      >
        {starFilled}
        {starFilled}
        {starFilled}
        {starFilled}
        {starFilled}
      </div>
    </div>
  );
};

export default stars;
