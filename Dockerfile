FROM node:10-alpine

EXPOSE 3000

WORKDIR /node

COPY package*.json ./ 

RUN apk add --no-cache tini

RUN npm install \
     && npm cache clean --force

USER node

COPY app.js ./

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "./app.js" ]
