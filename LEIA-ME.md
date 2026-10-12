# Site das Copas — com área de administração

## Como rodar no seu computador
1. Instale o **Node.js** (versão 18 ou mais nova): https://nodejs.org
2. Abra um terminal nesta pasta e rode:  `node server.js`  (ou dê dois cliques em `iniciar.bat` no Windows)
3. Abra  http://localhost:3000  → o site
4. Abra  http://localhost:3000/admin/  → a administração

**Primeiro acesso:** o terminal mostra um *código de configuração*. Digite-o na tela do `/admin/`, escolha usuário e
senha (mínimo 10 caracteres) e pronto. Esse código só existe até o administrador ser criado.

Não precisa instalar nada além do Node (nenhum `npm install`).

## O que dá para fazer no /admin/
- **Publicações:** criar, editar, excluir; salvar como *rascunho*; marcar para aparecer no **carrossel da home**
  (máximo 5, as mais recentes); imagem principal e imagem do rodapé enviadas direto do seu computador.
- **Aparência:** cor principal e cor secundária (valem para **todas** as páginas de uma vez) e a **bandeira da “Campeã mundial”**.
- **Conta:** trocar senha.

## Para colocar na internet
Como agora existe login e gravação de dados, o site precisa de uma hospedagem que **rode Node.js**
(VPS, Render, Railway, Fly.io etc.) — hospedagem só de arquivos estáticos (GitHub Pages, por exemplo) não serve para o admin.

- Comando de início: `node server.js`. O servidor usa a variável `PORT` da hospedagem automaticamente.
- **Use HTTPS** (a maioria das hospedagens já dá). Atrás de proxy/HTTPS defina `TRUST_PROXY=1`.
- **Dados persistentes:** as notícias, uploads, configurações e a senha ficam na pasta `data/`. Em hospedagens
  com disco temporário, aponte `DATA_DIR` para um disco/volume persistente — senão tudo some a cada deploy.
- Faça backup da pasta `data/` de vez em quando (o servidor também guarda as últimas 30 versões das notícias em `data/backups/`).

## Segurança (resumo)
Senha com hash scrypt + salt · sessão em cookie HttpOnly/SameSite=Strict (Secure em HTTPS) · token anti-CSRF ·
bloqueio de 15 min após 5 tentativas erradas · uploads validados pelo conteúdo real do arquivo (PNG/JPG/GIF/WEBP/SVG,
até 8 MB; SVG com script é recusado) · arquivos enviados são servidos com CSP `sandbox` · textos nunca são inseridos como HTML ·
a pasta `data/` e o código do servidor não são acessíveis pelo navegador.

**Esqueceu a senha?** Pare o servidor, apague o arquivo `data/admin.json` e inicie de novo: um novo código de
configuração aparece no terminal.

## Estrutura
```
server.js            servidor (site + API + admin)
public/              o site (mesmas URLs de antes: /images, /noticias, /Ranking…)
public/admin/        painel de administração
dados-iniciais/      notícias e configurações originais (copiadas para data/ no primeiro início)
data/                criada automaticamente: notícias, uploads, senha, backups  (não vai pro Git)
public/_legado/      as páginas antigas noticias/1 e noticias/2 (não eram usadas por nenhum link)
```
