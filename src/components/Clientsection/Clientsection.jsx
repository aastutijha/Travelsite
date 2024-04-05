import React from "react";
import './clientsection.css'

const Clientsection = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderFeedback = () => {
    const feedbacks = [
      {
        id: 1,
        name: "John Doe",
        comment: "Excellent service! The tour was well-organized and enjoyable.",
      },
      {
        id: 2,
        name: "Jane Smith",
        comment: "Great experience! The guides were knowledgeable and friendly.",
      },
      {
        id: 3,
        name: "Alice Johnson",
        comment: "Highly recommended! I had an amazing time exploring new places.",
      },
      {
        id: 4,
        name: "Rim Johnson",
        comment: "Outstanding service! The team went above and beyond to ensure a memorable experience.",
      },
     
    ];

    return (
      <div className="feedback-container">
        {feedbacks.map((feedback) => (
          <div className="feedback-box" key={feedback.id}>
            <p>{feedback.comment}</p>
            <span>- {feedback.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="clients-section" id="clients">
      <h2> Happy Customer </h2>
      <h3><u>See what our customers say about us</u></h3>
      {renderFeedback()}
    </div>
  );
};

export default Clientsection;