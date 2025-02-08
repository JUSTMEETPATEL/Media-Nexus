# Use latest Node.js version
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files (including `src/`)
COPY . .  

# Generate Prisma client (for DB queries)
RUN npx prisma generate

# Build the Next.js app for production
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
