# Criando a lista de Itens

Para que possamos trabalhar com a variavel state sem ter de criar um metodo construtor, como o exemplo abaixo:

```
class PostList extends Component {
  state = {}
}
```

Adicione a dependencia do plugin do babel:

```
yarn add @babel/plugin-proposal-class-properties -D
```

Vá até o arquivo _babel.config.js_ e adicione o plugin que foi instalado, o arquivo fica assim:

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
};
```
