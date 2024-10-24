let randomNumber;
let attempts = 10; // 最大尝试次数
let score = 0;

// 获取元素
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitGuessButton = document.getElementById('submitGuess');
const restartButton = document.getElementById('restart');
const startGameButton = document.getElementById('startGame');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const gameArea = document.getElementById('gameArea');

// 开始游戏
startGameButton.addEventListener('click', () => {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('请输入有效的范围。最小值应小于最大值。');
        return;
    }
    
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // 在指定范围内生成随机数
    attempts = 10; // 重置尝试
    messageElement.textContent = `猜测一个 ${min} 到 ${max} 之间的数字。`;
    
    minInput.style.display = 'none';
    maxInput.style.display = 'none';
    startGameButton.style.display = 'none';
    gameArea.style.display = 'block';
});

// 提交猜测事件
submitGuessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts--;

    if (userGuess === randomNumber) {
        messageElement.textContent = `恭喜你！你猜对了！正确数字是 ${randomNumber}。`;
        score++;
        scoreElement.innerText = score;
        toggleButtons();
    } else if (attempts === 0) {
        messageElement.textContent = `游戏结束！正确数字是 ${randomNumber}。`;
        toggleButtons();
    } else {
        if (userGuess < randomNumber) {
            messageElement.textContent = `太小了！你还有 ${attempts} 次机会。`;
        } else {
            messageElement.textContent = `太大了！你还有 ${attempts} 次机会。`;
        }
    }
    guessInput.value = ''; // 清空输入框
});

// 切换按钮显示
function toggleButtons() {
    submitGuessButton.style.display = 'none';
    restartButton.style.display = 'inline-block';
}

// 重新开始游戏
restartButton.addEventListener('click', () => {
    minInput.value = '';
    maxInput.value = '';
    messageElement.textContent = '';
    guessInput.value = '';
    startGameButton.style.display = 'inline-block';
    gameArea.style.display = 'none';
});

// 初始化游戏分数
scoreElement.innerText = score;
