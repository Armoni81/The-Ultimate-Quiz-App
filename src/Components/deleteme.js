const questions = [
    "question 1?",
    "question 2?",
    "question 3?"
];
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [answeredQuestionIndexes, setAnsweredQuestionIndexes] = useState([0]);
const getNextQuestion = function() {
    if (answeredQuestionIndexes.length === questions.length) {
        setAnsweredQuestionIndexes([0]);
        setCurrentQuestionIndex(0);
    }
    let nextQuestionIndex = _.random(questions.length-1)
    while (answeredQuestionsIndex.includes(nextQuestionIndex) && answeredQuestionIndexes.length !== questions.length) {
        nextQuestionIndex = _.random(questions.length-1)
    }
    setCurrentQuestionIndex(nextQuestionIndex);
}