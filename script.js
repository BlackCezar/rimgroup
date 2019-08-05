function toggleWindow() {
    let overBg = document.getElementById('window_ov');
    if (overBg.dataset.show == '0') {
        window.scrollTo(0,0);
        overBg.style.display = "flex";
        overBg.style.opacity = 1;
        overBg.dataset.show = '1';
        overBg.children[0].style.animation = "showWindow 0.5s forwards";
    } else {
        overBg.dataset.show = '0';
        overBg.children[0].style.animation = "hideWindow 0.5s forwards";
        setTimeout(() => {
        overBg.style.opacity = 0;
            overBg.style.display = "none";       
        }, 500)
    }
}
function toggleTel(ev) {
    let inp = document.getElementById('tel');
    ev.target.parentElement.parentElement.parentElement.classList.toggle('checked')
    if (ev.target.classList.toggle('checked')) {
        setTimeout(() => {
            inp.style.display = "block";
            inp.style.animation = "showWindow 0.2s forwards";
        }, 300)
    } else {
        inp.style.animation = "hideWindow 0.2s forwards";
         setTimeout(() => {
            inp.style.display = "none";   
        }, 200)
            
    }
}
(function() {
    for (span of document.querySelectorAll('.w-span')) {
        span.addEventListener('mouseenter', spanOver);
        span.addEventListener('click', spanClick);
        span.addEventListener('mouseleave', spanOut);
    }
    for (span of document.querySelectorAll('.over-bg')) {
        span.addEventListener('mouseenter', partOver);
        span.addEventListener('click', partClick);
        span.addEventListener('mouseleave', partOut);
    }
}());
function spanClick(ev) {
    let spanN = ev.target.className.slice(-1);
    for (span of document.querySelectorAll('.over-bg')) {
        if (span.parentElement.parentElement.className.slice(-1) == spanN) {
            span.style.background = 'transparent';
        } else span.style.background = '#ec5d21bd';
    } 
}
function partClick(ev) {
    let spanN = ev.target.parentElement.className.slice(-1);
    for (span of document.querySelectorAll('.over-bg')) {
        if (span.parentElement.parentElement.className.slice(-1) == spanN) {
            span.style.background = 'transparent';
        } else span.style.background = '#ec5d21bd';
    } 
}
function spanOver(ev) {
    let spanN = ev.target.className.slice(-1);
    if (spanN == 'g') {
        ev.target.parentElement.style.background = 'transparent';
    } else document.querySelector('.part' + spanN + ' .over-bg').style.background = 'transparent';
}
function partOver(ev) {
    let spanN = ev.target.parentElement.parentElement.className.slice(-1);
    document.querySelector('.part' + spanN + ' .over-bg').style.background = 'transparent';
}
function spanOut(ev) {
    let spanN = ev.target.className.slice(-1);
    document.querySelector('.part' + spanN + ' .over-bg').style.background = '#ec5d21bd';
}
function partOut(ev) {
    let spanN = ev.target.parentElement.parentElement.className.slice(-1);
    document.querySelector('.part' + spanN + ' .over-bg').style.background = '#ec5d21bd';    
}