import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  server: {
    port: 3000, // Cổng mặc định của server
    open: true, // Tự động mở trình duyệt khi khởi động server
  },
  build: {
    outDir: "dist", // Thư mục đầu ra khi build
    sourcemap: true, // Tạo sourcemap khi build
    minify: "terser", // Sử dụng Terser để nén code
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Các package sẽ được tối ưu hóa
  },
});
