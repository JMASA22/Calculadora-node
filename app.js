const express = require('express');
const app = express();
const port = 3000;

// Config middleware per gestionar demandes POST
app.use(express.urlencoded({ extended: true }));

// Servir arxius estàtics des d carpeta 'public'
app.use(express.static('public'));

// Ruta principal arxiu HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta per gestionar POST des d form
app.post('/script', (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Valid operation';
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`L'app està escoltant http://localhost:${port}`);
});
