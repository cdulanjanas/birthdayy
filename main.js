// Set the exact target date and time - Sadu's birthday at midnight
const targetDate = new Date("2025-06-07T00:00:00");

// Countdown Timer using current date provided by user
function updateCountdown() {
    // UPDATED: Current time: 2025-06-06 14:00:29 UTC (as provided by user)
    const now = new Date();
    const timeLeft = targetDate - now;
    
    // If it's already past the birthday
    if (timeLeft <= 0) {
        document.getElementById("countdown-message").style.display = "none";
        document.getElementById("birthday-message").style.display = "block";
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        
        // Add celebration effects
        document.querySelectorAll(".countdown-box").forEach(box => {
            box.style.background = "rgba(255, 128, 171, 0.3)";
            box.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 128, 171, 0.7)";
        });
        
        // ADDED: Show the heart button when countdown reaches zero
        document.querySelector(".heart-button-container").style.display = "flex";
        document.querySelector(".heart-button-container").classList.add("show-heart-button");
        
        // Add extra celebration animations when birthday arrives
        celebrateBirthday();
        
        return;
    }
    
    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update the display with leading zeros
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    
    // Add pulse effect when seconds change
    const secondsElement = document.getElementById("seconds");
    secondsElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        secondsElement.style.transform = "scale(1)";
    }, 100);
}

// Create dynamic floating hearts
function createFloatingHeart() {
    const container = document.querySelector('.floating-hearts');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    // Random size between 1.0 and 2.5rem
    const size = (1 + Math.random() * 1.5) + 'rem';
    heart.style.fontSize = size;
    
    // Random position
    const startPositionX = Math.random() * 100;
    heart.style.left = startPositionX + 'vw';
    heart.style.bottom = '-20px';
    
    // Random rotation
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    // Random animation duration between 10 and 20 seconds
    const duration = 10 + Math.random() * 10;
    heart.style.animationDuration = duration + 's';
    
    // Random horizontal movement range
    const moveX = (Math.random() * 100 - 50) + 'px';
    heart.style.setProperty('--move-x', moveX);
    
    // Set content
    heart.innerHTML = "❤️";
    
    container.appendChild(heart);
    
    // Remove the heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Function to add extra animations on birthday
function celebrateBirthday() {
    // Create a bunch of animated confetti elements
    const confettiCount = 100;
    const container = document.querySelector('.background-container');
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        container.appendChild(confetti);
    }
    
    // Add party hats animation
    document.querySelectorAll('.party-hat').forEach(hat => {
        hat.style.animation = 'birthday-hat 5s ease-in-out infinite';
    });
}

// Create shooting stars periodically
function createShootingStar() {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random position and angle
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const angle = Math.random() * 45;
    
    star.style.left = startX + 'vw';
    star.style.top = startY + 'vh';
    star.style.transform = `rotate(${angle}deg)`;
    
    shootingStarsContainer.appendChild(star);
    
    // Remove after animation completes
    setTimeout(() => {
        star.remove();
    }, 6000);
}

// Create hearts and shooting stars periodically
setInterval(createFloatingHeart, 300); // Create a heart every 300ms
setInterval(createShootingStar, 4000); // Create a shooting star every 4 seconds

// Initial calculation - using updated time: about 10 hours remaining
// Call the function every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Add CSS for dynamic elements
const style = document.createElement('style');
style.textContent = `
    .shooting-star {
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.7);
        animation: shoot 6s infinite linear;
    }
    
    @keyframes shoot {
        0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        20% {
            transform: translate(400px, 200px) scale(1);
            opacity: 0;
        }
        100% {
            transform: translate(400px, 200px) scale(1);
            opacity: 0;
        }
    }
    
    .floating-heart {
        position: absolute;
        color: #ff4081;
        filter: drop-shadow(0 0 5px rgba(255, 64, 129, 0.7));
        animation: float-up var(--duration, 15s) linear forwards;
        opacity: 0;
    }
    
    @keyframes float-up {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) translateX(var(--move-x, 50px)) rotate(360deg) scale(1);
            opacity: 0;
        }
    }
    
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        top: -10px;
        opacity: 0;
        animation: confetti-fall 5s ease-in-out infinite;
    }
    
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes birthday-hat {
        0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.8;
        }
        25% {
            transform: translateY(-50px) rotate(15deg) scale(1.2);
            opacity: 1;
        }
        50% {
            transform: translateY(0) rotate(-15deg) scale(1.5);
            opacity: 0.8;
        }
        75% {
            transform: translateY(-30px) rotate(15deg) scale(1.2);
            opacity: 1;
        }
    }
    
    /* Added animation for heart button appearance */
    @keyframes heart-button-appear {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .show-heart-button {
        animation: heart-button-appear 1.5s forwards;
    }
`;

document.head.appendChild(style);

// Rest of the 3D animation code remains the same as before
// ... (3D heart animation code continues as before)
const surpriseSection = document.getElementById("surprise-section");

// Current date and time
const now = new Date();

// Target time: 00:00 on 07-06-2025
const showTime = new Date("2025-06-06T00:00:00");

// Show section only if current time is AFTER the target time
if (now >= showTime) {
    surpriseSection.classList.remove("hidden");
}
