const love_btns = document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
    love_btn.addEventListener('mousedown', (e) => {
        love_btn.style.background = '#fff';
        love_btn.style.color = '#E7273F';
        love_btn.querySelector('.text').innerHTML = '<span class="grey-text">Gửi đến:</span> Cô giáo của anh';

        createHearts(love_btn.querySelector('.icon-container'));
    });

    love_btn.addEventListener('mouseup', (e) => {
        love_btn.style.background = '#E7273F';
        love_btn.style.color = '#fff';
        love_btn.classList.add('after-text');
        love_btn.querySelector('.text').innerHTML = '<span>OK anh biết mà 😆! Nhắn tin cho anh biết nha, anh chờ đó! </span>';
    });
})

function createHearts(container) {
    // create 5 hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fa fa-heart"></i>';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 20 + 5 + 'px';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100)
    }
}


// title animation
var words = ['Chào em!', 'Sau khoảng thời gian gần tháng nhắn tin,', 'Anh nghĩ là chúng mình nên gặp nhau,', 'Có nhiều cái nhắn tin không thể nói ra hết được', 'Nếu em cũng thấy thích anh thì....', 'Thứ 7 tuần này mình gặp nhau như đã nói nhé ❔'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 90;
var wordflick = function () {
    const x = setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.title').text(part);
        if (offset >= words[i].length && i === words.length - 1) {
            clearInterval(x);
            $('#container').addClass("show");
        }
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

var flag = 1;
function miss() {
    var Bn = document.getElementById('noBtn');
    var sJs1 = Math.floor(Math.random() * 200);
    var sJs2 = Math.floor(Math.random() * 600);
    if (flag == 1) {
        Bn.style.top = '-' + sJs1 + 'px';
        Bn.style.left = sJs2 + 'px';
        flag = 2;
    } else if (flag == 2) {
        Bn.style.top = sJs1 + 'px';
        Bn.style.left = sJs2 + 'px';
        flag = 3;
    } else if (flag == 3) {
        Bn.style.top = 5 + 'px';
        Bn.style.left = 6 + 'px';
        flag = 4;
    } else if (flag == 4) {
        Bn.style.top = 5 + 'px';
        Bn.style.left = 0 + 'px';
        flag = 1;
    }
}

function never() {
    alert("hack a?");
}