# Stage 1: Build the React Application
FROM node:20-alpine as builder

WORKDIR /app

# Cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn và build
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy file cấu hình Nginx custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy các file static đã được build từ stage trước
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
