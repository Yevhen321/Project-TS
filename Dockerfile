FROM node
# WORKDIR /project_shop_alex
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
