var currPage =1;
function prevpage(){
    document.getElementById('issues').innerHTML = "";
    if(currPage>1){
    pageNumberHere =--currPage;
    document.getElementsByTagName('span')[0].innerHTML = pageNumberHere;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`)
    .then(res => res.json())
    .then(data =>{
        for(let i=0;i<5;i++){
           document.getElementById('issues').innerHTML+= `<li id="title">${data[i].title}</li>`
        }
    } )
    .catch(err =>console.log(err))
     }
     else{
     fetch(`https://api.github.com/repositories/1296269/issues?page=1&per_page=5`)
    .then(res => res.json())
    .then(data =>{
        for(let i=0;i<5;i++){
           document.getElementById('issues').innerHTML+= `<li id="title">${data[i].title}</li>`
        }
    } )
    .catch(err =>console.log(err))
     }
}
function nextpage(){
    document.getElementById('issues').innerHTML = ""
    pageNumberHere =++currPage;
    document.getElementsByTagName('span')[0].innerHTML = pageNumberHere;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`)
    .then(res => res.json())
    .then(data =>{
        for(let i=0;i<5;i++){
           document.getElementById('issues').innerHTML+= `<li id="title">${data[i].title}</li>`
        }
    } )
    .catch(err =>console.log(err))

}