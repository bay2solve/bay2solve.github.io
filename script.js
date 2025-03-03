document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

function searchFunction() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let items = document.querySelectorAll("#menu li");
    
    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

function loadCalculator(type) {
    let container = document.getElementById('calculatorContainer');
    container.innerHTML = `<h2>${type} Calculator</h2><p>Coming soon...</p>`;
}
