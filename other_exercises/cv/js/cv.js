window.onload = function () {
    const pageNum = document.querySelectorAll('.page').length;
    const start = 0;
    const end = -window.innerHeight * (pageNum - 1);
    const audio = new Audio('sound/4.mp3');
    const skillCard = document.querySelector('.skill-card');
    // 当前top值
    let currTop = 0;
    // 页面是否可以切换，防止连续切换，每次切换后等动画播放完再置为可切换状态
    let enable = true;

    const container = document.getElementById('container');

    document.body.addEventListener('keydown', function (e) {
        switch (e.code) {
            case 'ArrowDown':
                scrollPage('down');
                break;
            case 'ArrowUp':
                scrollPage('up');
        }
    });

    document.body.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            scrollPage('down');
        } else {
            scrollPage('up');
        }
    });

    function scrollPage(direct) {
        if (enable) {
            enable = false;
            if (direct === 'down' && currTop > end) {
                playMusic();
                setOffset(direct);
            }
            if (direct === 'up' && currTop < start) {
                playMusic();
                setOffset(direct);
            }
            setTimeout(function () { enable = true; }, 700);
        }
    }

    function playMusic() {
        audio.play();
    }

    function setOffset(direct) {
        switch (direct) {
            case 'down':
                currTop -= window.innerHeight;
                break;
            case 'up':
                currTop += window.innerHeight;
        }
        container.style.transform = 'translateY(' + currTop + 'px)';
        setAnimation();
    }

    // 切换到对应页面时，设置该页面动画
    function setAnimation() {
        switch (currTop) {
            case -window.innerHeight:
                skillCard.classList.add('slide-from-down');
                document.querySelectorAll('.skill-item').forEach(function (item, index) {
                    item.classList.add('slide-from-left');
                });
                break;
        }
    }
};