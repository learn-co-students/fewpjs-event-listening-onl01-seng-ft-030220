function handleClick() {
    alert('I was clicked!');
}
function addingEventListener() {
    document.querySelector('input').addEventListener('click', handleClick);
}