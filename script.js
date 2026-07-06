function filterGames(category) {
    const games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        if (category === "all" || game.classList.contains(category)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}
