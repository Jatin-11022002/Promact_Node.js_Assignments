# Setup Guide

## Assignment-1

- Navigate to Assignment-1 by using the below command (Assuming to be currently in root folder):

```
cd .\Assignment-1\
```
- Now run below command to start server:
```
node server.js
```
- Now you will get **server connected on port 3000** message indicating that server is running and now you can navigate to **http://localhost:3000/** on Browser and test the application.


## Assignment-2

- Navigate to Assignment-2 by using the below command (Assuming to be currently in root folder):

```
cd .\Assignment-2\
```
- Now run below command to install necessary dependencies:
```
npm install
```
- Now run below command to start server using **nodemon**:
```
npm start
```

- Now you will get **Server is running on port 3000** message indicating that server is running and now you can navigate to **http://localhost:3000/** on Browser and test the application.


## Assignment-3
- Navigate to Assignment-3 by using the below command (Assuming to be currently in root folder):

```
cd .\Assignment-3\
```

- Now run the below command to install necessary dependencies:
```
npm install
```
- Now run below command to start server using **nodemon**:
```
npm start
```
- Now you will get **Server is running on port 3000** message indicating that server is running and now you can navigate to **http://localhost:3000/** on Browser and test the application.


## Assignment-4

**Note: You will find the reason of using "EJS" template engine at the end of this README**
- Navigate to Assignment-4 by using the below command (Assuming to be currently in root folder):

```
cd .\Assignment-4\
```

- Now run the below command to install necessary dependencies:
```
npm install
```
- Now run below command to start server using **nodemon**:
```
npm start
```
- Now you will get **Server is running on port 3000** message indicating that server is running and now you can navigate to **http://localhost:3000/** on Browser and test the application.

## Assignment-5

### Database Setup
- For this you require MySQL server as this application is using MySQL as database. If you don't have MySQL in your machine, you can navigate to https://www.mysql.com/downloads/ and get one for your machine. Ensure that while installing and setting up, you are installing MySQL server.

- Now set your configuration of MySQL (during installation process) and ensure to use legacy password protection and user credentials as below:
```
host:"localhost"
user:"root"
``` 
If you have any other credentials for above field then in **Assignment-5/database/db.js** file change the value of host and user accordingly.

- Now open MySQL workbench and create a new schema by using icon of schema with plus symbol from navigation and give name as **promact_assignment**, this will be used by the application. If you wish to use any other database then simply change the **database** field in **Assignment-5/database/db.js**.

- Required Table will be created automatically, So setup for Database is completed. 

### Backend Setup

Navigate to Assignment-5 by using the below command (Assuming to be currently in root folder):

```
cd .\Assignment-5\
```
Now run the below command to install necessary dependencies:
```
npm install
```
Now run below command to start server using **nodemon**:
```
npm start
```
Now you will get **Server is running on port 3000** and **Users table created successfully** message indicating that server is running and required table is also created. Now you can navigate to **http://localhost:3000/** on Browser and test the application.




## Reason for using EJS
EJS, or Embedded JavaScript, offers a perfect blend of simplicity and functionality. Its syntax closely resembles HTML, making it incredibly intuitive to work with. I appreciate how seamlessly I can integrate JavaScript directly into my HTML templates, allowing for dynamic content without sacrificing readability.

Another key reason I opt for EJS is its flexibility. With EJS, I have the full power of JavaScript at my fingertips. Whether it's looping through data or adding conditional logic, EJS empowers me to handle complex tasks effortlessly.

Moreover, EJS boasts a supportive community of developers. Whenever I encounter challenges or need guidance, I can rely on a wealth of resources and fellow enthusiasts to lend a helping hand.

Now, while other template engines like Pug or Handlebars have their merits, EJS aligns perfectly with my workflow and preferences. Its familiarity, combined with its robust feature set, makes it my go-to choice for templating.

Ultimately, choosing a template engine is a personal decision based on individual needs and preferences. For me, EJS ticks all the boxes, offering simplicity, flexibility, and community support in one comprehensive package.



