(function() {



    // Toggle Menu On Click
    const toggleID = document.getElementById('menuToggleBtn'),
        menuID = document.getElementById('menuToggleItem');
    if (toggleID && menuID) {
        toggleID.onclick = (e) => {
            menuID.classList.toggle("active");
        }
    }

    // Show Sub Menu 
    const openSubMenu = (arrowLinkID, subMenuID) => {
        let arrowLink = document.querySelectorAll(arrowLinkID),
            subMenu = document.querySelectorAll(subMenuID);

        if (arrowLink && subMenu) {
            console.log(arrowLink);
            const onSubMenuClick = el => {
                el.stopPropagation();
                let thisSubMenu = el.currentTarget.closest('.has-submenu').querySelector('.sub-menu');

                if (thisSubMenu.classList.contains('active')) {
                    thisSubMenu.classList.remove('active');
                    el.currentTarget.classList.remove('active');
                } else {
                    arrowLink.forEach(el => {
                        el.classList.remove("active");
                    });
                    subMenu.forEach(el => {
                        el.classList.remove("active");
                    });
                    thisSubMenu.classList.add("active");
                    el.currentTarget.classList.add('active');
                }
            }
            arrowLink.forEach(el => {
                el.addEventListener("click", onSubMenuClick);
            });
        }
    }
    openSubMenu('.down-arrow', '.sub-menu');
})();