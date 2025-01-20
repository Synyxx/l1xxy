const apiToken = 'cb649c83e4f7ac'; 
const userInfoElement = document.getElementById('user-info');

async function fetchUserInfo() {
    try {
        const response = await fetch(`https://ipinfo.io?token=${apiToken}`);
        const data = await response.json();
        
        userInfoElement.innerHTML = `
            IP: ${data.ip}<br>
            City: ${data.city || 'N/A'}<br>
            Region: ${data.region || 'N/A'}<br>
            Country: ${data.country || 'N/A'}<br>
            Location: ${data.loc || 'N/A'}<br>
            Organization: ${data.org || 'N/A'}<br>
            Postal: ${data.postal || 'N/A'}
        `;
    } catch (error) {
        console.error('Erro ao obter as informações:', error);
        userInfoElement.textContent = 'Unable to retrieve IP information'; 
    }
}

window.onload = fetchUserInfo;
