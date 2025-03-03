// Toggle Theme
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Search Function
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        let label = item.querySelector(".label").textContent.toLowerCase();
        if (label.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Load Calculator
function loadCalculator(type) {
    let container = document.getElementById("calculatorContainer");

    if (type === "arithmetic") {
        container.innerHTML = `
            <div class="calculator">
                <h2>Arithmetic Calculator</h2>
                <input type="number" id="num1" placeholder="Enter first number">
                <input type="number" id="num2" placeholder="Enter second number">
                <select id="operation">
                    <option value="add">Addition (+)</option>
                    <option value="subtract">Subtraction (-)</option>
                    <option value="multiply">Multiplication (×)</option>
                    <option value="divide">Division (÷)</option>
                </select>
                <button onclick="calculate()">Solve</button>
                <p id="result"></p>
            </div>
        `;
    } else if (type === "algebra") {
        container.innerHTML = `
            <div class="calculator">
                <h2>Algebra Calculator</h2>
                <p>Solving quadratic equation ax² + bx + c = 0</p>
                <input type="number" id="a" placeholder="Enter value for a">
                <input type="number" id="b" placeholder="Enter value for b">
                <input type="number" id="c" placeholder="Enter value for c">
                <button onclick="solveQuadratic()">Solve</button>
                <p id="result"></p>
            </div>
        `;
    } else if (type === "geometry") {
        container.innerHTML = `
            <div class="calculator">
                <h2>Geometry Calculator</h2>
                <p>Calculate area of a circle</p>
                <input type="number" id="radius" placeholder="Enter radius">
                <button onclick="calculateArea()">Calculate</button>
                <p id="result"></p>
            </div>
        `;
    } else {
        container.innerHTML = `<p>Coming Soon!</p>`;
    }
}

// Arithmetic Calculation
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (operation === "add") result = num1 + num2;
    else if (operation === "subtract") result = num1 - num2;
    else if (operation === "multiply") result = num1 * num2;
    else if (operation === "divide") result = num1 / num2;

    document.getElementById("result").innerText = `Result: ${result}`;
}

// Solve Quadratic Equation
function solveQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
        document.getElementById("result").innerText = "No Real Solutions";
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").innerText = `Solutions: ${root1}, ${root2}`;
    }
}

// Geometry Calculation
function calculateArea() {
    let radius = parseFloat(document.getElementById("radius").value);
    let area = Math.PI * radius * radius;
    document.getElementById("result").innerText = `Area: ${area.toFixed(2)}`;
}
