# Adicionando CSS

Vamos iniciar instalando os loaders de CSS.

```
yarn add style-loader css-loader -D
```

Vá até o _webpack.config.js_ e adicione a seguinte regra em rules, abaixo das regras do babel:

```js
      {
        test: /\.css$/,
        use: [
          // importar arquivos css para o pacote
          {loader: 'style-loader'},
          {loader: 'css-loader'} // permite carregar arquivos css com @import e imagens que sao importadas dentro do css
        ]
      }
```

Crie um arquivo na pasta _src_ chamado App.css com o seguinte conteúdo:

```css
body {
  background: #7159c1;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
```

Agora basta importar o App.css dentro da Aplicação:

```js
import './App.css';
```
