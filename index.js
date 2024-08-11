const express = require('express');
const morgan = require('morgan'); // this package basically helps in good logging
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');


const app= express();

const PORT=3005;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 2 minutes).
})


app.use(morgan('combined'));

// Apply the rate limiting middleware to all requests.
app.use(limiter);

const exampleProxy = createProxyMiddleware({
    target: 'http://localhost:3002/', // target host with the same base path
    changeOrigin: true, // needed for virtual hosted sites
});
  
// mount `exampleProxy` in web server
app.use('/bookingservice', exampleProxy);

app.get('/home', (req, res) =>{
    return res.json({message: "OK"});
})

app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
})