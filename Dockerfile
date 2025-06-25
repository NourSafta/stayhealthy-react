# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Run the server
CMD ["node", "server/index.js"]
