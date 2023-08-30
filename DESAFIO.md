# Desafio Front-end Plin

## Objetivo

Para começar, você deverá criar uma aplicação no NextJS contendo as seguintes páginas:
• Uma página onde seja exibido o clima de uma cidade. A cidade deve ser a cidade em que o usuário está.
• Uma página de busca de CEP, onde o usuário deverá inserir o nome da rua e a página deverá listar os possíveis resultados para tal consulta.
• Uma página de contato com um formulário ativo. O submit do elemento form, caso você utilize, deverá ser uma função com um console.log dos dados do formulário e returno nulo. Este formulário também deverá conter um campo para envio de arquivos. Os arquivos só poderão ser do tipo PDF.

## Resultado

• Qual foi a maior dificuldade que você enfrentou ao realizar o teste?

- O tratamento de dados do clima, pois a API retorna um objeto com muitas informações e eu tive que tratar para pegar apenas as informações que eu precisava.
- a manipulação desses dados para exibir na tela também foi um pouco complicada, pois como não é um `BFF (Backend for Frontend)` tinha que fazer tudo no front-end.

• Descreva a funcionalidade e o por quê da utilização das bibliotecas escolhidas por você para concluir o desafio.

- pra validação de formulário eu utilizei o `react-hook-form` em um combo com o `zod` pois é uma biblioteca que eu já conhecia e é muito fácil de utilizar.
- utilizei o `framer-motion` para fazer as animações de entrada e saída das páginas

• Como você se vê daqui a 5 anos?

- Daqui a 5 anos eu me vejo trabalhando com tecnologias mais atuais e com uma equipe de desenvolvimento, onde eu possa compartilhar conhecimento e aprender com os outros também, podendo ter chego ao nível Sênior, quem sabe até mais.

• Caso você tenha dado um “Tchammmm!” na sua aplicação, descreva o que você fez, como isso irá melhorar a experiência do usuário.

- Eu acredito que o que mais se destaca na minha aplicação são as animações, que deixam a experiência do usuário mais agradável e intuitiva e também a questão de feedbacks visuais, como por exemplo, quando o usuário digita uma informação aparece uma mensagem de erro ou quando ele clica em um botão e a aplicação está processando algo, aparece um loading para ele saber que a aplicação está processando algo. Isso tudo melhora a experiência do usuário, pois ele não fica perdido sem saber o que está acontecendo. Toasts também são uma boa forma de dar feedbacks visuais para o usuário.
- Juntamente com o uso da nova versão do NextJS que é a 13, utilizando os `Server components` que é uma nova feature do NextJS, a aplicação fica muito mais rápida, pois o NextJS consegue fazer o `Server Side Rendering` de forma muito mais rápida e eficiente, pois ele não precisa renderizar a página inteira, ele consegue renderizar apenas o que foi alterado, o que torna a aplicação muito mais rápida e com uma melhor experiência para o usuário.
