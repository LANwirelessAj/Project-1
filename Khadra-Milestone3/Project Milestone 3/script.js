// Quiz grading function for the HTTP knowledge quiz

function gradeQuiz() {
    let score = 0;

    // Read user answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelectorAll('input[name="q5"]:checked');

    // Question 1: HTTP/0.9
    if (q1 && q1.value === "0.9") {
        score++;
    }

    // Question 2: HTTP/1.1 persistent connections
    if (q2 && q2.value === "1.1") {
        score++;
    }

    // Question 3: HTTP/3 uses QUIC
    if (q3 && q3.value === "quic") {
        score++;
    }

    // Question 4: HTTP/2 introduced multiplexing
    if (q4 && q4.value === "2") {
        score++;
    }

    // Question 5: Multiplexing and Header Compression
    let q5Answers = Array.from(q5).map(x => x.value);
    if (
        q5Answers.includes("multiplexing") &&
        q5Answers.includes("header") &&
        !q5Answers.includes("plain")
    ) {
        score++;
    }

    // Display result
    const resultBox = document.getElementById("quizResult");
    resultBox.style.display = "block";

    if (score === 5) {
        resultBox.style.background = "#c2f2c2";
        resultBox.style.color = "#035703";
        resultBox.textContent = "Score: 5/5 — Excellent work!";
    } else {
        resultBox.style.background = "#ffe0e0";
        resultBox.style.color = "#7a0000";
        resultBox.textContent = "Score: " + score + "/5 — Review your notes and try again.";
    }
}