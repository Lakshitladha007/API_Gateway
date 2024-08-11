-> Apart from 'Frontend' and 'Backend', people also talk about 'Middle-end'

-> We need an intermediate layer between client side and the microservices

-> Using the middle-end, when client sends request we wil be able to make decision which microservice should actual respond to this request

-> Apart from this, using Middle-end we can also do message validation, response transformation, rate limiting

-> In this middle-end, we try to prepare API Gateway that acts as this middle-end.

-> In this service, we have used package named as "http-proxy-middleware"

-> The next concept that we have implemented is "Rate-limiting", for which we are going to use package named as "Express-rate-limit".
   Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset. Plays nice with express-slow-down and ratelimit-header-parser.

-> Now one more thing that we need to implement is that before a 'User' books a flight we must authenticate the user first.