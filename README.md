# MySide Shop 🏬

Um e-commerce moderno desenvolvido com Next.js, Redux e Styled Components.

🌐 **[Acesse a aplicação](https://my-side-shop.vercel.app)**

## 🚀 Funcionalidades

- ✨ Interface moderna e responsiva
- 🔍 Busca de produtos em tempo real
- 🏷️ Filtro por categorias
- 📱 Layout adaptativo para mobile
- 🛒 Carrinho de compras persistente
- 📄 Paginação de produtos
- 🌙 Suporte a temas customizados

## 🌐 Deploy

A aplicação está disponível em produção através da Vercel:

- **URL**: [https://my-side-shop.vercel.app](https://my-side-shop.vercel.app)
- **Status**: [![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=my-side-shop)](https://my-side-shop.vercel.app)

## 🛠️ Tecnologias

- Next.js 15.1
- React 18
- Redux Toolkit
- Styled Components
- Jest & Testing Library
- Lucide Icons

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/TakashiNishii/MySideShop.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse http://localhost:3000

## 🧪 Testes

Execute os testes unitários:

```bash
npm test
# ou
yarn test
```

Para modo watch:

```bash
npm test:watch
# ou
yarn test:watch
```

## 📁 Estrutura do Projeto

```
my-side-shop/
├── components/          # Componentes React
├── pages/              # Páginas Next.js
├── services/           # Serviços e APIs
├── store/              # Configuração Redux
├── styles/             # Estilos globais e tema
├── hooks/              # Custom hooks
└── __tests__/         # Testes
```

## 🔄 Estado Global

O estado da aplicação é gerenciado com Redux Toolkit e inclui:

- Produtos (lista, busca, filtros)
- Carrinho de compras
- Filtros e paginação
- Categorias

## 🎨 Estilização

Utilizamos Styled Components com um tema customizado que inclui:

- Cores primárias e secundárias
- Tipografia responsiva
- Espaçamentos consistentes
- Breakpoints para responsividade
- Sombras e efeitos

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a:

- 📱 Mobile (< 480px)
- 📱 Tablet (< 768px)
- 💻 Desktop (> 1024px)

## 🔒 Persistência

Dados persistidos com Redux Persist:

- Carrinho de compras
- Filtros selecionados
- Preferências do usuário

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Ygor Takashi Nishi** - [GitHub](https://github.com/TakashiNishii)

## 📧 Contato

Ygor Takashi Nishi - ygortn14@gmail.com

Links do projeto:

- Repositório: [https://github.com/TakashiNishii/MySideShop](https://github.com/TakashiNishii/MySideShop)
- Deploy: [https://my-side-shop.vercel.app](https://my-side-shop.vercel.app)
