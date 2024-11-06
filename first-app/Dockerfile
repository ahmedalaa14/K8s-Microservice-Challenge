FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
ENV PORT=8000
EXPOSE 8000
CMD ["npm" , "start"]