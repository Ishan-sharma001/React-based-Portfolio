import { useState, useEffect } from "react";
import "../home/style/ReviewsSection.css";

const reviews = [
  {
    name: "Aman Verma",
    review: "Amazing portfolio! Clean design and smooth animations.",
    image: "/images/a.jpg",
  },
  {
    name: "Sneha Patel",
    review: "Really impressive projects! The UI looks fantastic.",
    image: "/images/b.jpg",
  },
  {
    name: "Ravi Kumar",
    review: "Great work! I loved the interactive experience.",
    image: "/images/c.jpg",
  },
];

function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews">
      <h2>Reviews</h2>
      <div className="review-card">
        <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} />
        <p>"{reviews[currentIndex].review}"</p>
        <h3>- {reviews[currentIndex].name}</h3>
      </div>
    </section>
  );
}

export default ReviewsSection;
