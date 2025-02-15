import React, { useState } from "react";
import gg from '../../component/assesst/gg.png';
import './home.css';
import Carousel from 'react-bootstrap-carousel'; 


export default function Home() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        { question: "How do I place an order for delivery?", answer: "Placing an order is easy! Visit our website, browse our menu, add items to your cart, and proceed to checkout. You can also call us directly to place your order." },
        { question: "Is there a delivery fee?", answer: "Yes, a small delivery fee may apply depending on your location." },
        { question: "How can I track my order?", answer: "You will receive a tracking link via email once your order is dispatched." },
    ];

    const burgerImages = [
        'https://fireflyburgers.com/wp-content/uploads/2024/03/kamakazi.png',
        'https://fireflyburgers.com/wp-content/uploads/2023/09/%D8%B3%D8%A8%D8%A4.png',
        'https://fireflyburgers.com/wp-content/uploads/2023/10/MYSTIC.png',
        'https://fireflyburgers.com/wp-content/uploads/2023/10/keto-beef.png'
    ];

    return (
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
                        <a href="./menu">
                 <button className="order-now">Order Now</button>
            </a>
            <a href="./menu">
             <button className="see-menu">See Menu</button>
    </a>

                        </div>
                        <div className="rating">
                            <img src={gg} alt="Google Rating" />
                            <span style={{ color: "white" }}>
                                4.8 <span style={{ color: "orangered" }}>★★★★★</span>
                            </span>
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
                    quality in every dish.
                </p>
                <div className="image-slider"> {/* Add a container for the slider */}
                    <Carousel
                        showArrows={true} // Show navigation arrows
                        showStatus={false} // Hide the status indicator (e.g., 1 of 3)
                        infiniteLoop={true} // Loop the carousel infinitely
                        autoPlay={true} // Automatically play the carousel
                        interval={3000} // Set the auto-play interval (in milliseconds)
                        dynamicHeight={false} // Important: set this to false to prevent layout issues
                        emulateTouch={true} // Enable touch support for mobile
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={33}
                    >
                        {burgerImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Burger ${index + 1}`} style={{width: 'auto', height: 'auto'}}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

                <div className="image-grid">
                    <img src="https://fireflyburgers.com/wp-content/uploads/2024/03/kamakazi.png" alt="Image 1" />
                    <img src="https://fireflyburgers.com/wp-content/uploads/2023/09/%D8%B3%D8%A8%D8%A4.png" alt="Image 2" />
                    <img src="https://fireflyburgers.com/wp-content/uploads/2023/10/MYSTIC.png" alt="Image 3" />
                    <img src="https://fireflyburgers.com/wp-content/uploads/2023/10/keto-beef.png" alt="Image 4" />
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" alt="Jane Doe" />
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

            {/* FAQ Section */}
            <div className="fcontainer">
                <h1 style={{ color: "white" }} id="h1id">
                    Frequently Asked Questions &amp; Answers
                </h1>
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <h2 style={{ color: "white" }}>{item.question}</h2>
                            <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p style={{ color: "white" }}>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
