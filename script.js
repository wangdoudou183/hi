const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 蛇和食物的初始化
let snake = [{ x: 10, y: 10 }];
let food = {};
let dx = 10; // 水平方向速度
let dy = 0; // 垂直方向速度
let score = 0;

// 创建食物
function createFood() {
    food.x = Math.floor(Math.random() * (canvas.width / 10)) * 10;
    food.y = Math.floor(Math.random() * (canvas.height / 10)) * 10;
}

// 绘制蛇和食物
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制蛇
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'green' : 'lightgreen'; // 蛇头和身体颜色不同
        ctx.fillRect(segment.x, segment.y, 10, 10);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(segment.x, segment.y, 10, 10);
    });

    // 绘制食物
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);
}

// 移动蛇
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    
    // 检查是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        score++;
        createFood(); // 重新生成食物
    } else {
        snake.pop(); // 移除蛇尾
    }
    
    snake.unshift(head); // 添加新头部
}

// 检查游戏结束
function checkGameOver() {
    const head = snake[0];
    // 撞墙
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    // 撞到自身
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// 游戏主循环
function gameLoop() {
    if (checkGameOver()) {
        alert(`游戏结束！你的得分: ${score}`);
        document.location.reload(); // 重新加载页面
        return;
    }
    
    moveSnake();
    draw();
}

// 监听键盘事件
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -10;
    } else if (event.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = 10;
    } else if (event.key === 'ArrowLeft' && dx === 0) {
        dx = -10;
        dy = 0;
    } else if (event.key === 'ArrowRight' && dx === 0) {
        dx = 10;
        dy = 0;
    }
});

// 初始化游戏
createFood();
setInterval(gameLoop, 100); // 每100毫秒更新一次
