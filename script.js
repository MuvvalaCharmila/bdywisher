document.querySelector("button").addEventListener("click", function () {
    const name = document.querySelector("input[type='text']").value;
    const dob = document.querySelector("input[type='date']").value;

    if (!name || !dob) {
        alert("Please enter both name and date of birth.");
        return;
    }

    const today = new Date();
    const birthDate = new Date(dob);

    if (
        today.getDate() === birthDate.getDate() &&
        today.getMonth() === birthDate.getMonth()
    ) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h1 style="font-size: 2.5rem; color: #ff4081;">🎉 Happy Birthday, ${name}! 🎂</h1>
                <p style="font-size: 1.5rem;">Wishing you a day filled with love and happiness! 💖</p>
            </div>
        `;
    } else {
        alert("Today is not your birthday 😅");
    }
});