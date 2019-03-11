var sgMail = require('@sendgrid/mail');
var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var Alumno=mongoose.model('User2',schema,'users2');

Alumno.find(function(error,docs){
    for(i=0;i<docs.length;i++){
        if(docs[i].sendmail==false){
            var msg = {
                to: docs[i].email,
                from: 'joanmontoyace@ittepic.edu.mx',
                dynamic_template_data:{
                    nombre:docs[i].nombre,
                    qr: docs[i]._id,
                    nc:docs[i].nc,
                    carrera:docs[i].carrera,
                    semestre:docs[i].semestre
                },
                template_id:'d-a787f84fc9b148a5a5aed09e93592a6b',
                };
            Alumno.update({_id:docs[i]._id},{$set: {"sendmail":true}},function(error,pass){});
            sgMail.send(msg)
        }
    }

    if(error){
        process.exit(1);
    }
});