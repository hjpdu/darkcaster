function logger(request,response,next){
  var requestDate = new Date();
  var requestMethod = request.method;
  var requestURL =request.url;
  console.log(requestDate,requestMethod,requestURL);
  next();

}
//before this can be used elsewhere - export it
module.exports = logger;
