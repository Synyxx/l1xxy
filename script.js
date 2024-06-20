document.addEventListener('DOMContentLoaded', (event) => {
    const playerCountElement = document.getElementById('player-count');

    // Função para obter o número de jogadores online usando a API do Roblox
    async function updatePlayerCount() {
        const gameId = '9730593079'; // Substitua pelo seu ID do jogo
        const url = `https://games.roblox.com/v1/games/${gameId}/servers/Public?sortOrder=Asc&limit=100`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            let playersOnline = 0;

            data.data.forEach(server => {
                playersOnline += server.playing;
            });

            playerCountElement.textContent = playersOnline;
        } catch (error) {
            console.error('Erro ao obter o número de jogadores online:', error);
            playerCountElement.textContent = 'Erro';
        }
    }

    // Atualiza o número de jogadores online a cada 10 segundos
    setInterval(updatePlayerCount, 10000);
    updatePlayerCount();  // Atualiza na carga inicial
});
