function initClient() {
    const ws = new WebSocket('ws://52.14.207.216:3003');

    // const status = document.getElementById('status');
    // const messages = document.getElementById('messages');
    // const input = document.getElementById('newMsg');
    const status = $('#status');
    const messages = $('#messages');
    const input = $('#newMsg');

    input.on('keydown', (e) => {
        if (e.key === 'Enter') {
            ws.send(input[0].value)
            input[0].value = '';
        }
    })


    const setStatus = (value) => {
        status[0].innerHTML = value;
    }

    const printMessage = (value) => {
        const li = $('<li></li>');

        li[0].innerHTML = value;
        messages.append(li);
    }

    ws.onopen = () => setStatus('ONLINE');

    ws.onclose = () => setStatus('OFFLINE');

    ws.onmessage = response => printMessage(response.data);
}