FROM node:22

WORKDIR /shakovych_ruslan_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD ["npm","run","storybook"]