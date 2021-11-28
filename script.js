let questions = document.getElementById('questions'),
    rateYourself = document.getElementById('rate-yourself'),
    finish = document.getElementById('finish');

let page = localStorage.getItem('page');
console.log(page);
switch (page) {
    case null:
        questions.classList.remove('none-active');
        questions.classList.add('active');
        break;
    case 'rateYourself':
        rateYourself.classList.remove('none-active')
        rateYourself.classList.add('active')
        break;
    case 'finish':
        finish.classList.remove('none-active')
        finish.classList.add('active')
        break;
}

document.getElementById('send').addEventListener('click', () => {
    questions.classList.remove('active');
    questions.classList.add('none-active')
    rateYourself.classList.remove('none-active');
    rateYourself.classList.add('active');
    localStorage.setItem('page', 'rateYourself');
})
document.getElementById('share').addEventListener('click', () => {
    rateYourself.classList.remove('active');
    rateYourself.classList.add('none-active');
    finish.classList.remove('none-active');
    finish.classList.add('active');
    localStorage.setItem('page', 'finish');
})
