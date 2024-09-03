import React from 'react'
import "../styles/subscribe.css";
function Subscribe() {
  return (
    <div className='subscribe'>
       <div class="subscribe__bg">
             <div class="subscribe__container">
                    <h2 class=" subscribe-title">Subscribe Our <br></br> Newsletter</h2>
                    <p class="subscribe-description">Subscribe to our newsletter and get a 
                         special 30% discount.
                    </p>

                    <form action="" class="subscribe__form">
                        <div class="input-container">
                            <input type="email" placeholder="Enter email" class="subscribe__input"></input>
                            <button type="submit" class="subscribe-button">
                            Subscribe
                            </button>
                        </div>
                    </form>
                
            </div>
        </div>
            
    </div>
  )
}

export default Subscribe
