import { useRef, useState } from "react";

function HomePage() {
    const email = useRef();
    const feedback = useRef();
    const [feedbackItems, setFeedbackItems] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const enteredEmail = email.current.value;
        const enteredFeedback = feedback.current.value;

        const reqBody = { email: enteredEmail, text: enteredFeedback };

        fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    function loadFeedbackHandler() {
        fetch("/api/feedback")
            .then((response) => response.json())
            .then((data) => {
                setFeedbackItems(data.feedback);
            });
    }

    return (
        <div>
            <h1>The Home Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable htmlFor="email">Your Email Address</lable>
                    <input type="email" id="email" ref={email} />
                </div>
                <div>
                    <lable htmlFor="feedback">Your Feedback</lable>
                    <textarea rows="5" id="feedback" ref={feedback} />
                </div>
                <button>Send feedback</button>
            </form>
            <hr />
            <button onClick={loadFeedbackHandler}>Load feedback</button>
            <ul>
                {feedbackItems.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
