const panels = document.querySelectorAll('.panel');
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

expandNextCard();

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    const activePanel = document.querySelector('.active');
    activePanel.classList.remove('active');
}

async function expandNextCard() {
    await wait(8000);

    const activePanel = document.querySelector('.active');
    let nextPanel;

    if (activePanel.nextElementSibling) {
        nextPanel = activePanel.nextElementSibling;
    } else {
        nextPanel = document.querySelector('.first');
    }

    activePanel.classList.remove('active');
    nextPanel.classList.add('active');
 
    expandNextCard();
}