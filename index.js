function addingEventListener() {
    const clickHere = document.getElementById('main');
    clickHere.addEventListener('click', clickAlert);
    return true;
}

function clickAlert() {
    alert('I was clicked!');
}

addingEventListener();
