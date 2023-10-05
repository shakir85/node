FROM node:10-alpine

EXPOSE 3000

WORKDIR /node

COPY package*.json ./ 

RUN apk add --no-cache tini

RUN npm install \
     && npm cache clean --force

USER node

COPY app.js ./

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
     CMD [ "curl", "-f", "http://localhost/healthz" ]

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "./app.js" ]
