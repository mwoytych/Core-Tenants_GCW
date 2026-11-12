(function () {
    'use strict';

    var PAGES = [
        { href: 'index.html',            label: 'Home' },
        { href: 'interdependent.html',   label: 'Interdependent' },
        { href: 'independent.html',      label: 'Independent' },
        { href: 'hardship.html',         label: 'Hardship' },
        { href: 'gabe-note-taking.html', label: "Gabe's Notes" }
    ];

    var container = document.getElementById('site-nav');
    if (!container) return;

    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var ul = document.createElement('ul');

    PAGES.forEach(function (page) {
        var li = document.createElement('li');
        var a  = document.createElement('a');
        a.href = page.href;
        a.textContent = page.label;
        if (page.href === currentPath) {
            a.setAttribute('aria-current', 'page');
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    container.appendChild(ul);
})();
