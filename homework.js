
 

 const employees = [
    {
      id: 1,
      firstName: "Solly",
      lastName: "Coon",
      email: "scoon0@miitbeian.gov.cn",
      gender: "Male",
      salary: "293.27"
    },
    {
      id: 2,
      firstName: "Myron",
      lastName: "Clissold",
      email: "mclissold1@over-blog.com",
      gender: "Male",
      salary: "463.44"
    },
    {
      id: 3,
      firstName: "Perla",
      lastName: "Fauguel",
      email: "pfauguel2@discovery.com",
      gender: "Female",
      salary: "764.17"
    },
    {
      id: 4,
      firstName: "Aundrea",
      lastName: "Kegan",
      email: "akegan3@tripod.com",
      gender: "Female",
      salary: "574.63"
    },
    {
      id: 5,
      firstName: "Eadith",
      lastName: "Chene",
      email: "echene4@prnewswire.com",
      gender: "Female",
      salary: "417.37"
    },
    {
      id: 6,
      firstName: "Lorette",
      lastName: "Tuther",
      email: "ltuther5@admin.ch",
      gender: "Female",
      salary: "377.40"
    },
    {
      id: 7,
      firstName: "Robenia",
      lastName: "Robins",
      email: "rrobins6@networkadvertising.org",
      gender: "Female",
      salary: "206.26"
    },
    {
      id: 8,
      firstName: "Moe",
      lastName: "Bottoms",
      email: "mbottoms7@php.net",
      gender: "Male",
      salary: "425.70"
    },
    {
      id: 9,
      firstName: "Talia",
      lastName: "Cutsforth",
      email: "tcutsforth8@delicious.com",
      gender: "Female",
      salary: "711.72"
    },
    {
      id: 10,
      firstName: "Ives",
      lastName: "Crennan",
      email: "icrennan9@microsoft.com",
      gender: "Male",
      salary: "668.98"
    }
  ];
  
function getAverage(employees){
  let sum =0;
  employees.forEach(employee => {
      console.log(employee.salary);
      sum = sum + employee.salary*1;
      
  });
  console.info(sum);
  return sum/employees.length ;
}
// var average = getAverage(employees);
// console.info(average);




 function calculateAverageFemSalary(employees){
    let sum =0;
    var females = 0;
    employees.forEach(employee=> {
      if (employee.gender == "Female"){
      
        sum = sum + mployee.salary * 1;
        
        females++;
      }
      
    })
    return sum / females;
 }
 const femAverage = calculateAverageFemSalary(employees);
 console.info("female salary average", femAverage);


 function calculateAverageFemSalary2(employees){
   const females = employees.filter(employee =>employee.gender == "Female";
      return getAverage(females);

   }
   const femAverage = calculateAverageFemSalary(employees);
   console.info("female salary average", femAverage2);

 




 

 