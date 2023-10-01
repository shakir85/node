FROM node:10-alpine

EXPOSE 3000

WORKDIR /node

COPY app.js package.json package-lock.json* ./ 

RUN npm install \
     && npm cache clean --force

USER node

CMD [ "node", "./app.js" ]
