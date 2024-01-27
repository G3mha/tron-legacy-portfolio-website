// ################## Hover effect on korok div ##################

const korok = document.getElementById('korok');
// Add event listener to div
korok.addEventListener('mouseover', function() {
    korok.classList.add('korok-active');
});
korok.addEventListener('mouseout', function() {
    korok.classList.remove('korok-active');
});