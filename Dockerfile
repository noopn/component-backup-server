FROM node:16

RUN mkdir -p /supos

COPY . /supos

# WORKDIR /supos-app-backup

# RUN npm install

# CMD ["npm","start"]