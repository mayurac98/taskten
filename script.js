// 1.Create a new file in the same directory as your index.html file and name it as script.js.
// 2. Copy all the JavaScript code from the <script> tag in index.html file.
// 3. In the script.js file and paste the JavaScript code into it.
// 4.Add a <script> tag with the src attribute pointing to the script.js file. Then browser will load and execute the JavaScript code from the script.js file.


function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

// 1.Add an onsubmit attribute to the form tag in index.html, calling the validatePassword() function when the form is submitted.
// 2.The validatePassword() function get the values of both password fields and compares them.
// 3.If the passwords do not match, it displays an alert message and returns false,then we are not able to submit the form.
// 4.If the passwords match, it returns true and this allows to submit the form, which redirects to submit.html page.
