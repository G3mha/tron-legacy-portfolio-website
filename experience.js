// ################## Hover effect on job div ##################

const jobs = document.getElementsByClassName('job');
console.log(jobs);
// Add event listeners to each job div
for (let i = 0; i < jobs.length; i++) {
    jobs[i].addEventListener('mouseover', function() {
        jobs[i].classList.add('job-active');
    });
    jobs[i].addEventListener('mouseout', function() {
        jobs[i].classList.remove('job-active');
    });
}