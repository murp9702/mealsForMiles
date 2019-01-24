import React from 'react'
import PropTypes from 'prop-types'



const Pricing = ({ data }) => (
  <div className='pricing-table'>
    {data.map(price => (
      <div key={price.plan} className='column is-half-tablet is-variable' style={{border: '1px solid #eaecee'}}>
        <section className='section'>
          <h4 className='has-text-centered is-size-3 has-text-weight-semibold'>
            {price.plan}
          </h4>
          <h2 className='is-size-1 has-text-weight-bold has-text-primary has-text-centered'>
                        ${price.price}
          </h2>
          <p className='has-text-weight-semibold has-text-centered is-size-5'>{price.description}</p>
          <br></br>
          <br></br>
          <ul className='ul is-unstyled'>
            {price.items.map(item => (
              <li key={item} className='is-size-6 has-text-centered'>
                {item}
                <hr></hr>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}



{/*

const Pricing = ({ data }) => (
  <div class="pricing-table">
  <div class="pricing-plan">
    <div class="plan-header">Starter</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>20</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">20GB Storage</div>
      <div class="plan-item">100 Domains</div>
      <div class="plan-item">-</div>
      <div class="plan-item">-</div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth" disabled="disabled">Current plan</button>
    </div>
  </div>

  <div class="pricing-plan is-warning">
    <div class="plan-header">Startups</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>40</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">20GB Storage</div>
      <div class="plan-item">25 Domains</div>
      <div class="plan-item">1TB Bandwidth</div>
      <div class="plan-item">-</div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div class="pricing-plan is-active">
    <div class="plan-header">Growing Team</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>60</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">200GB Storage</div>
      <div class="plan-item">50 Domains</div>
      <div class="plan-item">1TB Bandwidth</div>
      <div class="plan-item">100 Email Boxes</div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div class="pricing-plan is-danger">
    <div class="plan-header">Enterprise</div>
    <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>100</span>/month</div>
    <div class="plan-items">
      <div class="plan-item">2TB Storage</div>
      <div class="plan-item">100 Domains</div>
      <div class="plan-item">1TB Bandwidth</div>
      <div class="plan-item">1000 Email Boxes</div>
    </div>
    <div class="plan-footer">
      <button class="button is-fullwidth">Choose</button>
    </div>
  </div>
</div>)

*/}

export default Pricing
