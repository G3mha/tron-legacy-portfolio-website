// ################## Hover effect on education div ##################

const educations = document.getElementsByClassName('education');
console.log(educations);
// Add event listeners to each education div
for (let i = 0; i < educations.length; i++) {
    educations[i].addEventListener('mouseover', function() {
        educations[i].classList.add('education-active');
    });
    educations[i].addEventListener('mouseout', function() {
        educations[i].classList.remove('education-active');
    });
}