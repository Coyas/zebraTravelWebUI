# zebraTravelWebUI

![](http://zebratravel.innovatmedialab.com/img/Zebralogo.svg)

## Feramentas

-   Frameword [Nextjs](https://nextjs.org/)
-   Livraria [Reactjs](https://reactjs.org/)
-   Compilador css [sass](https://sass-lang.com/)
-   Framework css [bulma](https://bulma.io/)
-   Modulo react-hook para formulario [react-hook-form](https://react-hook-form.com/)
-   Framework de internacionalizacao [i18next](https://www.i18next.com/)

## Scripts de inicializacao

### inicar o app para desenvolvimento

-   npm run dev

### conpilar o codigo ( gerar o estatic site )

-   npm run build

### iniciar o app em producao

-   npm run start

## Inicializar o app com o [PM2](https://pm2.keymetrics.io/)

### Desenvolvimento

-   pm2 start npm --name "zebraTravel" -- run dev (so para testes)

### Producao

-   npm run build
-   pm2 start npm --name "zebraTravel" -- start (depois de usar o )
