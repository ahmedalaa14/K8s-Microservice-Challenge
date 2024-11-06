FROM node 
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT = 8081
ENV API_URL = ""
EXPOSE 8081
CMD ["npm", "start"]