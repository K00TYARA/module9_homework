// Преобразует JSON в JS-объект

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonString);
const list = data.list;

let result = {
    list: []
};

for (let man of list){
    result.list.push(man);
}

console.log(result);