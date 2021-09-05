const http= require('http');
const process =require('process');
const url=process.argv[2];
// var options = {
//     host: 'localhost',
//     port: '8081',
//     path: '/index.html'  
//  };

http.get(url,(response)=>{
    // var body = '';
    // response.on('data', function(data) {
    //     body += data;
    // });
    response.on('error',(err)=>console.error(err));
    response.setEncoding('utf8');
    response.on('data', data=> {
    console.log(data);
            });
    response.on('end',()=>console.log('end of stream'));

});
// var req = http.request(options, callback);
// req.end();
