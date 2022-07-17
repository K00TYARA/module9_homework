// Преобразует XML в JS-объект

const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmlDOM.querySelector("list");
const students = list.querySelectorAll("student");

let result = {
    list: []
};

for (let student of students){
    let nameNode = student.querySelector("name");
    let langAttr = nameNode.getAttribute("lang")
    let allName = `${nameNode.querySelector("first").textContent} ${nameNode.querySelector("second").textContent}`;
    let ageNode = student.querySelector("age");
    let profNode = student.querySelector("prof");

    result.list.push({
        name: allName,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    });
}

console.log(result);
