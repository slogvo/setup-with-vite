<img src="https://user-images.githubusercontent.com/86196042/229306137-39955f86-026b-4ad7-829e-be0d6917ee2e.png" alt="Mô tả hình ảnh" width="500" height="300">

# Để khởi tạo một dự án ReactJS với Vite, làm theo các bước sau:

## Đảm bảo rằng bạn đã cài đặt Node.js và npm trên máy tính của mình.

## Mở terminal và tạo một thư mục mới cho dự án của bạn:

mkdir my-react-app

## Di chuyển vào thư mục mới và khởi tạo một dự án npm:

cd my-react-app
npm init -y

## Cài đặt Vite và ReactJS:

npm install vite react react-dom

## Tạo một file index.html trong thư mục gốc của dự án và thêm nội dung sau:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>

## Tạo một thư mục mới có tên là src trong thư mục gốc của dự án và tạo một file có tên là index.jsx trong đó:

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
return <h1>Hello, World!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));

## Mở terminal và chạy lệnh sau để khởi chạy dự án của bạn:

npx vite

## Mở trình duyệt của bạn và truy cập địa chỉ mà Vite đề xuất

# Dưới đây là một số cấu hình thường được sử dụng trong vite.config.js:

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
plugins: [reactRefresh()],
server: {
port: 3000, // Cổng mặc định của server
open: true, // Tự động mở trình duyệt khi khởi động server
},
build: {
outDir: 'dist', // Thư mục đầu ra khi build
sourcemap: true, // Tạo sourcemap khi build
minify: 'terser', // Sử dụng Terser để nén code
},
optimizeDeps: {
include: ['react', 'react-dom'], // Các package sẽ được tối ưu hóa
},
});

# Cấu hình TailwindCSS

## Để cài đặt Tailwind CSS với dự án Vitejs, bạn có thể làm theo các bước sau:

### 1. Cài đặt Tailwind CSS và PostCSS

--> Chạy lệnh sau để cài đặt Tailwind CSS và PostCSS:
npm install -D tailwindcss postcss autoprefixer

### 2.Tạo file postcss.config.js

--> Tạo file postcss.config.js trong thư mục gốc của dự án và thêm nội dung sau:

module.exports = {
plugins: [
require('tailwindcss'),
require('autoprefixer'),
],
};

### 3.Tạo file tailwind.config.js

--> Tạo file tailwind.config.js trong thư mục gốc của dự án và thêm nội dung sau:

module.exports = {
mode: 'jit',
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
theme: {
extend: {},
},
variants: {},
plugins: [],
};

Trong đó, mode được đặt là 'jit' để sử dụng Just-in-Time Compiler của Tailwind CSS, purge được cấu hình để xóa các lớp không sử dụng khi build dự án và chỉ giữ lại các lớp được sử dụng trong các tệp HTML và JavaScript, theme được sử dụng để định nghĩa các biến và mở rộng các thuộc tính của Tailwind CSS, variants và plugins được sử dụng để cấu hình các biến và plugin của Tailwind CSS.

### 4.Thêm Tailwind CSS vào CSS của bạn

Trong file CSS của bạn, bạn có thể sử dụng Tailwind CSS bằng cách thêm các lớp CSS vào các phần tử HTML. Ví dụ:

/_ styles.css _/
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

Cấu hình Vite để sử dụng PostCSS
Trong tệp vite.config.js, thêm cấu hình để sử dụng PostCSS:

...
css: {
postcss: {
plugins: [require('tailwindcss'), require('autoprefixer')],
},
},
...

Trong đó, css.postcss.plugins được sử dụng để cấu hình PostCSS và bao gồm Tailwind CSS và Autoprefixer.

Sau khi hoàn thành các bước trên, bạn đã cài đặt và sử dụng Tailwind CSS với dự án Vitejs của mình.
