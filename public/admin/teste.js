const apiToken = 'cb649c83e4f7ac'; 
const userInfoElement = document.getElementById('user-info');

async function fetchUserInfo() {
    try {
        const response = await fetch(`https://ipinfo.io?token=${apiToken}`);
        const data = await response.json();
        
        userInfoElement.innerHTML = `
            IP: ${data.ip}<br>
            Cidade: ${data.city || 'N/A'}<br>
            Região: ${data.region || 'N/A'}<br>
            Estado: ${data.country || 'N/A'}<br>
            Localização: ${data.loc || 'N/A'}<br>
            Provedor: ${data.org || 'N/A'}<br>
            Cep: ${data.postal || 'N/A'}
        `;
    } catch (error) {
        console.error('Erro:', error);
        userInfoElement.textContent = 'desativa essas merdas de proteção ai e vai te fuder'; 
    }
}

window.onload = fetchUserInfo;
