// start your script here...
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel')
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('dropdownMenu')
const backDrop = document.getElementById('backdrop')
const navBar = document.getElementById('navbar')


// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Menu event listener
menuBtn.addEventListener('click', toggleMenu)

function onTabClick(e) {
    tabs.forEach((tab) => {
        tab.classList.remove(
            'border-b-2',
            'border-zinc-900'
        )
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate a new tab and panel based on the target
    e.target.classList.add('border-b-2', 'border-zinc-900')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}


function toggleMenu() {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('max-h-0')
    backDrop.classList.toggle('h-screen')

    // Navbar position when the menu-btn is being triggered
    if (navBar.classList.contains('fixed', 'right-0', 'left-0', 'z-30', 'xl:relative')) {
        navBar.classList.remove('fixed', 'right-0', 'left-0', 'z-30', 'xl:relative')
    } else {
        navBar.classList.add('fixed', 'right-0', 'left-0', 'z-30', 'xl:relative')
    }
}
