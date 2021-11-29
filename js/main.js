const inputValue = document.getElementById('input');
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');

function insert(number) {
    if (inputValue.value.length > 12) {
        $('#input').addClass('fontChange');
        $('#input').val($('#input').val() + number);
    } else if(inputValue.value.length <= 12){
        $('#input').removeClass('fontChange');
        $('#input').val($('#input').val() + number);
    }
}

function equal() {
    $('#input').val((eval($('#input').val())));
    if (inputValue.value.length > 12) {
        $('#input').addClass('fontChange');
    } else if(inputValue.value.length <= 12){
        $('#input').removeClass('fontChange');
    }
}

function Ac() {
    $('#input').val('');
}
function toggelDarkMood() {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('darkMoodBack');
    moonIcon.classList.replace('on', 'off');
    sunIcon.classList.replace('off', 'on');
}
function toggelMood() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('darkMoodBack');
    moonIcon.classList.replace('off', 'on');
    sunIcon.classList.replace('on', 'off');
}
