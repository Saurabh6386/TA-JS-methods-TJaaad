// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
   console.log(got.houses);
   
return got.houses.reduce((acc, houses)=>{
      let count =  acc + houses.people.length
      return count
   },0)
}

let all = countAllPeople();
console.log(all);

function peopleByHouses() {
   return got.houses.reduce((acc,cv) => {
     acc[cv.name] = cv.people.length
     return acc
   },{})
}

let pbh = peopleByHouses()
console.log(pbh);


  function everyone() {
      return got.houses.reduce((acc, cv) => {
         // console.log(cv.people);
         cv.people.forEach(element => acc.push(element.name))
         return acc
      },[])
  }
  console.log(everyone());


  
  function nameWithS() {
    return got.houses.reduce((acc, cv) => {
      cv.people.filter(element => {
         if (element.name.includes("S") ||(element.name.includes("s") )) {
            return acc.push(element.name)
         }
      })
      return acc
    }, [])
   }
  
  console.log(nameWithS());

  function nameWithA() {
   return got.houses.reduce((acc, cv) => {
      cv.people.filter(element => {
         if (element.name.includes("A") ||(element.name.includes("a")) ) {
            return acc.push(element.name)
         }
      })

      return acc
    }, [])
  }

  console.log(nameWithA());
  
  
  function surnameWithS() {
    return got.houses.reduce((acc, cv) => {
      if (cv.name.includes("S") || (cv.name.includes("s"))) {
          acc.push(cv.name)
      } 
      return acc
    },[])
  }
console.log(surnameWithS());

  
function surnameWithA() {
   return got.houses.reduce((acc, cv) => {
      if (cv.name.includes("A") || (cv.name.includes("a"))) {
         acc.push(cv.name)
      }
      return acc
   },[])
}
console.log(surnameWithA());

  
function peopleNameOfAllHouses() {
   return got.houses.reduce((acc, cv,i) => {
      acc[cv.name] = cv.people.reduce((acc,cv)=>{
         acc.push(cv.name)
        return acc
      },[]);
      return acc;
   },{})
}
console.log(peopleNameOfAllHouses());

  
//*****   Testing your result after writing your function   *****

//   console.log(countAllPeople());
//   // Output should be 33
  
//   console.log(peopleByHouses());
//   // Output should be
//   //{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}
  
//   console.log(everyone());
//   // Output should be
//   //["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
//   console.log(nameWithS(), 'with s');
//   // Output should be
//   // ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]
  
//   console.log(nameWithA());
//   // Output should be
//   // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
//   console.log(surnameWithS(), 'surname with s');
//   // Output should be
//   // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]
  
//   console.log(surnameWithA());
//   // Output should be
//   // ["Lysa Arryn", "Jon Arryn"]
  
//   console.log(peopleNameOfAllHouses());
//   // Output should be
//   // {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}