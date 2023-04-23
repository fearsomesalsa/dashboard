window.onload = function () {
    const navItemDashboard = document.getElementsByClassName('navigation-item active')[0];
    document.querySelectorAll('.navigation-item a').forEach(function (item) {
        item.onmouseover = function (e) {
            if (item.children[1].innerText !== 'Dashboard') {
                navItemDashboard.classList.remove('active');
                navItemDashboard.querySelector('path').setAttribute('fill', '#858796');
            }
        };
        item.onmouseout = function (e) {
            navItemDashboard.classList.add('active');
        }
    });
};