    const requestUrl = 'https://api.github.com/users/Abhoy-Ghosh'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            // console.log(typeof data);
            // console.log(data.followers);
            document.querySelector('#image').innerHTML = `<img src="${data.avatar_url}" alt="Avatar">`;
            document.querySelector('#info h3').textContent = `Name: ${data.login}`;
            document.querySelector('#info h4').textContent = `Followers: ${data.followers}`;


        }
    }
    xhr.send();

    