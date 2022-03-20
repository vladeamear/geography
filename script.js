function sendEmail() {
    var tempParams = {
        name: document.getElementById('name').value,
        question_1: document.getElementById('question_1').value,
        question_2: document.getElementById('question_2').value,
        question_3: document.getElementById('question_3').value,
        question_4: document.getElementById('question_4').value,
        question_5: document.getElementById('question_5').value,
        level: document.querySelector('input[name="level"]:checked').value,
        didnt_understand: document.getElementById('didnt_understand').value,
    }
    emailjs.send('gmail','geography_test', tempParams)
}

let questions = document.getElementById('questions'),
    rateYourself = document.getElementById('rate-yourself'),
    finish = document.getElementById('finish');

let page = localStorage.getItem('page');
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
    let name = document.getElementById('name');
    if (name.value) {
        questions.classList.remove('active');
        questions.classList.add('none-active')
        rateYourself.classList.remove('none-active');
        rateYourself.classList.add('active');
        localStorage.setItem('page', 'rateYourself');
    } else {
        alert('Введите ФИО')
        name.classList.add('error')
    }
})
document.getElementById('share').addEventListener('click', () => {
    rateYourself.classList.remove('active');
    rateYourself.classList.add('none-active');
    finish.classList.remove('none-active');
    finish.classList.add('active');
    localStorage.setItem('page', 'finish');
    sendEmail();
})

