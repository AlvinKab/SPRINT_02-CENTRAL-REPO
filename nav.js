let newGame = document.getElementById("new-game")
let exitSite = document.getElementById("exit-site")

exitSite.addEventListener("click", function() {
    exitSite.textContent = "Closing..."
    window.close()
})