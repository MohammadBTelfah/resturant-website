import React from "react";
import './home.css';
export default function Home() {
    return(
        <>
        <div className="hero-section">
          <div className="overlay">
            <div className="content">
              <h1 id="hs">
                MOT FOOD <span className="highlight">DELIVERED TO YOUR DOORSTEP</span>
              </h1>
              <p style={{ color: "white" }}>
                Experience the flavors of our signature dishes, made with love and
                fresh ingredients without leaving your doorstep.
              </p>
              <div className="buttons">
                <a href="./menu.html">
                  <button className="order-now">Order Now</button>
                </a>
                <a href="./menu.html">
                  <button className="see-menu">See Menu</button>
                </a>
              </div>
              <div className="rating">
                <img src="/gg.png" alt="Google Rating" />
                <span style={{ color: "white" }}>
                  4.8 <span style={{ color: "orangered" }}>★★★★★</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tcontainer">
          <h1 id="tts">
            Who We Are &amp; <span style={{ color: "orangered" }}>What We Do</span>
          </h1>
          <p id="mnb">
            MOT FOOD offers a vibrant and delicious culinary experience, showcasing
            the freshest ingredients and innovative cooking techniques. We're
            committed to sourcing locally whenever possible, ensuring the highest
            quality in every dish. From our mouthwatering appetizers to our
            unforgettable entrees, MOT FOOD is your destination for a truly memorable
            meal.
          </p>
          <div className="image-grid">
            <img
              src="https://fireflyburgers.com/wp-content/uploads/2024/03/kamakazi.png"
              alt="Image 1"
            />
            <img
              src="https://fireflyburgers.com/wp-content/uploads/2023/09/%D8%B3%D8%A8%D8%A4.png"
              alt="Image 2"
            />
            <img
              src="https://fireflyburgers.com/wp-content/uploads/2023/10/MYSTIC.png"
              alt="Image 3"
            />
            <img
              src="https://fireflyburgers.com/wp-content/uploads/2023/10/keto-beef.png"
              alt="Image 4"
            />
          </div>
        </div>
        <div className="mcontainer">
          <h1 style={{ color: "orangered" }}>
            <span style={{ color: "white" }}>What</span> Customers Say
          </h1>
          <p id="moha">Read testimonials from our satisfied customers</p>
          <div className="testimonials">
            <div className="testimonial">
              <p style={{ color: "black" }}>
                "The food here is absolutely amazing! I keep coming back for more.
                Highly recommended!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                  alt="Jane Doe"
                />
                <div className="testimonial-info">
                  <h3>Jane Doe</h3>
                  <p>Food Critic</p>
                </div>
              </div>
              <div className="rating">
                <span>5.0</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
            <div className="testimonial">
              <p style={{ color: "black" }}>
                "I loved everything I tasted and all I can say is that you have to go
                taste everything for yourself. The MOT FOOD really took the time to
                curate an experience"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                  alt="Jane Doe"
                />
                <div className="testimonial-info">
                  <h3>Jane Doe</h3>
                  <p>Food Critic</p>
                </div>
              </div>
              <div className="rating">
                <span>5.0</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fcontainer">
          <h1 style={{ color: "white" }} id="h1id">
            Frequently Asked Questions &amp; Answers
          </h1>
          <div className="faq-item">
            <div className="faq-question">
              <h2 style={{ color: "white" }}>
                How do I place an order for delivery?
              </h2>
              <span className="faq-icon">-</span>
            </div>
            <div className="faq-answer">
              <p style={{ color: "white" }}>
                Placing an order is easy! Visit our website, browse our menu, add
                items to your cart, and proceed to checkout. You can also call us
                directly to place your order.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h2 style={{ color: "white" }}>Is there a delivery fee?</h2>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p style={{ color: "white" }}>Answer about delivery fee goes here.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h2 style={{ color: "white" }}>How Can I track my order?</h2>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p style={{ color: "white" }}>Answer about order tracking goes here.</p>
            </div>
          </div>
        </div>
      </>
      
    )
}