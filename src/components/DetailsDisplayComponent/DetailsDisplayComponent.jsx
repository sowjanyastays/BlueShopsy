import React from 'react'
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import { useStateValue } from '../../StateProvider'

function DetailsDisplayComponent() {
    const [{details},dispatch] = useStateValue();
  return (
    <React.Fragment>
        <div className='display_details'>
        {
          details.map(product =>(
            <DetailsComponent
              id={product.id}
              pname={product.pname}
              price={product.price}
              image={product.image}
              rating={product.rating}
              description={product.description}
            />
          ))
        }
        </div>
    </React.Fragment>
  )
}

export default DetailsDisplayComponent