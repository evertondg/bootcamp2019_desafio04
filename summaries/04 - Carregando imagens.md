# Carregando imagens

Adicione o loader de imagens em seu projeto como dependencia de desenvolvedor:

```js
yarn  add file-loader -D
```

Adicione a nova rule no webpack.config.js

```js
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
```

Crie uma pasta **assets** dentro da pasta **src** salve um arquivo dentro dela com o nome de profile.png

Após feita a configuração do loader e criada a pasta que contem as imagens, é necessário sempre importar a imagem que vai ser utilizada dentro do componente, então adicione a seguinte linha de importação ao arquivo App.js

```js
import profile from './assets/profile.png';
```

As imagens importadas são utilizadas como variaveis então para exibir, deixamos nosso App.js da seguinte forma:

```js
import React from 'react';
import './App.css';

import profile from './assets/profile.png'; // importamos a imagem

function App() {
  return <img width="50" src={profile} />; // utilizamos a imagem
}

export default App;
```

para utilizar variaveis no REACT, utilizamos a chave e o nome da variavel dentro, ex.: _{profile}_
