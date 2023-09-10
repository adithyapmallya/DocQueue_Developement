function login() {
    window.location.href = "quiz.html";
}

function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var selectedValue = selectedOption.value;

        switch (selectedValue) {
            case "Fever":
                window.location.href = "fever_quiz.html";
                break;
            case "Body Pain":
                window.location.href = "body_pain_quiz.html";
                break;
            case "Diarrhea":
                window.location.href = "diarrhea_quiz.html";
                break;
            case "Vomiting":
                window.location.href = "vomiting_quiz.html";
                break;
            default:
                alert("Invalid option selected.");
        }
    } else {
        alert("Please select an option.");
    }
}
function submitAnswer() {
    window.location.href = "fever_quiz.html";
}
function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var selectedValue = selectedOption.value;

        switch (selectedValue) {
            case "Headache":
                window.location.href = "headache_quiz.html"; // Redirect to headache quiz
                break;
            // Add more cases for other options if needed
            default:
                alert("Invalid option selected.");
        }
    } else {
        alert("Please select an option.");
    }
}
function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var selectedValue = selectedOption.value;

        if (selectedValue === "Stress") {
            window.location.href = "stress_quiz.html"; // Redirect to stress quiz
        } else {
            alert("Invalid option selected.");
        }
    } else {
        alert("Please select an option.");
    }
}
function submitAnswer() {
    var selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');

    if (selectedOptions.length > 0) {
        var selectedValues = [];
        selectedOptions.forEach(function(option) {
            selectedValues.push(option.value);
        });

        // You can process the selected values here
        // For example, you can display a message or redirect to another page based on the selections

        // Example: Redirect to a result page
        window.location.href = "stress_quiz.html"; // Assuming you have a stress_result.html page

    } else {
        alert("Please select at least one option.");
    }
}
function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var selectedValue = selectedOption.value;

        switch (selectedValue) {
            case "Headaches":
                window.location.href = "submission_confirmation.html";
                break;
            case "Irritability":
                window.location.href = "submission_confirmation.html";
                break;
            case "Fatigue":
                window.location.href = "submission_confirmation.html";
                break;
            case "Increased Heart Rate":
                window.location.href = "submission_confirmation.html";
                break;
            default:
                alert("Invalid option selected.");
        }
    } else {
        alert("Please select an option.");
    }
}
