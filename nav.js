let newGame = document.getElementById("new-game")
let exitSite = document.getElementById("exit-site")

newGame.addEventListener("click", function() {
    newGame.innerHTML = `
    <a href=${ticgame.html}>
    `
})

exitSite.addEventListener("click", function() {
    window.close()
})