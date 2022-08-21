//Init tooltips
tippy('.link', {
    placement: 'bottom'
})

//Toggle Profile Theme
const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');
const skill = document.getElementById('skill');
const project = document.getElementById('project');

const li = document.getElementById('toggle-icon')


toggle.addEventListener('click', () => {

    if (body.classList.contains('text-gray-900')) {
        body.classList.remove('text-gray-900');
        body.classList.add('text-gray-100');

        body.classList.remove('bg-gray-100');
        body.classList.add('bg-gray-900');

        profile.classList.remove('bg-gray-100');
        profile.classList.add('bg-gray-900');
        profile.classList.remove('text-black');
        profile.classList.add('text-white');

        project.classList.remove('bg-gray-100');
        project.classList.add('bg-gray-900');
        project.classList.remove('text-black');
        project.classList.add('text-white');


        skill.classList.remove('bg-gray-100');
        skill.classList.add('bg-gray-900');
        skill.classList.remove('text-black');
        skill.classList.add('text-white');

        li.classList.remove('fa-moon');
        li.classList.add('fa-sun');
    } else {
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');
        body.classList.add('bg-gray-100');
        body.classList.remove('bg-gray-900');

        profile.classList.remove('bg-gray-900');
        profile.classList.add('bg-gray-100');
        profile.classList.remove('text-white');
        profile.classList.add('text-black');

        skill.classList.remove('bg-gray-900');
        skill.classList.add('bg-gray-100');
        skill.classList.remove('text-white');
        skill.classList.add('text-black');

        project.classList.remove('bg-gray-900');
        project.classList.add('bg-gray-100');
        project.classList.remove('text-white');
        project.classList.add('text-black');

        li.classList.remove('fa-sun');
        li.classList.add('fa-moon');

    }
});

