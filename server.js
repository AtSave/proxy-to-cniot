const express = require('express');

const app = express();

const targetBase = process.env.TARGET_URL || 'https://gc.cniot.vip';

app.get('*', (req, res) => {
  const path = req.path.split('/')[1] || 'DongYi';  // 預設DongYi
  const targetURL = `${targetBase}/#/iot-atsave-${path}`;
  
  console.log(`Redirect to: ${targetURL}`);
  res.redirect(302, targetURL);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy Redirect running on port ${PORT}`);
});
