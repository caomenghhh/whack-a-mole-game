let score = 0;
let timeLeft = 30;
let currentMole = null;

// 音效
const whackSound = new Audio('background.mp3'); // 点击音效
const backgroundMusic = new Audio('background1.mp3'); // 背景音乐

// 开始游戏
function startGame() {
    backgroundMusic.loop = true; // 循环播放背景音乐
    backgroundMusic.play();

    // 更新地鼠位置
    setInterval(updateMole, 1000);

    // 倒计时
    const timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('时间到！');
            window.location.reload();
        }
    }, 1000);
}

// 更新地鼠位置
function updateMole() {
    if (currentMole) currentMole.classList.remove('mole');
    const holes = document.querySelectorAll('.hole');
    currentMole = holes[Math.floor(Math.random() * holes.length)];
    currentMole.classList.add('mole');
}

// 点击事件
document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole === currentMole) {
            score++;
            document.getElementById('score').textContent = score;
            whackSound.play(); // 播放点击音效
        }
    });
});

// 启动游戏
startGame();