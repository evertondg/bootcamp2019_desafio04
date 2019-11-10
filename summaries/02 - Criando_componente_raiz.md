# Configurando o componente raíz

Caso ocorra algum problema , certifique-se de ter instaldo as dependencias abaixo:

```javascript
npm install react react-dom --save
```

No arquivo index.js vamos criar o componente principal, caso tenha algum conteúdo apague e adicione o seguinte:

```javascript
import React from 'react'; // importa o React
import { render } from 'react-dom';

render(<h1>Hello World</h1>, document.getElementById('app'));
```

Agora vamos separar o componente principal da aplicação, para isso crie um arquivo App.js dentro da pasta src e adicione o seguinte conteúdo:

```javascript
import React from 'react';

function App() {
  return <h1>Hello Everton!</h1>;
}

export default App;
```

Lembre-se que toda vez que for utilizada a sintaxe de JSX devemos importar o **REACT**.

Devemos importar nosso novo componentem para o index.js, que fica assim.

```js
import React from 'react'; // importa o React
import { render } from 'react-dom';
import App from './App'; // importanmos o componente App

// Representamos o componente App como se fosse uma tag HTML.
render(<App />, document.getElementById('app'));
```
