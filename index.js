//Init tooltips
tippy('.link', {
    placement: 'bottom'
})
//hoghlifh

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
const navLiI = document.querySelectorAll("nav ul li a i");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    })
    navLiI.forEach(i => {
        i.classList.remove("active_i");
        i.classList.add("inactive_i");

        if (i.classList.contains(current)) {
            i.classList.add('active_i');
            i.classList.remove('inactive_i');

        }
    });

    navLi.forEach(a => {
        a.classList.add("inactive_a");
        a.classList.remove("active_a");
        if (a.classList.contains(current)) {
            a.classList.add('active_a');
            a.classList.remove('inactive_a');

        }
    })
});


//Toggle Profile Theme
const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');
const skill = document.getElementById('skill');
const project = document.getElementById('project');
const education = document.getElementById('Education');
const edu = document.getElementById('edu-board');
const Cont = document.getElementById('Contact');
const Cont_card = document.getElementById('card');
const Cont_card2 = document.getElementById('card2');






const li = document.getElementById('toggle-icon')


toggle.addEventListener('click', () => {

    if (body.classList.contains('text-gray-900')) {
        body.classList.remove('text-gray-900');
        body.classList.add('text-gray-100');

        body.classList.remove('bg-gray-100');
        body.classList.add('bg-gray-900');

        profile.classList.remove('bg-white');
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

        education.classList.remove('bg-gray-100');
        education.classList.add('bg-gray-900');
        education.classList.remove('text-black');
        education.classList.add('text-white');
        edu.classList.remove("bg-white");
        edu.classList.add('bg-gray-700');

        Cont.classList.remove('bg-gray-100');
        Cont.classList.add('bg-gray-900');
        Cont.classList.remove('text-black');
        Cont.classList.add('text-white');
        Cont_card.classList.remove("bg-white");
        Cont_card.classList.add('bg-gray-700');

        Cont_card2.classList.remove("bg-white");
        Cont_card2.classList.add('bg-gray-700');

        li.classList.remove('fa-moon');
        li.classList.add('fa-sun');
    } else {
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');
        body.classList.add('bg-gray-100');
        body.classList.remove('bg-gray-900');

        profile.classList.remove('bg-gray-900');
        profile.classList.add('bg-white');
        profile.classList.remove('text-white');
        profile.classList.add('text-black');

        skill.classList.remove('bg-gray-900');
        skill.classList.add('bg-gray-100');
        skill.classList.remove('text-white');
        skill.classList.add('text-black');

        education.classList.remove('bg-gray-900');
        education.classList.add('bg-gray-100');
        education.classList.remove('text-white');
        education.classList.add('text-black');

        edu.classList.add("bg-white");
        edu.classList.remove('bg-gray-700');

        Cont.classList.add('bg-gray-100');
        Cont.classList.remove('bg-gray-900');
        Cont.classList.add('text-black');
        Cont.classList.remove('text-white');
        Cont_card.classList.add("bg-white");
        Cont_card.classList.remove('bg-gray-700');

        Cont_card2.classList.add("bg-white");
        Cont_card2.classList.remove('bg-gray-700');

        project.classList.remove('bg-gray-900');
        project.classList.add('bg-gray-100');
        project.classList.remove('text-white');
        project.classList.add('text-black');

        li.classList.remove('fa-sun');
        li.classList.add('fa-moon');

    }
});

