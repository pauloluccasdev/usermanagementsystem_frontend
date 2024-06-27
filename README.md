# Sistema de Gerenciamento de Usuários em Angular

## Arquitetura do Sistema

O Sistema de Gerenciamento de Usuários em Angular foi desenvolvido seguindo uma arquitetura modular e escalável, utilizando componentes principais para gerenciar usuários e departamentos:

### Componentes Angular

- **UserListComponent**: Lista todos os usuários cadastrados e permite operações CRUD.
- **UserDetailsComponent**: Exibe os detalhes de um usuário específico.
- **UserFormComponent**: Formulário para adicionar e editar informações de usuários.
- **DepartmentListComponent**: Lista todos os departamentos e permite gerenciá-los.
- **DepartmentFormComponent**: Formulário para adicionar e editar informações de departamentos.

### Serviços

- **UserService**: Gerencia as operações CRUD relacionadas aos usuários, como criar, ler, atualizar e excluir. Utiliza `HttpClient` do Angular para comunicação com a API de usuários.
- **DepartmentService**: Gerencia as operações CRUD relacionadas aos departamentos, como criar, ler, atualizar e excluir. Também utiliza `HttpClient` para interagir com a API de departamentos.

### Roteamento

Utiliza o roteador do Angular para navegar entre os componentes e passar parâmetros, como ID de usuário ou departamento.

## Tecnologias Utilizadas

- **Angular 17**: Framework front-end utilizado para construir a interface de usuário e as funcionalidades do sistema.
- **Angular Material**: Biblioteca de componentes e estilos para Angular, utilizada para criar uma interface de usuário moderna e responsiva.
- **RxJS**: Biblioteca para programação reativa utilizada para lidar com operações assíncronas e streams de dados.
- **TypeScript**: Linguagem de programação usada para desenvolver aplicativos Angular, oferecendo tipagem estática opcional e outras funcionalidades avançadas.
- **HTML/CSS**: Linguagens padrão para estruturação e estilização de páginas web.

## Instruções para Configurar e Executar o Projeto Localmente

### Pré-requisitos

- Node.js (última versão LTS recomendada)
- Angular CLI

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### Instalar Dependências

```bash
npm install
```
Este comando instalará todas as bibliotecas e pacotes necessários para executar o sistema.

### Configuração do Ambiente
- Configure as variáveis de ambiente necessárias, como URLs de APIs ou chaves de acesso, no arquivo de ambiente apropriado (environment.ts ou environment.prod.ts).

### Executar o Projeto
Para iniciar o servidor de desenvolvimento do Angular e visualizar o sistema em seu navegador, utilize o comando:

```bash
npm serve --open
```
Abre automaticamente um navegador navegando na http://localhost:4200/ para visualizar o sistema em execução.

### Testes Unitários
Para executar os testes unitários, utilize o seguinte comando:

```bash
npm test
```

Isso iniciará o Karma, o executor de testes do Angular, que executará os testes e relatará os resultados no terminal.

## Considerações Finais

O Sistema de Gerenciamento de Usuários em Angular foi desenvolvido seguindo boas práticas de programação, modularidade e escalabilidade. Para quaisquer dúvidas ou problemas, consulte a documentação do Angular ou entre em contato com a equipe de desenvolvimento responsável pelo projeto.

