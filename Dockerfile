# Multi-stage Dockerfile for production NestJS build

# ---- Build stage ----
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies (including devDeps needed to build)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Configure container
EXPOSE 3000
ENV PORT=3000

# Start the app
CMD ["node", "dist/main.js"]
