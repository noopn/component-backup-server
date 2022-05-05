FROM node:16

RUN mkdir -p /supos-app-backup

COPY ./* /supos-app-backup

WORKDIR /supos-app-backup

RUN npm install

CMD ["npm","start"]