import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard({item}) {
  if (item.state === 'removed') {
    return null;
  }

  const {url, MainImage, title, currency_code = '', price = '', quantity = 0} = item;
  const shortTitle = title?.length > 49 ? title.slice(0, 50) + '...' : title;

  let cost;
  if (['USD', 'EUR'].includes(currency_code)) {
    cost = currency_code === 'USD' ? `$${price}` : `€${price}`;
  } else {
    cost = `${price} ${currency_code}`;
  }

  let quantityClass = '';
  if (quantity) {
    if (quantity <= 10) {
      quantityClass = 'low';
    } else if (quantity <= 20) {
      quantityClass = 'medium';
    } else {
      quantityClass = 'high';
    }
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={shortTitle}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{cost}</p>
        <p className={`item-quantity level-${quantityClass}`}>{quantity} left</p>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired
}