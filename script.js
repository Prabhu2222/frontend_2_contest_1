const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    let obj=data[i];
    if(obj.profession=="developer")
    console.log(obj);
  }
}

// 2. Add Data
function addData() {
  
  while(true){
    let input=window.prompt("want to add data?type 'yes' to continue or 'no' to terminate")
    let obj={}
    if(input=="no") break;
    let name=window.prompt("enter name")
    let age=window.prompt("enter age");
    let profession=window.prompt("enter profesison");
     obj={
      name:name,
      age:Number(age),
      profession:profession
    }
    data.push(obj)
  }
  console.log(data);
  // let obj={
  //   name:"mohan",
  //   age:28,
  //   profession:"tester"
  // }



}

// 3. Remove Admins
function removeAdmin() {

let indexarr=[]
for(let i=0;i<data.length;i++){
  let obj=data[i];
  if(obj.profession=="admin") indexarr.push(i);
}
indexarr.sort((a,b)=>{
if(a>b) return -1;
else if(a<b) return 1;
else return 0;
})
for(let i=0;i<indexarr.length;i++){
  data.splice(indexarr[i],1);
}
console.log(data)

}

// 4. Concatenate Array
function concatenateArray() {
  let dummyArr=[
    { name: "dhokla", age: 37, profession: "security" },
    { name: "jordan", age: 27, profession: "prompt engg." },
  ]
  let myArr=[
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ]
  dummyArr.push(...myArr);
  console.log(dummyArr)
}

// 5. Average Age
function averageAge() {
  let total=data.reduce(sum,0);
  function sum(accumulator,ele,index,data){
    return accumulator+ele.age;
  }
  // console.log(total)
  // console.log(data.length)
  console.log(total/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let flag=false;
  for(let obj of data){
    if(obj.age>25){
      flag=true;
      console.log(true);
      break;
    }
  }
  if(flag==false)
  console.log(false)
}

// 7. Unique Professions
function uniqueProfessions() {
  let obj={};
  let ansArr=[];
  for(let i=0;i<data.length;i++){
    let dataOBj=data[i];
    let prof=dataOBj.profession;
    if(obj[prof]==undefined){
        obj[prof]=1;
        ansArr.push(prof);
    }else{
      obj[prof]++;
    }
  }
  // console.log(obj)
  console.log(ansArr)
}

// 8. Sort by Age
function sortByAge() {
  data.sort((obj1,obj2)=>{
    if(obj1.age<obj2.age) return -1;
    else if(obj1.age>obj2.age) return 1;
    else return 0;
  })
 console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    let obj=data[i];
    if(obj.name=="john"){
      obj.profession="manager";
    }
  }
  console.log(data)

}

// 10. Profession Count
function getTotalProfessions() {
  let obj={};
  let ansArr=[];
  for(let i=0;i<data.length;i++){
    let dataOBj=data[i];
    let prof=dataOBj.profession;
    if(obj[prof]==undefined){
        obj[prof]=1;
        ansArr.push(prof);
    }else{
      obj[prof]++;
    }
  }
  // console.log(obj)
  console.log(obj)

}
