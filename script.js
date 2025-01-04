function checkAccount() {
    const username = document.getElementById('username').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (username) {
        const apiUrl = `https://s00test.64t76dee9sk5.workers.dev/?username=${username}`;
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应不正常');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === "success") {
                    resultDiv.innerHTML = `<p>账号状态：${data.message}</p>`;
                } else {
                    resultDiv.innerHTML = `<p>检测失败，请重试。</p>`;
                }
            })
            .catch(error => {
                console.error('发生错误:', error);
                resultDiv.innerHTML = `<p>发生错误，请稍后再试。</p>`;
            });
    } else {
        resultDiv.innerHTML = `<p>请输入用户名。</p>`;
    }
}
