FROM node:fermium-buster-slim
RUN mkdir /app
WORKDIR /app
COPY . /app/
RUN cd /app \
    && npm install --save --production
CMD [ "node", "/app/index.js" ]