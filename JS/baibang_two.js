
document.addEventListener('DOMContentLoaded', function () {
    // 默认显示第一个页面
    showPage('page1');
});

document.querySelectorAll('.bb-sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page'); // 获取目标页面ID
        showPage(targetPage); // 切换到目标页面
    });
});

function showPage(pageId) {
    // 切换页面显示
    document.querySelectorAll('.bb-page').forEach(page => {
        page.classList.toggle('active', page.id === pageId); // 显示目标页面
    });

    // 更新导航栏样式
    document.querySelectorAll('.bb-sidebar a').forEach(link => {
        const isActive = link.getAttribute('data-page') === pageId;
        link.classList.toggle('active', isActive); // 当前页面激活样式
        link.classList.toggle('inactive', !isActive); // 非当前页面灰色样式
    });
}


const data = {
    "pages": [
        {
            "id": "page1",
            "content": [
                { "src": "../img/two_1_1.jpg", "alt": "图片1", "link": "../HTML/there.html" },
                { "src": "../img/two_1_2.jpg", "alt": "图片1", "link": "../HTML/there.html" },
                { "src": "../img/two_1_3.jpg", "alt": "图片1", "link": "../HTML/there.html" },
                { "src": "../img/two_1_4.jpg", "alt": "图片1", "link": "../HTML/there.html" },
                { "src": "../img/two_1_4.jpg", "alt": "图片1", "link": "../HTML/there.html" },
                { "src": "../img/two_1_4.jpg", "alt": "图片1", "link": "../HTML/there.html" }
            ]
        },
        {
            "id": "page2",
            "content": [
                { "src": "../img/two_2_1.jpg", "alt": "图片1" },
                { "src": "../img/two_2_2.jpg", "alt": "图片1" },
                { "src": "../img/two_2_3.jpg", "alt": "图片1" },
                { "src": "../img/two_2_4.jpg", "alt": "图片1" },
                { "src": "../img/two_2_5.jpg", "alt": "图片1" },
                { "src": "../img/two_2_1.jpg", "alt": "图片1" },
                { "src": "../img/two_2_1.jpg", "alt": "图片1" },
                { "src": "../img/two_2_1.jpg", "alt": "图片1" }
            ]
        },
        {
            "id": "page3",
            "content": [
                { "src": "../img/two_1_3.jpg", "alt": "图片1" }
            ]
        },
        {
            "id": "page4",
            "content": [
                { "src": "../img/two_1_2.jpg", "alt": "图片1"}
            ]
        },
        {
            "id": "page5",
            "content": [
                { "src": "../img/two_1_1.jpg", "alt": "图片1" }
            ]
        },
        {
            "id": "page6",
            "content": [
                { "src": "../img/two_1_4.jpg", "alt": "图片1" }
            ]
        },
        {
            "id": "page7",
            "content": [
                { "src": "../img/two_2_1.jpg", "alt": "图片1" }
            ]
        }
    ]
};

const container = document.querySelector('.bb-content');

data.pages.forEach(page => {
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('bb-page');
    pageDiv.id = page.id;

    page.content.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('small-box');
        
        if (item.link) {
            const link = document.createElement('a');
            link.href = item.link;
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            link.appendChild(img);
            itemDiv.appendChild(link);
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            itemDiv.appendChild(img);
            if (item.text) {
                const text = document.createElement('h2');
                text.textContent = item.text;
                itemDiv.appendChild(text);
            }
        }

        pageDiv.appendChild(itemDiv);
    });

    container.appendChild(pageDiv);
});





