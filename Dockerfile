FROM node:18-alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./

# RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
