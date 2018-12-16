let WebSocket = require('ws');
let axios = require('axios');
//Handles the websocket connection to chat


//establish a new websocket
let chatServer = new WebSocket("wss://testbed-chat.stream.highwebmedia.com:8443/ws/751/4fnhi3dy/websocket");

//when the connection is opened called this function
chatServer.onopen = (event) => {
    console.log('Connection to remote chatServer is open!', event);
}

chatServer.onerror = (event) => {
    console.log('Error with connection to remote chatServer', event);
}

chatServer.onclose = (event) => {
    console.log('Connection to remote chatServer closed!', event);
}

chatServer.onmessage = (event) => {
    // console.log('New message from remote chatSever: ', event);
    if(event.data === 'o') {
        console.log('READY FOR AUTH!');
        //authData lets us join the correct room so we can get all the messages
        let authData = JSON.stringify(['{"method":"connect","data":{"user":"activeoverlay","password":"848bb64c3f6b57e5d6c00223d20e4f16c6966452c1872befc345bc612bc14ec8e9b9a793c11bed7a257e0da79e8c9258538d88536dbcc2189520a0c4d9db1e74","room":"activeoverlay","room_password":""}}']);
        //send the authData to the server
        chatServer.send(authData);
    } else if (event.data[0] === 'a') {
        let newString = event.data.substr(1);
        let newData = JSON.parse(newString);
        let finalData = JSON.parse(newData[0]);
        if (finalData.method === 'onAuthResponse') {
            chatServer.send(JSON.stringify(['{"method":"joinRoom","callback":1,"data":{"room":"activeoverlay"}}']));
        } else if (finalData.method === 'onRoomMsg') {
            let data  = JSON.parse(finalData.args[1]);
            console.log('New user message: ' + data.m);
            // postMessage(data);
        }
    }
}

// let postMessage = (data) => {
//     axios.post('http://127.0.0.1:4000/message', data);
// }
//HOW TO REALTIME SEND THESE TO WINDOW FOR DISPLAY

