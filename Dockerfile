FROM node:16

RUN mkdir -p /supos

COPY . /supos

WORKDIR /supos

RUN npm install

# CMD ["npm","start"]