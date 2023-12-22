1) run the command "npm install" for installing node_module

2) run the command "npm run seeder" for import mock data for products collection

3) run the command "npm start" for running our app

4) import api request collection to postman (Folder : postman_requests)

API's With Endpoint

GET - http://127.0.0.1:8000/api/v1/products?category={category Name}  (Get Product By Category)

GET - http://127.0.0.1:8000/api/v1/products?keyword={Keyword in Name Field only}  (Get Product By Category)

GET - http://127.0.0.1:8000/api/v1/productsByRating  (Get Product By Category)

GET - http://127.0.0.1:8000/api/v1/productsByRating  (Get Product By Category)

GET - http://127.0.0.1:8000/api/v1/products?isFeature=true   (Get Featured Products)

GET - http://127.0.0.1:8000/api/v1/products?category=Sports&isFeature=true   (Get Featured Products By Category)

GET - http://127.0.0.1:8000/api/v1/productsByrating   (Top Rated Products)

GET - http://127.0.0.1:8000/api/v1/sales   (Best Selling Products)

GET - http://127.0.0.1:8000/api/v1/sale/new   (Insert Product Sale)

POST - http://127.0.0.1:8000/api/v1/admin/product/new   (Add Product from Admin Login)

GET - http://127.0.0.1:8000/api/v1/product/:{id}   (Get Single Product)

GET - http://127.0.0.1:8000/api/v1/products   (Get All Product)

GET - http://127.0.0.1:8000/api/v1/products?page=1   (Get All Product with pagination)

GET - http://127.0.0.1:8000/api/v1/admin/products   (Get All Product from Admin Login)

POST - http://127.0.0.1:8000/api/v1/register   (Register User)

POST - http://127.0.0.1:8000/api/v1/login   (Login User)

GET - http://127.0.0.1:8000/api/v1/logout   (Logout User)

GET - http://127.0.0.1:8000/api/v1/myprofile   (Get Logged In User Profile)
