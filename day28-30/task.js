const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net', 'dces.cn'];

window.addEventListener('load', function () {
    const input = document.getElementById('email-input');
    const minder = document.getElementById('email-sug-wrapper');
    const lis = minder.children;

    let currIndex = -1;

    input.addEventListener('input', function () {
        const userInput = getInputVal();
        if (userInput.length > 0) {
            clearMinder();
            linkPostfix(userInput);
            showMinderBox();
        } else {
            clearMinder();
            hideMinderBox();
        }
    });

    minder.addEventListener('click', function (e) {
        input.value = e.target.innerHTML;
        clearMinder();
    });

    document.body.addEventListener('keydown', function (e) {
        console.log(e.code);
        switch (e.code) {
            case 'Escape':
                input.value = '';
                clearMinder();
                break;
            case 'ArrowUp':
                // currIndex > 0 则减1
                if (currIndex > 0) {
                    // 取消激活之前的li
                    inactivateLi();
                    currIndex--;
                    // 激活对应li
                    activateLi();
                }
                break;
            case 'ArrowDown':
                // 没有超过lis长度则加1
                if (currIndex < lis.length - 1) {
                    // 取消激活之前的li
                    inactivateLi();
                    currIndex++;
                    // 激活对应li
                    activateLi();
                }
                break;
            case 'Enter':
                if (currIndex > -1 && currIndex < lis.length) {
                    input.value = lis[currIndex].innerHTML;
                    clearMinder();
                }
        }
    });

    // 激活对应li
    function activateLi() {
        if (currIndex > -1 && currIndex < lis.length) {
            console.log(lis[currIndex]);
            lis[currIndex].classList.add('active');
        }
    }

    // 取消激活之前的li
    function inactivateLi() {
        if (currIndex > -1 && currIndex < lis.length) {
            console.log(lis[currIndex]);
            lis[currIndex].classList.remove('active');
        }
    }

    // 获取输入
    function getInputVal() {
        return input.value.trim();
    }

    // 清空提示
    function clearMinder() {
        minder.innerHTML = '';
        hideMinderBox();
        currIndex = -1;
        console.log(lis);
    }

    // 拼接邮箱提示，并创建节点插入提示框
    function linkPostfix(userInput) {
        let html = '';
        let before = userInput, after = '';
        if (userInput.indexOf('@') !== -1) {
            before = userInput.split('@')[0];
            after = userInput.split('@')[1];
        }
        if (after !== '') {
            postfixList.forEach(function (curr) {
                if (curr.indexOf(after) === 0) {
                    html += '<li class="tip">' + before + '@' + curr + '</li>';
                }
            });
        }
        if (html === '') {
            postfixList.forEach(function (curr) {
                html += '<li class="tip">' + before + '@' + curr + '</li>';
            });
        }
        minder.innerHTML = html;
        console.log(lis);
    }

    // 显示ul
    function showMinderBox() {
        minder.classList.add('minder');
    }

    // 隐藏ul
    function hideMinderBox() {
        minder.classList.remove('minder');
    }
});