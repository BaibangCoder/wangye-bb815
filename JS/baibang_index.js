



// document.querySelectorAll('#fixed li').forEach(item => {
//     item.addEventListener('click', function() {
//         // Remove active class from all items
//         document.querySelectorAll('#fixed li').forEach(li => li.classList.remove('active'));
//         // Add active class to the clicked item
//         this.classList.add('active');
//     });
// });

// 导航图片切换
let currentIndex = 0; // 当前显示的图片索引
const images = document.querySelectorAll('.carousel-image'); // 获取所有图片
const totalImages = images.length; // 获取图片总数

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex >= totalImages) {
        currentIndex = 0; // 如果超出范围，则回到第一个图片
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1; // 如果小于0，则回到最后一个图片
    }
    
    // 移动轮播容器，展示当前图片
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}



// 确保滑动目录在顶部盒子下面
window.addEventListener('scroll', function () {
    var catalog = document.getElementById('bb-catalog');
    var topBox = document.querySelector('.top-box'); // 假设顶部盒子有 class "top-box"
    
    // 获取顶部盒子的高度
    var topBoxHeight = topBox.offsetHeight;

    // 检查页面滚动的距离
    if (window.scrollY >= topBoxHeight) {
        catalog.style.position = 'fixed';
        catalog.style.top = '0';
        catalog.style.zIndex = '999';
    } else {
        catalog.style.position = 'static';
        catalog.style.top = 'initial';
    }
});



// JSON实现最下面的图片展示


const tu_images = [
    { "src": "./img/kapian_1.jpg", "alt": "Image 1" },
    { "src": "./img/kapian_2.jpg", "alt": "Image 2" },
    { "src": "./img/kapian_3.jpg", "alt": "Image 1" },
    { "src": "./img/kapian_4.jpg", "alt": "Image 2" },
    { "src": "./img/kapian_5.jpg", "alt": "Image 1" },
    { "src": "./img/kapian_6.jpg", "alt": "Image 2" },
    { "src": "./img/kapian_7.jpg", "alt": "Image 1" },
    { "src": "./img/kapian_8.jpg", "alt": "Image 2" }
];

const container = document.getElementById('bb-content');

for (let i = 0; i < tu_images.length; i += 2) {
    // Create a div for each image pair (left-box and right-box)
    const leftBox = document.createElement('div');
    leftBox.className = 'box left-box';
    const leftImg = document.createElement('img');
    leftImg.src = tu_images[i].src; // Use image i for left box
    leftImg.alt = tu_images[i].alt;
    leftBox.appendChild(leftImg);

    // Ensure rightBox has the next image (i + 1)
    const rightBox = document.createElement('div');
    rightBox.className = 'box right-box';
    const rightImg = document.createElement('img');
    
    // Check if i + 1 is within bounds to avoid errors
    if (i + 1 < tu_images.length) {
        rightImg.src = tu_images[i + 1].src; // Use image i + 1 for right box
        rightImg.alt = tu_images[i + 1].alt;
    }
    rightBox.appendChild(rightImg);

    // Append to container
    container.appendChild(leftBox);
    container.appendChild(rightBox);
}



const navItems = [
    { "src": "./img/daohang_1.jpg", "alt": "Image 1", "text": "二手房", "link": "#" },
    { "src": "./img/daohang_2.jpg", "alt": "Image 2", "text": "新房", "link": "#" },
    { "src": "./img/daohang_3.jpg", "alt": "Image 3", "text": "租房", "link": "#" },
    { "src": "./img/daohang_4.jpg", "alt": "Image 4", "text": "卖房", "link": "#" },
    { "src": "./img/daohang_5.jpg", "alt": "Image 5", "text": "查成交", "link": "#" },
    { "src": "./img/daohang_6.jpg", "alt": "Image 6", "text": "房贷计算", "link": "#" },
    { "src": "./img/daohang_7.jpg", "alt": "Image 7", "text": "找经济人", "link": "#" },
    { "src": "./img/daohang_8.jpg", "alt": "Image 8", "text": "商办买卖", "link": "#" },
    { "src": "./img/daohang_9.jpg", "alt": "Image 9", "text": "购房知识", "link": "./HTML/two.html" },
    { "src": "./img/daohang_10.jpg", "alt": "Image 10", "text": "商办租凭", "link": "#" }
];

const container2 = document.getElementById('upper-nav');

navItems.forEach(item => {
    // Create the small-box container2
    const box = document.createElement('div');
    box.className = 'small-box';

    // Create the anchor element for the link
    const anchor = document.createElement('a');
    anchor.href = item.link;

    // Create the image element
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    // Create the text element
    const text = document.createElement('p');
    text.textContent = item.text;

    // Append the image and text to the anchor
    anchor.appendChild(img);
    anchor.appendChild(text);

    // Append the anchor to the box
    box.appendChild(anchor);

    // Append the box to the container
    container2.appendChild(box);
});


























