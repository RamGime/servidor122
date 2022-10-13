const path = require('path');
const express = require('express'); // Importando librería express
const cors = require('cors');
const morgan = require('morgan');

const dbConnect = require('./src/db/connection'); // lo que hace es importar la fuuncion de la Bd
require('dotenv').config();
// Inicializaciones
const app = express(); // se inicializa expreess
dbConnect(); // Se inicializa la conexión a la Base de Datos


// Configuraciones
const port = process.env.PORT || 3000;


// los middlewares son funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 


// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));




// Importando rutas
app.use(require('./src/routes/user.routes')); 
app.use(require('./src/routes/auth.routes')); 
app.use(require('./src/routes/task.routes')); 





// Configurando puerto
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
