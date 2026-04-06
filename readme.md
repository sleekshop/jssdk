# Sleekshop JS SDK 3.0

This is the official Sleekshop JS SDK for the Sleekshop API. It is a wrapper around the Sleekshop API, which provides a simple way to interact with the API.

> Sleekshop is a cloudbased e-commerce platform which allows you to deploy e-commerce functionality via API into your projects no matter what kind of programming - language you want to use, or which devices you want to address. 

More about Sleekshop can be found at [https://www.sleekshop.io](https://www.sleekshop.io)

## Documentation

For more information about the Sleekshop API, please refer to the [official documentation](https://www.sleekshop.io/en/api-documentation).

## Installation

```bash
# Using npm
npm install sleekshop-js-sdk

# Using yarn
yarn add sleekshop-js-sdk

# Using pnpm
pnpm add sleekshop-js-sdk

# Using bun
bun add sleekshop-js-sdk
```

## Usage

### 1. Setup SDK

First you need to initialize the sdk:
```javascript
import Sleekshop from 'sleekshop-js-sdk';

const sleekshop = new Sleekshop(
    "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
    "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
    "jYkL7fPmQw2eVtNgHs3S", // licence password
    "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
);
```

### 2. Interact with the API

Now you can use the sdk to interact with the API. For example, to get a new session:

_ESM:_
```javascript
const session = await sleekshop.sessions.getNewSession();
```
_CommonJS:_
```javascript
sleekshop.sessions.getNewSession().then((session) => {
    console.log(session);
});
```

## Available Methods

```
+-- aggregation
|  +-- .aggregate()
+-- applications
|  +-- .applicationApiCall()
+-- cart
|  +-- .addToCart()
|  +-- .subFromCart()
|  +-- .delFromCart()
|  +-- .clearCart()
|  +-- .getCart()
+-- categories
|  +-- .getCategories()
|  +-- .getProductsInCategory()
|  +-- .getContentsInCategory()
|  +-- .getShopobjectsInCategory()
|  +-- .dumpCategory()
|  +-- .seoGetProductsInCategory()
|  +-- .seoGetContentsInCategory()
|  +-- .seoGetShopobjectsInCategory()
|  +-- .createCategory()
|  +-- .updateCategory()
|  +-- .deleteCategory()
+-- classes
|  +-- .getClassDetails()
|  +-- .createClass()
|  +-- .deleteClass()
|  +-- .createClassAttributes()
|  +-- .deleteClassAttributes()
+-- coupons
|  +-- .addCoupons()
|  +-- .createCoupons()
+-- orders
|  +-- .setOrderDetails()
|  +-- .getDeliveryCountries()
|  +-- .updateOrderDetails()
|  +-- .getOrderDetails()
|  +-- .getOrderById()
|  +-- .checkout()
|  +-- .getInvoice()
|  +-- .getOrderConfirmation()
+-- payment
|  +-- .getPaymentMethods()
|  +-- .doPayment()
|  +-- .addDeliveryCosts()
+-- search
|  +-- .searchProducts()
|  +-- .searchContents()
|  +-- .searchDistinctProducts()
|  +-- .searchOrders()
|  +-- .searchUsers()
|  +-- .searchWarehouseEntities()
+-- server
|  +-- .getStatus()
|  +-- .createChannel()
+-- sessions
|  +-- .getNewSession()
+-- shopObjects
|  +-- .getProductDetails()
|  +-- .getContentDetails()
|  +-- .seoGetProductDetails()
|  +-- .seoGetContentDetails()
|  +-- .createProduct()
|  +-- .updateProduct()
|  +-- .createVariation()
|  +-- .deleteProduct()
|  +-- .deleteContent()
|  +-- .updateContent()
+-- user
|  +-- .registerUser()
|  +-- .verifyUser()
|  +-- .loginUser()
|  +-- .logoutUser()
|  +-- .setUserPassword()
|  +-- .resetUserPasswordInit()
|  +-- .resetUserPasswordSuccess()
|  +-- .getUserOrders()
|  +-- .getUserData()
|  +-- .getUserById()
|  +-- .setUserData()
|  +-- .updateUserData()
|  +-- .instantLogin()
+-- warehouse
|  +-- .createWarehouseEntity()
|  +-- .updateWarehouseEntity()
|  +-- .deleteWarehouseEntity()
|  +-- .inventoryPlace()
|  +-- .inventoryTake()
|  +-- .addBinding()
|  +-- .deleteBinding()
+-- webhooks
|  +-- .createWebhook()
|  +-- .updateWebhook()

```

---

# Definitions

## aggregation

### `.aggregate()`

```typescript
public async aggregate({ pipe }: { pipe: object }): Promise<object> {
```

```javascript
- **Parameter**: `pipe` (Object) -
- **Returns**: Object Object of aggregated data.
- **Returns**: object
```

---

## applications

### `.applicationApiCall()`

```typescript
public async applicationApiCall({application, app_request, args}:{application: string,app_request: string,args: object}): Promise<object> {
```

```javascript
- **Parameter**: `application` (String) - 
- **Parameter**: `app_request` (String) - 
- **Parameter**: `args` (Object) - 
- **Returns**: Object Object of application api call.
- **Returns**: object
```

---

## cart

### `.addToCart()`

```typescript
public async addToCart({session,id_shopobject,element_type,id_parent_element = 0,quantity = 1,price_field = "price",name_field = "name",description_field = "short_description",language = null,country = "DE",attributes = []}:{session: string,id_shopobject: number,element_type: string,id_parent_element?: number,quantity?: number,price_field?: string,name_field?: string,description_field?: string,language?: string | null;country?: string,attributes?: Array<object>}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `id_shopobject` (Number) - 
- **Parameter**: `element_type` (String) - 
- **Parameter**: `id_parent_element` (Number) - 
- **Parameter**: `quantity` (Number) - 
- **Parameter**: `price_field` (String) - 
- **Parameter**: `name_field` (String) - 
- **Parameter**: `description_field` (String) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `undefined` (attributes) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.subFromCart()`

```typescript
public async subFromCart({session,id_element}:{session: string,id_element: number}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `id_element` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.delFromCart()`

```typescript
public async delFromCart({session,id_element}:{session: string,id_element: number}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `id_element` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.clearCart()`

```typescript
public async clearCart({session}: { session: string }): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getCart()`

```typescript
public async getCart({session}: { session: string }): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

## categories

### `.getCategories()`

```typescript
public async getCategories({id_parent,language = null,}:{id_parent: number,language?: string | null;}): Promise<ICategories | object> {
```

```javascript
- **Parameter**: `id_parent` (Number) - 
- **Parameter**: `language` (String) - 
- **Returns**: ISession Object of session with either an existing or new session.
- **Returns**: ICategories | object
```

---

### `.getProductsInCategory()`

```typescript
public async getProductsInCategory({id_category,language = null,country = 'DE',order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = []}:{id_category: number,language?: string | null;country?: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<IProductsInCategory | object> {
```

```javascript
- **Parameter**: `id_category` (Number) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: IProductsInCategory Object of products in category.
- **Returns**: IProductsInCategory | object
```

---

### `.getContentsInCategory()`

```typescript
public async getContentsInCategory({id_category,language = null,order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = [],}:{id_category: number,language?: string | null;order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>}): Promise<IContentsInCategory | object> {
```

```javascript
- **Parameter**: `id_category` (Number) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: IContentsInCategory Object of products in category.
- **Returns**: IContentsInCategory | object
```

---

### `.getShopobjectsInCategory()`

```typescript
public async getShopobjectsInCategory({id_category,language = null,country = 'DE',order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = [],}: {id_category: number,language?: string | null;country?: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>}): Promise<IShopobjectsInCategory | object> {
```

```javascript
- **Parameter**: `id_category` (Number) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: IShopobjectsInCategory Object of products in category.
- **Returns**: IShopobjectsInCategory | object
```

---

### `.dumpCategory()`

```typescript
public async dumpCategory({id_category,language = null,country = 'DE',order_columns = ['prio'],order = 'ASC',left_limit = 0,right_limit = 0,depth = 0,needed_attributes = [],}: {id_category: number,language?: string | null;country?: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,depth?: number,needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<IDumpCategory | object> {
```

```javascript
- **Parameter**: `id_category` (Number) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `depth` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: IDumpCategory Object of products in category.
- **Returns**: IDumpCategory | object
```

---

### `.seoGetProductsInCategory()`

```typescript
public async seoGetProductsInCategory({permalink,language = null,country = 'DE',order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = [],}:{permalink: string,language?: string | null;country?: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<object> {
```

```javascript
- **Parameter**: `permalink` (String) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

### `.seoGetContentsInCategory()`

```typescript
public async seoGetContentsInCategory({permalink,order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = [],}:{permalink: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<object> {
```

```javascript
- **Parameter**: `permalink` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

### `.seoGetShopobjectsInCategory()`

```typescript
public async seoGetShopobjectsInCategory({permalink,order_columns = [],order = 'ASC',left_limit = 0,right_limit = 0,needed_attributes = [],}:{permalink: string,order_columns?: Array<string>,order?: string,left_limit?: number,right_limit?: number,needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<object> {
```

```javascript
- **Parameter**: `permalink` (String) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

### `.createCategory()`

```typescript
public async createCategory({id_parent,name,labels = {},seo = {},}:{id_parent: number,name: string,labels?: object,seo?: object,}): Promise<object> {
```

```javascript
- **Parameter**: `id_parent` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `labels` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

### `.updateCategory()`

```typescript
public async updateCategory({id_parent,name,labels = null,attributes = null,seo = null,}:{id_parent: number,name: string,labels?: object | null,attributes?: object | null,seo?: object | null,}): Promise<object> {
```

```javascript
- **Parameter**: `id_parent` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `labels` (Object) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

### `.deleteCategory()`

```typescript
public async deleteCategory({id_category}: { id_category: number, }): Promise<object> {
```

```javascript
- **Parameter**: `id_category` (Number) - 
- **Returns**: Object Object of products in category.
- **Returns**: object
```

---

## classes

### `.getClassDetails()`

```typescript
public async getClassDetails({id_class,language = null,}:{id_class: number,language?: string | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_class` (Number) - 
- **Parameter**: `language` (String) - 
- **Returns**: object Object of class details.
- **Returns**: object
```

---

### `.createClass()`

```typescript
public async createClass({name,type,}: {name: string;type: string;}): Promise<object> {
```

```javascript
- **Parameter**: `name` (String) - 
- **Parameter**: `type` (String) - 
- **Returns**: object Object of created class.
- **Returns**: object
```

---

### `.deleteClass()`

```typescript
public async deleteClass({id_class,}: {id_class: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_class` (Number) - 
- **Returns**: object Object of deleted class.
- **Returns**: object
```

---

### `.createClassAttributes()`

```typescript
public async createClassAttributes({id_class,attributes,}: {id_class: number;attributes: Array<object>;}): Promise<object> {
```

```javascript
- **Parameter**: `id_class` (Number) - 
- **Parameter**: `attributes` (Array<Object>) - 
- **Returns**: object Object of created class attributes.
- **Returns**: object
```

---

### `.deleteClassAttributes()`

```typescript
public async deleteClassAttributes({id_class,attributes,}: {id_class: number;attributes: Array<string>;}): Promise<object> {
```

```javascript
- **Parameter**: `id_class` (Number) - 
- **Parameter**: `attributes` (Array<String>) - 
- **Returns**: object Object of deleted class attributes.
- **Returns**: object
```

---

## coupons

### `.addCoupons()`

```typescript
public async addCoupons({session,coupons}:{session: string,coupons: Array<Array<string>>}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `coupons` (Array<Array<String>>) - 
- **Returns**: Object Object of added coupons.
- **Returns**: object
```

---

### `.createCoupons()`

```typescript
public async createCoupons({count,name,amount,type,code,attributes}:{count: number,name: string,amount: number,type: string,code?: string,attributes?: object}): Promise<object> {
```

```javascript
- **Parameter**: `count` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `amount` (Number) - 
- **Parameter**: `type` (String) - 
- **Parameter**: `code` (String) - 
- **Parameter**: `attributes` (Object) - 
- **Returns**: Object Object of created coupons.
- **Returns**: object
```

---

## orders

### `.setOrderDetails()`

```typescript
public async setOrderDetails({session,id_payment_method,id_delivery_method,delivery_companyname,delivery_department,delivery_salutation,delivery_firstname,delivery_lastname,delivery_street,delivery_number,delivery_zip,delivery_state,delivery_city,delivery_country,invoice_companyname,invoice_department,invoice_salutation,invoice_firstname,invoice_lastname,invoice_street,invoice_number,invoice_zip,invoice_state,invoice_city,invoice_country,note,email,phone,attributes}: {session: string;id_payment_method?: number;id_delivery_method?: number;delivery_companyname?: string;delivery_department?: string;delivery_salutation?: string;delivery_firstname?: string;delivery_lastname?: string;delivery_street?: string;delivery_number?: string;delivery_zip?: string;delivery_state?: string;delivery_city?: string;delivery_country?: string;invoice_companyname?: string;invoice_department?: string;invoice_salutation?: string;invoice_firstname?: string;invoice_lastname?: string;invoice_street?: string;invoice_number?: string;invoice_zip?: string;invoice_state?: string;invoice_city?: string;invoice_country?: string;note?: string;email?: string;phone?: string;attributes?: Array<object>;}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `[id_payment_method]` (Number) - 
- **Parameter**: `[id_delivery_method]` (Number) - 
- **Parameter**: `[delivery_companyname]` (String) - 
- **Parameter**: `[delivery_department]` (String) - 
- **Parameter**: `[delivery_salutation]` (String) - 
- **Parameter**: `[delivery_firstname]` (String) - 
- **Parameter**: `[delivery_lastname]` (String) - 
- **Parameter**: `[delivery_street]` (String) - 
- **Parameter**: `[delivery_number]` (String) - 
- **Parameter**: `[delivery_zip]` (String) - 
- **Parameter**: `[delivery_state]` (String) - 
- **Parameter**: `[delivery_city]` (String) - 
- **Parameter**: `[delivery_country]` (String) - 
- **Parameter**: `[invoice_companyname]` (String) - 
- **Parameter**: `[invoice_department]` (String) - 
- **Parameter**: `[invoice_salutation]` (String) - 
- **Parameter**: `[invoice_firstname]` (String) - 
- **Parameter**: `[invoice_lastname]` (String) - 
- **Parameter**: `[invoice_street]` (String) - 
- **Parameter**: `[invoice_number]` (String) - 
- **Parameter**: `[invoice_zip]` (String) - 
- **Parameter**: `[invoice_state]` (String) - 
- **Parameter**: `[invoice_city]` (String) - 
- **Parameter**: `[invoice_country]` (String) - 
- **Parameter**: `[note]` (String) - 
- **Parameter**: `[email]` (String) - 
- **Parameter**: `[phone]` (String) - 
- **Parameter**: `[attributes]` (Array<Object>) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getDeliveryCountries()`

```typescript
public async getDeliveryCountries(): Promise<object> {
```

```javascript
- **Returns**: Object Object of delivery countries.
```

---

### `.updateOrderDetails()`

```typescript
public async updateOrderDetails({id_order,id_payment_method,id_delivery_method,order_state,order_payment_state,order_delivery_state,delivery_companyname,delivery_department,delivery_salutation,delivery_firstname,delivery_lastname,delivery_street,delivery_number,delivery_zip,delivery_state,delivery_city,delivery_country,invoice_companyname,invoice_department,invoice_salutation,invoice_firstname,invoice_lastname,invoice_street,invoice_number,invoice_zip,invoice_state,invoice_city,invoice_country,note,email,phone,attributes}: {id_order: number;id_payment_method?: number;id_delivery_method?: number;order_state?: string;order_payment_state?: string;order_delivery_state?: string;delivery_companyname?: string;delivery_department?: string;delivery_salutation?: string;delivery_firstname?: string;delivery_lastname?: string;delivery_street?: string;delivery_number?: string;delivery_zip?: string;delivery_state?: string;delivery_city?: string;delivery_country?: string;invoice_companyname?: string;invoice_department?: string;invoice_salutation?: string;invoice_firstname?: string;invoice_lastname?: string;invoice_street?: string;invoice_number?: string;invoice_zip?: string;invoice_state?: string;invoice_city?: string;invoice_country?: string;note?: string;email?: string;phone?: string;attributes?: Array<object>;}): Promise<object> {
```

```javascript
- **Parameter**: `id_order` (Number) - 
- **Parameter**: `[id_payment_method]` (Number) - 
- **Parameter**: `[id_delivery_method]` (Number) - 
- **Parameter**: `[order_state]` (String) - 
- **Parameter**: `[order_payment_state]` (String) - 
- **Parameter**: `[order_delivery_state]` (String) - 
- **Parameter**: `[delivery_companyname]` (String) - 
- **Parameter**: `[delivery_department]` (String) - 
- **Parameter**: `[delivery_salutation]` (String) - 
- **Parameter**: `[delivery_firstname]` (String) - 
- **Parameter**: `[delivery_lastname]` (String) - 
- **Parameter**: `[delivery_street]` (String) - 
- **Parameter**: `[delivery_number]` (String) - 
- **Parameter**: `[delivery_zip]` (String) - 
- **Parameter**: `[delivery_state]` (String) - 
- **Parameter**: `[delivery_city]` (String) - 
- **Parameter**: `[delivery_country]` (String) - 
- **Parameter**: `[invoice_companyname]` (String) - 
- **Parameter**: `[invoice_department]` (String) - 
- **Parameter**: `[invoice_salutation]` (String) - 
- **Parameter**: `[invoice_firstname]` (String) - 
- **Parameter**: `[invoice_lastname]` (String) - 
- **Parameter**: `[invoice_street]` (String) - 
- **Parameter**: `[invoice_number]` (String) - 
- **Parameter**: `[invoice_zip]` (String) - 
- **Parameter**: `[invoice_state]` (String) - 
- **Parameter**: `[invoice_city]` (String) - 
- **Parameter**: `[invoice_country]` (String) - 
- **Parameter**: `[note]` (String) - 
- **Parameter**: `[email]` (String) - 
- **Parameter**: `[phone]` (String) - 
- **Parameter**: `[attributes]` (Array<Object>) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getOrderDetails()`

```typescript
public async getOrderDetails({session}: {session: string;}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getOrderById()`

```typescript
public async getOrderById({id_order,language = null,}: {id_order: number;language?: string | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_order` (Number) - 
- **Parameter**: `language` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.checkout()`

```typescript
public async checkout({session}: {session: string;}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getInvoice()`

```typescript
public async getInvoice({id_order}: {id_order: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_order` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getOrderConfirmation()`

```typescript
public async getOrderConfirmation({id_order,args = {}}: {id_order: number;args?: object;}): Promise<object> {
```

```javascript
- **Parameter**: `id_order` (Number) - 
- **Parameter**: `args` (Object) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

## payment

### `.getPaymentMethods()`

```typescript
public async getPaymentMethods(): Promise<object> {
```

```javascript
- **Returns**: Object Object of payment methods.
```

---

### `.doPayment()`

```typescript
public async doPayment({id_order,args = []}: {id_order: number;args?: Array<any>;}): Promise<object> {
```

```javascript
- **Parameter**: `id_order` (Number) - 
- **Parameter**: `args` (Array) - 
- **Returns**: Object Object of payment details.
- **Returns**: object
```

---

### `.addDeliveryCosts()`

```typescript
public async addDeliveryCosts({session,delivery_costs = []}: {session: string;delivery_costs?: Array<any>;}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `delivery_costs` (Array) - 
- **Returns**: Object Object of delivery costs.
- **Returns**: object
```

---

## search

### `.searchProducts()`

```typescript
public async searchProducts({constraint = {},language = null,country = "DE",order_columns = [],order_type = "ASC",left_limit = 0,right_limit = 0,needed_attributes = []}: {constraint?: object;language?: string | null;country?: string;order_columns?: Array<string>;order_type?: string;left_limit?: number;right_limit?: number;needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<object> {
```

```javascript
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `order_columns` (Array<String>) - 
- **Parameter**: `order_type` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.searchContents()`

```typescript
public async searchContents({constraint = {},language = null,order_columns = [],order_type = "ASC",left_limit = 0,right_limit = 0,needed_attributes = []}: {constraint?: object;language?: string | null;order_columns?: Array<string>;order_type?: string;left_limit?: number;right_limit?: number;needed_attributes?: Array<string> | Array<Array<string>>;}): Promise<object> {
```

```javascript
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `order_columns` (Array<String>) - 
- **Parameter**: `order_type` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of content details.
- **Returns**: object
```

---

### `.searchDistinctProducts()`

```typescript
public async searchDistinctProducts({field,constraint = {},language = null,}: {field: string;constraint?: object;language?: string | null;}): Promise<object> {
```

```javascript
- **Parameter**: `field` (String) - 
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `language` (String) - 
- **Returns**: Object Object of distinct product details.
- **Returns**: object
```

---

### `.searchOrders()`

```typescript
public async searchOrders({constraint = {},language = null,left_limit = 0,right_limit = 0,order_columns = [],order_type = "ASC",needed_attributes = []}: {constraint?: object;language?: string | null;left_limit?: number;right_limit?: number;order_columns?: Array<any>;order_type?: string;needed_attributes?: Array<string> | Array<Array<string>>;}): Promise<object> {
```

```javascript
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `order_columns` (Array) - 
- **Parameter**: `order_type` (String) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of order details.
- **Returns**: object
```

---

### `.searchUsers()`

```typescript
public async searchUsers({constraint = {},order_columns = [],order_type = "ASC",left_limit = 0,right_limit = 0,needed_attributes = []}: {constraint?: object;order_columns?: Array<string>;order_type?: string;left_limit?: number;right_limit?: number;needed_attributes?: Array<string> | Array<Array<string>>;}): Promise<object> {
```

```javascript
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `order_columns` (Array<String>) - 
- **Parameter**: `order_type` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of user details.
- **Returns**: object
```

---

### `.searchWarehouseEntities()`

```typescript
public async searchWarehouseEntities({constraint = {},language = null,order_columns = [],order_type = "",left_limit = 0,right_limit = 0,needed_attributes = []}: {constraint?: object;language?: string | null;order_columns?: Array<string>;order_type?: string;left_limit?: number;right_limit?: number;needed_attributes?: Array<string> | Array<Array<string>>,}): Promise<object> {
```

```javascript
- **Parameter**: `constraint` (Object) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `order_columns` (Array<String>) - 
- **Parameter**: `order_type` (String) - 
- **Parameter**: `left_limit` (Number) - 
- **Parameter**: `right_limit` (Number) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: object
```

---

## server

### `.getStatus()`

```typescript
public async getStatus(): Promise<object> {
```

```javascript
- **Returns**: Object Object of status.
```

---

### `.createChannel()`

```typescript
public async createChannel({name,description,shop_active,server_output = 'json'}: {name: string;description: string;shop_active: number;server_output?: string;}): Promise<object> {
```

```javascript
- **Parameter**: `name` (String) - 
- **Parameter**: `description` (String) - 
- **Parameter**: `shop_active` (Number) - 
- **Parameter**: `server_output` (String) - 'json' | 'xml'
- **Returns**: Object Object of created channel.
- **Returns**: object
```

---

## sessions

### `.getNewSession()`

```typescript
public async getNewSession(): Promise<ISession | object> {
```

```javascript
- **Returns**: ISession Object of session with either an existing or new session.
```

---

## shopobjects

### `.getProductDetails()`

```typescript
public async getProductDetails({id_product,language = null,country = "DE",needed_attributes = []}: {id_product: number;language?: string | null;country?: string;needed_attributes?: Array<string> | Array<Array<string>>;}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getContentDetails()`

```typescript
public async getContentDetails({id_content,language = null,}: {id_content: number;language?: string | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_content` (Number) - 
- **Parameter**: `language` (String) - 
- **Returns**: Object Object of content details.
- **Returns**: object
```

---

### `.seoGetProductDetails()`

```typescript
public async seoGetProductDetails({permalink,country = "DE",needed_attributes = []}: {permalink: string;country?: string;needed_attributes?: Array<string> | Array<Array<string>>;}): Promise<object> {
```

```javascript
- **Parameter**: `permalink` (String) - 
- **Parameter**: `country` (String) - 
- **Parameter**: `needed_attributes` (Array<String|Array<String>>) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.seoGetContentDetails()`

```typescript
public async seoGetContentDetails({permalink}: {permalink: string;}): Promise<object> {
```

```javascript
- **Parameter**: `permalink` (String) - 
- **Returns**: Object Object of content details.
- **Returns**: object
```

---

### `.createProduct()`

```typescript
public async createProduct({class_,name,shop_active = 1,attributes = null,metadata = null,seo = null,availability = null}: {class_: string;name: string;shop_active?: number | null;attributes?: object | null;metadata?: object | null;seo?: object | null;availability?: object | null;}): Promise<object> {
```

```javascript
- **Parameter**: `class_` (String) - escaped since class is a reserved keyword
- **Parameter**: `name` (String) - 
- **Parameter**: `shop_active` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `metadata` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Parameter**: `availability` (Object) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.updateProduct()`

```typescript
public async updateProduct({id_product,name = null,shop_active = 1,attributes = null,metadata = null,seo = null,availability = null}: {id_product: number;name: string | null;shop_active?: number | null;attributes?: object | null;metadata?: object | null;seo?: object | null;availability?: object | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `shop_active` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `metadata` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Parameter**: `availability` (Object) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.createVariation()`

```typescript
public async createVariation({id_product,name,shop_active = 1,attributes = null,metadata = null,seo = null,availability = null}: {id_product: number;name: string;shop_active?: number;attributes?: object | null;metadata?: object | null;seo?: object | null;availability?: object | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `shop_active` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `metadata` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Parameter**: `availability` (Object) - 
- **Returns**: Object Object of variation details.
- **Returns**: object
```

---

### `.deleteProduct()`

```typescript
public async deleteProduct({id_product}: {id_product: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.deleteContent()`

```typescript
public async deleteContent({id_content}: {id_content: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_content` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.updateContent()`

```typescript
public async updateContent({id_content,name = null,shop_active = 1,attributes = null,seo = null}: {id_content: number;name?: string | null;shop_active?: number;attributes?: object | null;seo?: object | null;}): Promise<object> {
```

```javascript
- **Parameter**: `id_content` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `shop_active` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `seo` (Object) - 
- **Returns**: Object Object of content details.
- **Returns**: object
```

---

## user

### `.registerUser()`

```typescript
public async registerUser({username,passwd1,passwd2,email,language = null,class_ = "user"}:{username: string,passwd1: string,passwd2: string,email: string,language?: string | null;class_?: string}): Promise<object> {
```

```javascript
- **Parameter**: `username` (String) - 
- **Parameter**: `passwd1` (String) - 
- **Parameter**: `passwd2` (String) - 
- **Parameter**: `email` (String) - 
- **Parameter**: `language` (String) - 
- **Parameter**: `undefined` (class_) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.verifyUser()`

```typescript
public async verifyUser({id_user,session_id}:{id_user: number,session_id: string}): Promise<object> {
```

```javascript
- **Parameter**: `id_user` (Number) - 
- **Parameter**: `session_id` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.loginUser()`

```typescript
public async loginUser({username,password,session}:{username: string,password: string,session: string}): Promise<object> {
```

```javascript
- **Parameter**: `username` (String) - 
- **Parameter**: `password` (String) - 
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.logoutUser()`

```typescript
public async logoutUser({session}: { session: string }): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.setUserPassword()`

```typescript
public async setUserPassword({session,old_passwd,new_passwd1,new_passwd2}:{session: string,old_passwd: string,new_passwd1: string,new_passwd2: string}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `old_passwd` (String) - 
- **Parameter**: `new_passwd1` (String) - 
- **Parameter**: `new_passwd2` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.resetUserPasswordInit()`

```typescript
public async resetUserPasswordInit({email}: { email: string }): Promise<object> {
```

```javascript
- **Parameter**: `email` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.resetUserPasswordSuccess()`

```typescript
public async resetUserPasswordSuccess({session_id,id_user,new_passwd1,new_passwd2}:{session_id: string,id_user: number,new_passwd1: string,new_passwd2: string}): Promise<object> {
```

```javascript
- **Parameter**: `session_id` (String) - 
- **Parameter**: `id_user` (Number) - 
- **Parameter**: `new_passwd1` (String) - 
- **Parameter**: `new_passwd2` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getUserOrders()`

```typescript
public async getUserOrders({session}: { session: string }): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getUserData()`

```typescript
public async getUserData({session}: { session: string }): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.getUserById()`

```typescript
public async getUserById({id_user}: { id_user: number }): Promise<object> {
```

```javascript
- **Parameter**: `id_user` (Number) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.setUserData()`

```typescript
public async setUserData({session,attributes}:{session: string,attributes: object}): Promise<object> {
```

```javascript
- **Parameter**: `session` (String) - 
- **Parameter**: `attributes` (Object) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.updateUserData()`

```typescript
public async updateUserData({id_user,attributes}:{id_user: number,attributes: object}): Promise<object> {
```

```javascript
- **Parameter**: `id_user` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

### `.instantLogin()`

```typescript
public async instantLogin({token,application_token}:{token: string,application_token: string}): Promise<object> {
```

```javascript
- **Parameter**: `token` (String) - 
- **Parameter**: `application_token` (String) - 
- **Returns**: Object Object of product details.
- **Returns**: object
```

---

## warehouse

### `.createWarehouseEntity()`

```typescript
public async createWarehouseEntity({class_,name,id_manufacturer,attributes,metadata}: {class_: string;name: string;id_manufacturer: number;attributes: object;metadata: object;}): Promise<object> {
```

```javascript
- **Parameter**: `class_` (String) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `id_manufacturer` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `metadata` (Object) - 
- **Returns**: Object Object of created warehouse entity.
- **Returns**: object
```

---

### `.updateWarehouseEntity()`

```typescript
public async updateWarehouseEntity({id_warehouse_entity,name,id_manufacturer,attributes,metadata}: {id_warehouse_entity: number;name: string;id_manufacturer: number;attributes: object;metadata: object;}): Promise<object> {
```

```javascript
- **Parameter**: `id_warehouse_entity` (Number) - 
- **Parameter**: `name` (String) - 
- **Parameter**: `id_manufacturer` (Number) - 
- **Parameter**: `attributes` (Object) - 
- **Parameter**: `metadata` (Object) - 
- **Returns**: Object Object of updated warehouse entity.
- **Returns**: object
```

---

### `.deleteWarehouseEntity()`

```typescript
public async deleteWarehouseEntity({id_warehouse_entity}: {id_warehouse_entity: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_warehouse_entity` (Number) - 
- **Returns**: Object Object of deleted warehouse entity.
- **Returns**: object
```

---

### `.inventoryPlace()`

```typescript
public async inventoryPlace({storage,element_number,quantity,note}: {storage: string;element_number: string;quantity: number;note: string;}): Promise<object> {
```

```javascript
- **Parameter**: `storage` (String) - 
- **Parameter**: `element_number` (String) - 
- **Parameter**: `quantity` (Number) - 
- **Parameter**: `note` (String) - 
- **Returns**: Object Object of inventory place.
- **Returns**: object
```

---

### `.inventoryTake()`

```typescript
public async inventoryTake({storage,element_number,quantity,note}: {storage: string;element_number: string;quantity: number;note: string;}): Promise<object> {
```

```javascript
- **Parameter**: `storage` (String) - 
- **Parameter**: `element_number` (String) - 
- **Parameter**: `quantity` (Number) - 
- **Parameter**: `note` (String) - 
- **Returns**: Object Object of inventory take.
- **Returns**: object
```

---

### `.addBinding()`

```typescript
public async addBinding({id_product,element_number,quantity = 1}: {id_product: number;element_number: string;quantity?: number;}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Parameter**: `element_number` (String) - 
- **Parameter**: `quantity` (Number) - Default is 1.
- **Returns**: Object Object of added binding.
- **Returns**: object
```

---

### `.deleteBinding()`

```typescript
public async deleteBinding({id_product,element_number}:{id_product: number,element_number: string}): Promise<object> {
```

```javascript
- **Parameter**: `id_product` (Number) - 
- **Parameter**: `element_number` (String) - 
- **Returns**: Object Object of deleted binding.
- **Returns**: object
```

---

## webhooks

### `.createWebhook()`

```typescript
public async createWebhook({name,event}: {name: string;event: string;}): Promise<object> {
```

```javascript
- **Parameter**: `name` (String) - 
- **Parameter**: `event` (String) - 
- **Returns**: Object Object of created webhook.
- **Returns**: object
```

---

### `.updateWebhook()`

```typescript
public async updateWebhook({name,url,parameter}: {name: string;url: string;parameter: string;}): Promise<object> {
```

```javascript
- **Parameter**: `name` (String) - 
- **Parameter**: `url` (String) - 
- **Parameter**: `parameter` (String) - 
- **Returns**: Object Object of updated webhook.
- **Returns**: object
```