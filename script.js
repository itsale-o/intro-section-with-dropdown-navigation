const featuresMenu = document.getElementById("menu-title1");
const companyMenu = document.getElementById("menu-title2");
const dropdown1 = document.getElementById("dropdown-1");
const dropdown2 = document.getElementById("dropdown-2");
const dropdownMobile1 = document.getElementById("dropdown-1-mobile");
const dropdownMobile2 = document.getElementById("dropdown-2-mobile");
const featuresMenuMobile = document.getElementById("menu-title1-mobile");
const companyMenuMobile = document.getElementById("menu-title2-mobile");
const openMenuMobile = document.getElementById("open-menu-mobile-img");
const closeMenuMobile = document.getElementById("close-menu-icon");
const menuMobile = document.getElementById("menu-mobile");
const darkEffectDiv = document.getElementById("dark-bg-div");

featuresMenu.addEventListener("click", e => {
    if(!dropdown1.classList.contains("opened-menu")){
        openMenu(dropdown1, featuresMenu, "Features");
    }else{
        closeMenu(dropdown1, featuresMenu, "Features");
    }; 
});

companyMenu.addEventListener("click", e => {
    if(!dropdown2.classList.contains("opened-menu")){
        openMenu(dropdown2, companyMenu, "Company");
    }else{
        closeMenu(dropdown2, companyMenu, "Company");
    };
});

openMenuMobile.addEventListener("click", e => {
    menuMobile.style.right = "0";
    darkEffectDiv.style.display = "block";
});

closeMenuMobile.addEventListener("click", e=> {
    menuMobile.style.right = "-300px";
    darkEffectDiv.style.display = "none";
});

featuresMenuMobile.addEventListener("click", e => {
    if(!dropdownMobile1.classList.contains("opened-menu")){
        openMenu(dropdownMobile1, featuresMenuMobile, "Features");
    }else{
        closeMenu(dropdownMobile1, featuresMenuMobile, "Features");
    };
});

companyMenuMobile.addEventListener("click", e => {
    if(!dropdownMobile2.classList.contains("opened-menu")){
        openMenu(dropdownMobile2, companyMenuMobile, "Company");
    }else{
        closeMenu(dropdownMobile2, companyMenuMobile, "Company");
    };
});


function openMenu(dropdown, menuTitle, html){
    dropdown.classList.add("opened-menu")
    dropdown.style.display = "block";
    menuTitle.innerHTML = `
    ${html}
    <img src="images/icon-arrow-up.svg" alt="">
    `;
};

function closeMenu(dropdown, menuTitle, html){
    dropdown.classList.remove("opened-menu")
    dropdown.style.display = "none";
    menuTitle.innerHTML = `
    ${html}
    <img src="images/icon-arrow-down.svg" alt="">
    `;    
};