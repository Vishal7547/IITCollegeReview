function main(){
    const collegeData = window.localStorage.getItem("collegeDetails");
let data =JSON.parse(collegeData);

let paraHead=document.querySelector('.AboutCollege p');
paraHead.innerHTML=data[0].collegeDetails[0].about;
let collegePic=document.querySelector('.collegeImg');
collegePic.src=data[0].college;

let table =document.getElementById('table');
table.innerHTML=    

`   <table class="table table-dark table-striped">
              
<tr>
  <th scope="col">COURSES</th>
  <th scope="col">FEES</th>
  <th scope="col">ELIGIBLITY</th>
 
</tr>


<tr>
  <td scope="row" rowspan="4">${data[0].collegeDetails[0].courser[0].name}</td>
  <td>${data[0].collegeDetails[0].courser[0].fee[0]}</td>
  <td rowspan="4">${data[0].collegeDetails[0].courser[0]. Eligibility}</td>
 

</tr>

<tr>
    <td scope="row">${data[0].collegeDetails[0].courser[0].fee[0]}</td>
   
    
    
  </tr>
  <tr>
    <td scope="row">${data[0].collegeDetails[0].courser[0].fee[0]}</td>
    
   
    
  </tr>
  <tr>
    <td scope="row">${data[0].collegeDetails[0].courser[0].fee[0]}</td>
   
    
  </tr>
  <tr>
    <td scope="row">${data[0].collegeDetails[0].courser[1].name}</td>
    <td>${data[0].collegeDetails[0].courser[1].fee[0]}</td>
    <td>${data[0].collegeDetails[0].courser[1].Eligibility}</td>
    
  </tr>


<tr>
  <td scope="row">${data[0].collegeDetails[0].courser[2].name}</td>
  <td>${data[0].collegeDetails[0].courser[1].fee[0]}</td>
  <td>${data[0].collegeDetails[0].courser[1].Eligibility}</td>
  
</tr>

<tr>
    <td scope="row">${data[0].collegeDetails[0].courser[3].name}</td>
    <td>${data[0].collegeDetails[0].courser[1].fee[0]}</td>
    <td>${data[0].collegeDetails[0].courser[1].Eligibility}</td>
    
  </tr>

  <tr>
    <td scope="row">${data[0].collegeDetails[0].courser[4].name}</td>
    <td>${data[0].collegeDetails[0].courser[1].Eligibility}</td>
    <td>${data[0].collegeDetails[0].courser[1].Eligibility}</td>
    
  </tr>


 

</table>      `;


let collegeName=document.getElementsByClassName('nameChange');
for(let i=0;i<collegeName.length;i++){
collegeName[i].innerHTML=data[0].name.slice(3);
}
}
main();

let searchBar=document.getElementById('collegeDetailsSearchBar');

searchBar.addEventListener('keyup',function(event){
        let keyWord=searchBar.value.toLowerCase();
        // console.log(keyWord);
        let filterCollege=collegeList.filter((x)=>{
        //    x = x.toLowerCase();
           return x.name.indexOf(keyWord) > -1
        });
        console.log(filterCollege);

        
        window.localStorage.setItem("collegeDetails", JSON.stringify(filterCollege));
main();
      
       
    
       
    });

