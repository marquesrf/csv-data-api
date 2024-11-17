# csv-data-api

### Setup

Para rodar, tenha certeza de ter NodeJS instalado. Também copie os dois arquivos CSV para a pasta _data_ (criei caso não exista) e renomei-os (o código precisa que estejam com esses nomes) da seguinte forma:

- soma-concentrado.csv
- soma-materia-prima.csv

Entre na raiz do projeto e execute os comandos na seguinte ordem:

1. `npm i`
2. `node app.js`

### Endpoints

- Concentrados: http://localhost:3000/api/get_soma_concentrado
- Matéria Prima: http://localhost:3000/api/get_soma_materia_prima
