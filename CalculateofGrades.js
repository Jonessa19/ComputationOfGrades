// Compute Quizzes
function computeQuizzes() {
    const q1 = parseInt(document.getElementById("txtQuiz1").value) || 0;
    const q2 = parseInt(document.getElementById("txtQuiz2").value) || 0;
    const q3 = parseInt(document.getElementById("txtQuiz3").value) || 0;
    const rangeQ1 = parseInt(document.getElementById("qRange1").value) || 1;
    const rangeQ2 = parseInt(document.getElementById("qRange2").value) || 1;
    const rangeQ3 = parseInt(document.getElementById("qRange3").value) || 1;

    const totalScore = q1 + q2 + q3;
    const totalItems = rangeQ1 + rangeQ2 + rangeQ3;
    const totalQuizzes = (totalScore / totalItems) * 100;
    const weightedQuizzes = totalQuizzes * 0.2;

    document.getElementById("txtTotalQuizzes").value = totalQuizzes.toFixed(2);
    document.getElementById("chkQuiz").value = weightedQuizzes.toFixed(2);
}

// Compute Performance Tasks
function computePerformanceTasks() {
    const pt1 = parseInt(document.getElementById("txtPt1").value) || 0;
    const pt2 = parseInt(document.getElementById("txtPt2").value) || 0;
    const pt3 = parseInt(document.getElementById("txtPt3").value) || 0;
    const rangePt1 = parseInt(document.getElementById("ptRange1").value) || 1;
    const rangePt2 = parseInt(document.getElementById("ptRange2").value) || 1;
    const rangePt3 = parseInt(document.getElementById("ptRange3").value) || 1;

    const totalScore = pt1 + pt2 + pt3;
    const totalItems = rangePt1 + rangePt2 + rangePt3;
    const totalPerformance = (totalScore / totalItems) * 100;
    const weightedPerformance = totalPerformance * 0.2;

    document.getElementById("txtTotalPerformance").value = totalPerformance.toFixed(2);
    document.getElementById("chkTask").value = weightedPerformance.toFixed(2);
}

// Compute Exam
function computeExam() {
    const examScore = parseInt(document.getElementById("txtExam").value) || 0;
    const examRange = parseInt(document.getElementById("preRange").value) || 1;

    const examTotal = (examScore / examRange) * 100;
    const weightedExam = examTotal * 0.6;

    document.getElementById("txtTotalExam").value = examTotal.toFixed(2);
    document.getElementById("chkExam").value = weightedExam.toFixed(2);
}

// Compute Final Grade
function computeGrade() {
    const weightedQuizzes = parseFloat(document.getElementById("chkQuiz").value) || 0;
    const weightedPerformance = parseFloat(document.getElementById("chkTask").value) || 0;
    const weightedExam = parseFloat(document.getElementById("chkExam").value) || 0;

    const finalGrade = weightedQuizzes + weightedPerformance + weightedExam;

    document.getElementById("txtGrade").value = finalGrade.toFixed(2);
}