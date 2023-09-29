FROM node:10-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY app.js package.json package-lock.json* ./ 

RUN npm install \
     && npm cache clean --force

CMD [ "node", "./app.js" ]
