function validateForm() {
    let isValid = true;
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name) {
        showError('nameError', 'Name cannot be empty');
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError('nameError', 'Invalid name format');
        isValid = false;
    }

    if (!address) {
        showError('addressError', 'Address cannot be empty');
        isValid = false;
    }

    if (!city) {
        showError('cityError', 'City cannot be empty');
        isValid = false;
    }

    if (!state) {
        showError('stateError', 'State cannot be empty');
        isValid = false;
    }

    if (!gender) {
        showError('genderError', 'Gender must be selected');
        isValid = false;
    }

    if (!mobile) {
        showError('mobileError', 'Mobile number cannot be empty');
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        showError('mobileError', 'Invalid mobile number');
        isValid = false;
    }

    if (!email) {
        showError('emailError', 'Email ID cannot be empty');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    if (isValid) {
        window.location.href = `welcome.html?name=${encodeURIComponent(name)}`;
        return false;
    }

    return false;
}

function showError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = '';
    }
}