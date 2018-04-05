//create XMLHttpRequest object
let createXHR = () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP'); //older versions if IE
    }

    return xhr;
}

//make a ajax structure function 
let ajaxRequest = (opts) => {
    return new Promise((resolve, reject) => {
        let xhr = createXHR();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr.response);
                } else {
                    reject(`Ajax request was unsuccessful with status : ${xhr.status}`);
                }
            }
        }
        xhr.onerror = () => {
            reject(`Ajax request was unsuccessful with status : ${xhr.status}`);
        }

        let method = typeof opts.method !== 'undefined' ? opts.method : 'GET';
        xhr.open(method, opts.url, true);
        if (typeof opts.headers !== 'undefined') {
            Object.keys(opts.headers).forEach(key => {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }
        let postData = typeof opts.data !== 'undefined' ? opts.data : null;
        xhr.send(postData);
    });
}

/*--------------------------
Test ajax function
----------------------------*/

//authorize with json data post
ajaxRequest({
    url: 'http://test.com/authen',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    data: JSON.stringify({
        username: 'abc',
        password: '123'
    })
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

//authorize with xml data post
ajaxRequest({
    url: 'http://test.com/authen',
    method: 'POST',
    headers: {
        'Content-Type': 'text/xml'
    },
    data: '<userinfo><username>abc</username><password>123</password></userinfo>'
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

//authorize with oauth 2.0 authorization basic
ajaxRequest({
    url: 'http://test.com/authen',
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + window.btoa('abc:123')
    }
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})