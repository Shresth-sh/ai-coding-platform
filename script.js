function runCode() {
  const code = document.getElementById('code').value;
  fetch('https://ai-coding-platform-po3p.onrender.com//run', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({code})
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('output').innerText = data.output;
  })
  .catch(err => {
    document.getElementById('output').innerText = 'Error: ' + err;
  });
}
