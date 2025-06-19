const toggle = document.getElementById('theme-toggle');
function setThemeFromStorage() {
    const savedTheme = localStorage.getItem('agnes-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (toggle) toggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        if (toggle) toggle.textContent = '🌙';
    }
}
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('agnes-theme', isDark ? 'dark' : 'light');
    });
}
window.addEventListener('DOMContentLoaded', setThemeFromStorage);

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    event.target.reset();
    return false;
}
function isFakeEmail(email) {
    const fakePatterns = [
        /^(test|example|fake)[0-9\-]*@/i,
        /@(mailinator|tempmail|10minutemail|guerrillamail)\./i,
        /^.+@.+\.invalid$/i
    ];
    return fakePatterns.some(pattern => pattern.test(email));
}