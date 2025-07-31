<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>.:: R1V3NSYX L0G1N ::.</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="matrix">
        <canvas id="matrixCanvas"></canvas>
    </div>

    <div class="terminal-box">
        <h2 id="animatedText">_</h2>
        <form method="POST" onsubmit="document.getElementById('beep').play(); return false;">
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">ACCESS SYSTEMS</button>
        </form>
        <div class="footer" id="processingFooter"></div>
    </div>

    <div class="custom-cursor" id="customCursor"></div>

    <audio id="beep" src="https://cdn.pixabay.com/download/audio/2023/06/03/audio_5f24df21d5.mp3?filename=cyber-beep-146149.mp3"></audio>

    <script src="script.js"></script>
</body>
</html>
