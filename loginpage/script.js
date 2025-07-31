// script.js
// MATRIX EFFECT
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let chars = "アァイイウエカキクケコサシスセソ한글테스트중你好世界مرحباABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#%&*!><^?";
chars = chars.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    columns = canvas.width / fontSize;
    drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;
});

// TEXT ANIMATION FOR "H4CK3R LOGIN"
const target = document.getElementById("animatedText");
const text = ".:: R1V3NSYX L0G1N ::.";
const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-=+<>?/\\|[]{}";
let currentIndex = 0;
let glitchCount = 10;
let glitchInterval = 100;
let delayBetweenLetters = 200;

function revealNextLetter() {
    let count = 0;
    let interval = setInterval(() => {
        if (count < glitchCount) {
            const tempText =
                text.substring(0, currentIndex) +
                glitchChars[Math.floor(Math.random() * glitchChars.length)] +
                " ".repeat(text.length - currentIndex - 1);
            target.textContent = tempText;
            count++;
        } else {
            clearInterval(interval);
            currentIndex++;
            target.textContent = text.substring(0, currentIndex);
            if (currentIndex < text.length) {
                setTimeout(revealNextLetter, delayBetweenLetters);
            }
        }
    }, glitchInterval);
}

revealNextLetter();

// FOOTER PROCESSING ANIMATION
const processingFooter = document.getElementById("processingFooter");
const processMessages = [
    "Initializing secure connection...",
    "Authenticating user credentials...",
    "Bypassing security protocols...",
    "Encrypting data streams...",
    "Accessing server logs...",
    "Scanning for vulnerabilities...",
    "Establishing backdoor access...",
    "Compiling kernel modules...",
    "Injecting malicious payloads...",
    "Deploying rootkit...",
    "Executing remote commands...",
    "Establishing persistent access...",
    "Data exfiltration in progress...",
    "Cleaning up traces...",
    "Anonymizing network traffic...",
    "Finalizing connection...",
    "Unauthorized access granted.",
    "System compromise complete.",
    "Welcome, R1V3NSYX."
];
let messageIndex = 0;
let charIndex = 0;
let currentMessage = "";
let isDeleting = false;
const typingSpeed = 70;
const deletingSpeed = 30;
const delayBetweenMessages = 1500;

function typeWriter() {
    const fullMessage = processMessages[messageIndex];

    if (isDeleting) {
        currentMessage = fullMessage.substring(0, charIndex - 1);
    } else {
        currentMessage = fullMessage.substring(0, charIndex + 1);
    }

    processingFooter.textContent = currentMessage + (charIndex === fullMessage.length && !isDeleting ? "_" : "");

    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentMessage === fullMessage) {
        typeSpeed = delayBetweenMessages;
        isDeleting = true;
    } else if (isDeleting && currentMessage === "") {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % processMessages.length;
    }

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    setTimeout(typeWriter, typeSpeed);
}

typeWriter();

// CUSTOM CURSOR EFFECT
const customCursor = document.getElementById("customCursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const delay = 0.1; // Nilai antara 0.0 - 1.0 (semakin besar semakin lambat/delay)

// Ganti karakter kursor di sini
const cursorCharacters = ['>', '_', '|', '█', '$'];
let currentCursorCharIndex = 0;
const cursorBlinkInterval = 200; // Milliseconds

// Inisialisasi karakter kursor
customCursor.textContent = cursorCharacters[currentCursorCharIndex];

// Animasi kedip kursor
setInterval(() => {
    currentCursorCharIndex = (currentCursorCharIndex + 1) % cursorCharacters.length;
    customCursor.textContent = cursorCharacters[currentCursorCharIndex];
}, cursorBlinkInterval);


document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    customCursor.style.left = cursorX + "px";
    customCursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Sembunyikan kursor saat mouse keluar dari window
document.addEventListener('mouseleave', () => {
    customCursor.classList.add('hidden');
});

// Tampilkan kursor saat mouse masuk ke window
document.addEventListener('mouseenter', () => {
    customCursor.classList.remove('hidden');
});
