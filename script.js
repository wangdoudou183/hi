let randomNumber = Math.floor(Math.random() * 100) + 1; // 生成 1 到 100 的随机数
let attempts = 10; // 最大尝试次数
let score = 0;

// 获取元素
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitGuessButton = document.getElementById('submitGuess');
const restartButton = document.getElementById('restart');

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
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    messageElement.textContent = '';
    guessInput.value = '';
    submitGuessButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
});

// 初始化游戏
scoreElement.innerText = score;
