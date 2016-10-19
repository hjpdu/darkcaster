function authorize(request,response,next){
  var secretPassphrase = request.headers.secret;
  var mySecretPassphrase = process.env.PASS || require('../config.js').mySecretPassphrase;

  if(!secretPassphrase || secretPassphrase !== mySecretPassphrase){
    response.status(403).json({
      msg:'You tried it.'
    });
  }else{
    next();
  }
}

module.exports = authorize;
