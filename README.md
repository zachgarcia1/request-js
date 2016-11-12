# Request JS

Request js is vanilla javascript for making http requests.
- get
- post

## Up And Running
```javascript
var request = new HttpClient();
 
request.get('http://exampleurl.com', function(response){
    console.log(response);
});
```