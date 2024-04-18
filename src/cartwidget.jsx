import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

function CartWidget({ count }) {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ marginLeft: '10px', position: 'relative', zIndex: 1 }} />
      {count > 0 && <Badge bg="danger" style={{ position: 'absolute', top: '-10px', right: '-10px', zIndex: 2 }}>{count}</Badge>}
    </div>
  );
}

export default CartWidget;

