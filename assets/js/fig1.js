let char = ['A', 'B', 'C', 'D', 'E', 'F'];

function changeChar() {

    let lastChar = char.pop();
    char.unshift(lastChar);

    $("section>div:nth-last-child(7)>h1").text(char[0]);
    $("section>div:nth-last-child(6)>h1").text(char[1]);
    $("section>div:nth-last-child(5)>h1").text(char[2]);
    $("section>div:nth-last-child(4)>h1").text(char[3]);
    $("section>div:nth-last-child(3)>h1").text(char[4]);
    $("section>div:nth-last-child(2)>h1").text(char[5]);
}

setInterval(changeChar, 800);