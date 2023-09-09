function signUp() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const newUser = { email, password };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Signup successful. You can now log in.");
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Successful Login");
        window.location.href='index.html';
        
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

