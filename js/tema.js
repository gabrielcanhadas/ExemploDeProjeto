function alternarTema() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("btn-tema");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
        if (btn) btn.textContent = "☀️";
    } else {
        localStorage.setItem("tema", "light");
        if (btn) btn.textContent = "🌙";
    }
}

// Carregar tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    const btn = document.getElementById("btn-tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
        if (btn) btn.textContent = "☀️";
    }
});
