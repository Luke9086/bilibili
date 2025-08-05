// 运行前：node request-vercel.js

import https from 'https';

const url = 'https://my-api-rosy-gamma.vercel.app/api/hello';

console.log(`请求: ${url}`);

const start = Date.now();

https.get(url, (res) => {
  let data = '';

  console.log(`状态码: ${res.statusCode}`);

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    const duration = Date.now() - start;
    console.log(`响应时间: ${duration}ms`);
    console.log('返回内容:', data);
  });

}).on('error', (err) => {
  console.error('请求出错:', err.message);
});
