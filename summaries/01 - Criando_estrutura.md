# Iniciando Projeto React

Inicializamos o package.json

```
yarn init -y
```

Adicionamos as seguintes dependencias a nosso projeto para poder utilizar o WEBPACK, BABEL com o REACT.

```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader -D
```

Como nosso projeto será em REACT devemos instalar as seguintes dependencias:

```
yarn add react react-dom
```

## Configurando **BABEL**

- Crie um arquivo com o nome de _**babel.config.js**_ e adicione o seguinte conteúdo:

```javascript
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react']
};
```

Este arquivo adiciona os presets instalados onde _**@babel/preset-env**_ é responsável por transformar as funcionalidades do javascript que o navegador não entende ainda (arrowFunctions, import/export, etc... ) e o _**@babel/preset-react**_ transformas as coisas que o navegador nao entende do REACT como o **JSX** por exemplo.

## Configurando **WEBPACK**

- Crie um arquivo com o nome de _**webpack.config.js**_ e adicione o seguinte conteúdo:

- Crie uma pasta _**src**_ e dentro dela um arquivo _**index.js**_ e adicione o seguinte código nesse arquivo:

Este será o arquivo de entrada para nossa aplicação, ou seja tudo parte deste arquivo. Como estamos iniciando os testes de transpilação do babel, vamos criar uma arrowFunction, lembrando que teoricamente o navegador não iria entender essa feature do javascript ainda.

```javascript
const = soma = (a,b) => a+b;

alert(soma(1,3));
```

- Crie também a pasta _**public**_ que é onde os arquivos transpilados pelo babel serão armazenados após o build.

Agora nas configurações do webpack vamos definir as configurações do webpack.

```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // regras para arquivos javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

Após esta configuração, vamos adicionar os _**scripts**_ dentro do nosso _**package.json**_

```javascript
  "scripts": {
    "build": "webpack --mode development"
  },
```

Ao salvar e rodar o comando _**yarn build**_, perceba que na pasta _public_ foi criado o arquivo _*bundle.js*_ que é o codigo transpilado da entrada definida no arquivo de config do webpack (_*index.js*_). Um detalhe é que o arquivo vem escrito de forma que você consegue ler o código, isso ocorre pois no script de build estamos utilizando o parametro _*--development*_.

Como este arquivo _*bundle.js*_ sera transpilado toda vez que executar-mos o comando yarn build, vamos criar um index.html para que seja possível acessar este código.

- Na pasta _**public**_ crie um arquivo de nome _**index.html**_ co o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Everton Desafio 04 - Facebook</title>
  </head>
  <body>
    <h1>Seja Bem-vindo!</h1>

    <script src="./bundle.js"></script>
  </body>
</html>
```

Ao abrir o arquivo index.html no navegador, perceba que o código javascript será executado.

Para que o desenvolvimento seja mais simples e que a cada momento que for executado o código de build esse arquivo index sofra as alterações vamos instalar a dependencia abaixo:

```
yarn add webpack-dev-server -D
```

Após instalar essa dependencia precisamos adicionar mais configurações em nosso _**webpack.config.js**_ conforme vemos abaixo

```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      // regras para arquivos javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

O parametro devServer define a pasta que o servidor deve "escutar" a cada momento que é feito uma alteração.

Vamos alterar também os scripts do nosso package.json, veja:

```json
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  },
```

Neste ponto, se rodar seu código com o comando _**yarn dev**_ seu console além de transpilar o código, irá retornar um endereço de localhost para que voce possa acessar seu projeto que foi configurado para escutar a pasta _**public**_. O console irá mostrar algo como exibido abaixo:

```json
$ webpack-dev-server --mode development
ℹ ｢wds｣: Project is running at http://localhost:8080/
```

Agora ao acessar o endereo fornecido, repare que o código será executado. Qualquer alteração feita no código resultará em atualização automática do bundle.js e também no navegador.

O parametro _**--mode production**_ serve para minificar o arquivo, assim quando realmente for gerar o build da aplicação, teremos o arquivo javascript totalmente otimizado para ambiente de produção.
