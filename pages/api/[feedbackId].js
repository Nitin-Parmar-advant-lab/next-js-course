import { buildFeedbackPath, extractFeedback } from "./feedback";

export default function handler(req, res) {
    // if (req.method === "DELETE") {
    // }
    const feedbackId = req.query.feedbackId;

    const filePath = buildFeedbackPath();
    const feedbackDate = extractFeedback(filePath);

    const selectedFeedback = feedbackDate.find(
        (feedback) => feedback.id === feedbackId,
    );
    res.status(200).json({ feedback: selectedFeedback });
}
