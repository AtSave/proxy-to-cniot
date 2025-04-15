const express = require('express');
const app = express();

app.use((req, res) => {
  // 取得路徑，例如 /DongYi、/Ben
  const pathParts = req.path.split('/');
  
  // ✅ 若沒有路徑，則空字串（不預設 DongYi）
  const companyTag = pathParts[1] || '';

  // ✅ 轉址目標網址
  const target = `https://gc.cniot.vip/#/iot-atsave-${companyTag}`;

  // ✅ 執行轉址
  res.redirect(302, target);
});

// 指定 Railway 使用的 PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
