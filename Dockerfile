FROM node:16

RUN mkdir -p /supos

COPY ./index.mjs /supos
COPY ./package.json /supos
WORKDIR /supos

RUN npm install

CMD ["npm","start"]