body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

.contact-info {
    margin-bottom: 10px;
    font-size: 18px;
}

.contact-info a {
    color: #007bff; /* 蓝色链接 */
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}

h1 {
    margin-bottom: 20px;
}

.score {
    font-size: 24px;
    margin-bottom: 20px;
}

.box {
    width: 100px; /* 方块的宽度 */
    height: 100px; /* 方块的高度 */
    background-color: #007bff; /* 方块颜色 */
    position: absolute; /* 使方块绝对定位 */
    border-radius: 10px; /* 圆角 */
    display: none; /* 初始隐藏 */
    cursor: pointer; /* 鼠标指针样式 */
}
