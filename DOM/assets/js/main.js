let data = []

function Login(){
    let userName = document.getElementById('username').value
    let passwordUser = document.getElementById('passwordUser').value

    data.push({userName, passwordUser})
    console.log(data)
}