const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', ()=>{
    document.getElementById('main').classList.toggle('jour');
}
)
const ratio = .8
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handelIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handelIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
})
