const http=require('http');
const process =require('process');
const url=process.argv[2];
const bl=require('bl');


http.get(url,response=>{
      responsee.pipe(bl((err,data) => {
       if (err) return console.error(err);
       data=data.toString();
       console.log(data.lenght)
       console.log(data)
    }))
});

// http.get(url,(response)=>{
//     var body = "";
//     response.on('data',(data) =>{
//         body += data;
//     });
//     response.on('error',(err)=>console.error(err));
//     response.setEncoding('utf8');
//     response.on('end',()=>{
//         console.log(body.length);
//         console.log(body)
//     });
// });
