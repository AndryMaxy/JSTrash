function initClient() {
    const ws = new WebSocket('ws://52.14.207.216:3003');

    const container = $('#container');
    const nameContainer = $('#nameContainer');
    const status = $('#status');
    const messages = $('#messages');
    const inputMsg = $('#newMsg');
    const confirm = $('#confirm');
    const nameInput = $('#name');

    let name = '';

    confirm.on('click', () => {
        name = nameInput[0].value;
        nameContainer.hide();
        container.show();
    })

    inputMsg.on('keydown', (e) => {
        if (e.key === 'Enter') {
            const msg = {
                name,
                msg: inputMsg[0].value
            };
            ws.send(JSON.stringify(msg));
            inputMsg[0].value = '';
        }
    })


    const setStatus = (value) => {
        status[0].innerHTML = value;
    }

    const printMessage = (msg) => {
        const li = $('<li></li>');

        li[0].innerHTML = `${msg.name}: ${msg.msg}:`;
        messages.append(li);
    }

    ws.onopen = () => setStatus('YOU ARE ONLINE');

    ws.onclose = () => setStatus('YOU ARE OFFLINE');

    ws.onmessage = response => printMessage(JSON.parse(response.data));
}