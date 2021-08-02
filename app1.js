let data = [ 
{"Gender": "Male",
"HeightCm": 171, 
"WeightKg": 96
},
{"Gender": "Male",
"HeightCm": 161, 
"WeightKg":85 
},
{"Gender": "Male",
"HeightCm": 180, 
"WeightKg": 77
},
{"Gender": "Female",
"HeightCm": 166,
"WeightKg": 62
},
{"Gender": "Female",
"HeightCm": 150, 
"WeightKg": 70
},
{"Gender": "Female",
"HeightCm": 167, 
"WeightKg": 82
}
]
var fs = require('fs')

//Methods
function calculateBMI (persons){

    const BMI= (persons.WeightKg/(persons.HeightCm/100)**2)
    return BMI

}

function healthRisk(BMI){
    if(BMI<18.4){
        return ["Underweight","Malnutrition risk"]
    }
    else if(BMI>=18.5 && BMI<=24.9){
        return ["Normal weight","Low risk"]
    }
    else if(BMI>=25 && BMI<=29.9){
        return ["Overweight","enhanced risk"]
    }
    else if(BMI>=30 && BMI<=34.9){
        return ["moderately obese","Medium risk"]
    }
    else if(BMI>=35 && BMI<=39.9){
        return ["Severely Obese","High risk"]
    }
    else if(BMI>=40){
        return ["Very Severely Obese","Very High risk"]
    }
}

const string = JSON.stringify(data)
const parsed_obj = JSON.parse(string)


var count1 =0
for( var i = 0; i < parsed_obj.length; i++){
     BMI = calculateBMI(parsed_obj[i])
     const health_risk = healthRisk(BMI)
     console.log(BMI,health_risk)
     fs.appendFile('./data12.txt',BMI+','+health_risk.toString()+'\n',(err)=>{
      if(err) {console.error(err)}
     })
    if(BMI>=25 && BMI<=29.9){
        count1++
    }
}
fs.appendFile('./data12.txt','The number of overweight candidates:'+count1+'\n',(err)=>{
    if(err) {console.error(err)}
   })

