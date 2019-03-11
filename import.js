var mongoose=require('mongoose');
var schema=require('./schema');
mongoose.connect('mongodb://localhost:27017/test');
var Alumno=mongoose.model('User2',schema,'users2');

    const csvFilePath='./datos.csv'
    const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);

    for(i=0;i<jsonObj.length;i++){

        if(jsonObj[i].semestre>=3){
            var alumno=new Alumno({
                nc:jsonObj[i].nc,
                nombre:jsonObj[i].nombre,
                carrera:jsonObj[i].carrera,
                semestre:jsonObj[i].semestre,
                email: jsonObj[i].email
        });

            alumno.save(function(error){
                if(error){
                    console.log(error);
                    process.exit(1);
                }else{
                console.log("Guardado");
                }
            });
        }
    }
    });