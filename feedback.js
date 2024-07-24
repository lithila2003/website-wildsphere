// Validate the email format
function validateEmail(email) {
    const char = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
    return char.test(email);
}

function showPreview() {

    let isValid = true;// Set validation state to true

    // Retrieve and trim whitespaces from the user inputs

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const firstTime = document.querySelector('input[name="first_time"]:checked');
    const informative = document.querySelector('input[name="informative"]:checked');
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const recommend = document.querySelector('input[name="recommend"]:checked');
    const updates = document.getElementById('updates').value;
    const improvements = document.getElementById('improvements').value.trim();
    const questions = document.getElementById('questions').value.trim();

    // Validate the name input
    if (!name){
        isValid = false;
        document.getElementById('nameError').innerText = '* Name is required';

    }else{
        document.getElementById('nameError').innerText = '';
    }

    // Validate the email input
    if (!email){
        isValid = false;
        document.getElementById('emailError').innerText = '* Email is required';

    }else if (!validateEmail(email)){
        isValid = false;
        document.getElementById('emailError').innerText = '* Invalid email format';

    }else{
        document.getElementById('emailError').innerText = '';
    }


    // Validate the first time input
    if (!firstTime){
        isValid = false;
        document.getElementById('firstTimeError').innerText = '* Please select an option';

    }else{
        document.getElementById('firstTimeError').innerText = '';
    }


    // Validate the informative input
    if (!informative){
        isValid = false;
        document.getElementById('informativeError').innerText = '* Please select an option';

    }else{
        document.getElementById('informativeError').innerText = '';
    }


    // Validate the satisfaction level input
    if (!satisfaction){
        isValid = false;
        document.getElementById('satisfactionError').innerText = '* Please select a satisfaction level';

    }else{
        document.getElementById('satisfactionError').innerText = '';
    }


    // Validate the recomend input
    if (!recommend){
        isValid = false;
        document.getElementById('recommendError').innerText = '* Please select an option';

    }else{
        document.getElementById('recommendError').innerText = '';
    }


    // Validate the future updates input
    if (!updates){
        isValid = false;
        document.getElementById('updatesError').innerText = '* Please select an option';

    }else{
        document.getElementById('updatesError').innerText = '';
    }


    // Display the preview if all inputs are valid
    if (isValid){
        document.getElementById('previewName').innerText = name;
        document.getElementById('previewEmail').innerText = email;
        document.getElementById('previewFirstTime').innerText = firstTime ? firstTime.value : '';
        document.getElementById('previewInformative').innerText = informative ? informative.value : '';
        document.getElementById('previewImprovements').innerText = improvements;
        document.getElementById('previewSatisfaction').innerText = satisfaction ? satisfaction.value : '';
        document.getElementById('previewRecommend').innerText = recommend ? recommend.value : '';
        document.getElementById('previewUpdates').innerText = updates;
        document.getElementById('previewQuestions').innerText = questions;

        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('formPreview').style.display = 'block';
    }
}

// Edit the form and hide the preview
function editForm(){

    document.getElementById('formPreview').style.display = 'none';
    document.getElementById('feedbackForm').style.display = 'block';
}


// Hide the preview, submit the feedback and show the thank you message
function submitFeedback(){

    document.getElementById('formPreview').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    setTimeout(() => {redirectToForm();}, 5000);
}


// redirect to the home page
function redirectToForm(){

    window.location.href = './home.html';
}