function flipcoin() {
    const result = Math.random() < 0.5 ? "表" : "裏";
    document.getElementById('result').textContent=result;
}
