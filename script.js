const newSiteUrl = 'https://www.mihailobont.ro';
const countdownDuration = 6;
let timeLeft = countdownDuration;

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = timeLeft;
        
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            try {
                window.location.href = newSiteUrl;
            } catch (e) {
                // If redirect fails, show the manual link
                document.getElementById('manual-redirect').style.display = 'block';
            }
        }
    }
}

// Start countdown when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
});