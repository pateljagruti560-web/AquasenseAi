function analyzeWater() {
    let ph = parseFloat(document.getElementById("ph").value);
    let tds = parseFloat(document.getElementById("tds").value);
    let turbidity = parseFloat(document.getElementById("turbidity").value);

    let result = "Water Quality Analysis:<br><br>";

    if (ph < 6.5 || ph > 8.5) result += "- pH out of safe range.<br>";
    if (tds > 500) result += "- High TDS.<br>";
    if (turbidity > 5) result += "- Turbidity too high.<br>";

    if (result === "Water Quality Analysis:<br><br>")
        result = "Water is SAFE ✔";
    else
        result += "<br><strong>Water MAY be unsafe ❌</strong>";

    document.getElementById("resultText").innerHTML = result;
    document.getElementById("resultSection").classList.remove("hidden");
}

function generateAIReport() {
    alert("Advanced AI Report will be added with OpenAI integration.");
}
