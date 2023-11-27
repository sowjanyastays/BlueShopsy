import React from 'react'
import './HomeComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'
import Products from '../../products.json'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

function HomeComponent() {
  return (
    <div className="home">
      {/* <HeaderComponent/> */}
    <div className="home_container">
      <div className='home_header'>
      <img
        className="home_banner"
        src="banner3.webp"
        alt="banner"
      />
      </div>

      <div className='home_content'>
        {
          Products.map((product) => <div key={product.id}>
            <ProductComponent
              pname={product.pname}
              price={product.price}
              image={product.image}
              id={product.id}
              rating={product.rating}
              description={product.description}
            />
            </div>)
        } 
      </div>      
    </div>
  </div>
  )
}

export default HomeComponent