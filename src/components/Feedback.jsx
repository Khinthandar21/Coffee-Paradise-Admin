// Report.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Feedback.module.css";
import StarRating from "./StarRating";
const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      comment:
        "Great service! The customer support was very helpful and responsive. I received my order earlier than expected.",
      rating: 5,
    },
    {
      id: 2,
      comment:
        "Good quality products. The items I purchased were of good quality, but there was a delay in delivery.",
      rating: 4,
    },
    {
      id: 3,
      comment:
        "Prompt delivery. I was pleasantly surprised by how quickly my order arrived. The packaging was secure and undamaged.",
      rating: 5,
    },
    {
      id: 4,
      comment:
        "Could improve packaging. While the product quality was good, the packaging could be better to prevent damage during transit.",
      rating: 3,
    },
    {
      id: 5,
      comment:
        "Easy to use website. The website interface was user-friendly, and I had no trouble finding what I needed.",
      rating: 4,
    },
    {
      id: 6,
      comment:
        "Fast response from support. The support team replied promptly to my inquiries and resolved my issue efficiently.",
      rating: 5,
    },
    {
      id: 7,
      comment:
        "Average experience overall. There were some issues with the order, but they were eventually resolved.",
      rating: 3,
    },
    {
      id: 8,
      comment:
        "Excellent customer service. The customer service team went above and beyond to assist me with my concerns.",
      rating: 5,
    },
    {
      id: 9,
      comment:
        "Product didn't meet expectations. I expected better quality considering the price. Disappointed with the purchase.",
      rating: 2,
    },
    {
      id: 10,
      comment:
        "Would purchase again. Despite minor issues, I would buy from this store again due to their excellent selection and prices.",
      rating: 4,
    },
    // Add more feedbacks as needed
  ];

  return (
    <div className={`container ${styles.container}`}>
      {/* Feedbacks section */}
      <div className={styles.feedbackContainer}>
        <h2 className="text-light text-center">User Feedbacks</h2>
        {feedbacks.length === 0 ? (
          <p>No feedbacks available</p>
        ) : (
          <div>
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className={styles.feedbackItem}>
                <p>{feedback.comment}</p>
                <StarRating rating={feedback.rating} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Link back to Orders page */}
      <Link to="/orders" className={styles.backLink}>
        Back to Orders
      </Link>
    </div>
  );
};

export default Feedback;
