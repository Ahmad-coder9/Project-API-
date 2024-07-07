
 fetch("https://fakestoreapi.com/products")
 .then(response => response.json())
.then((data) => {
     let data1 = "";
     data.map((values) => {
         data1+= `
         <div class="card">
             <div class="img">
                 <img src=${values.image} id="poster">
             </div>
             <h2 id="title">${values.title}</h2>
             <div class="price">
                 <h4 id="price">Price: $${values.price}</h4>
                 <h5 id="rating">Rating: ${values.rating.rate}</h5>
             </div>
         </div>
         `
         document.querySelector('.container').innerHTML=data1;
     })
 })
 .catch(err => {
 	console.error(err);
 });





 
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(response=>response.json())
// .then((data)=>{
//     let data1="";
//     data.map((values)=>{
//         data1+=`
//          <h1 class="user">${values.userId}</h1>
//         <h2 class="id">${values.id}</h2>
//         <h3 class="title">${values.title}</h3>
//         <h4 class="completed">${values.completed}</h4>
//         `

//         document.querySelector('.container').innerHTML=data1;
//     })

//      })
//      .catch(err => {
//          console.log(err);
//      })