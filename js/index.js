const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



// Add smooth scrolling to links

const links = document.querySelectorAll('a[href^="#"]')

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        const targetPosition = targetElement.offsetTop

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        })
    })
})