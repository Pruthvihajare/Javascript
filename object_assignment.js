
let teacher={

};


teacher.name="Sanjay kulal";
 teacher.teachingClass="first year";
 teacher.teaching="good";
  console.log(teacher)


 teacher.degree={
 engineering:"CSC",
 PHD:"Adv.computer"
    
 }
//  console.log(teacher.degree)
 
 teacher.certificate={
Learning:"angular developer",
learn:"java"
 }
//  console.log(`Total degrees and certificate are : ${teacher.degree.engineering} ${teacher.degree.PHD} ${teacher.certificate.Learning} ${teacher.certificate.learn}`)
 teacher.degreeAndCertificate=function(){
    //  console.log(`Total degrees and certificate are : ${teacher.degree.engineering} ,${teacher.degree.PHD}, ${teacher.certificate.Learning} ,${teacher.certificate.learn}`)
 return `total degree and certificate are:- ${teacher.degree.engineering}, ${teacher.degree.PHD} ,${teacher.certificate.Learning}, ${teacher.certificate.learn}`
 }
 let degreeCertificate=teacher.degreeAndCertificate()
 console.log(degreeCertificate)