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
