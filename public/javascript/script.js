
function getUsers(cb){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', '/users')
    xhr.setRequestHeader('content-type', 'application/json')

    xhr.load = () => {
        if(xhr.status == 200) {
            cb(JSON.parse(xhr.responseText))
        }
    }

    xhr.send()
}

getUsers((users))