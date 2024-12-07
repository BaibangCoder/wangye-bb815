// 监听表单提交事件
document.querySelector('.my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;

    // 验证手机号和密码是否为空
    if (!phone || !password) {
        alert('手机号和密码不能为空');
        return;
    }

    // 验证手机号格式
    const phoneRegex = /^[1][3-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        alert('请输入有效的手机号');
        return;
    }


    // 在按钮点击时跳转到 index.html
    window.location.href = '../index.html';  // 跳转到同目录下的 index.html

    // 表单提交成功的处理
    alert('登录成功');
});


document.querySelector('.my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;

    // 验证手机号和密码是否为空
    if (!phone || !password) {
        return;
    }

    // 验证手机号格式
    const phoneRegex = /^[1][3-9][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        return;
    }


    // 在按钮点击时跳转到 index.html
    window.location.href = '../index.html';  // 跳转到同目录下的 index.html
});


// 获取勾选框和登录按钮
const checkbox = document.getElementById('agreement-checkbox');
const loginButton = document.getElementById('login-btn');

// 监听勾选框的变化
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        // 勾选协议后，启用登录按钮并改变颜色
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "#007bff";  // 改为蓝色
        loginButton.style.opacity = 1;  // 恢复透明度
    } else {
        // 没有勾选协议时，禁用登录按钮并恢复浅蓝色
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "#a2c6f7";  // 浅蓝色
        loginButton.style.opacity = 0.7;  // 设置透明度
    }
});

