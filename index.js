// Targeting the div with id and creating  a function for append
let cont = document.getElementById("container");
const append = (data) => {
    console.log(data)
    data.forEach((ele) => {

        let p = document.createElement("p");
        let x = document.createElement("HR");
        let img = document.createElement("img");
        let span = document.createElement("span");

        img.src = ele.image;
        span.innerText = ele.name;

        p.append(img,span)
        cont.append(p,x)

        p.style.fontFamily = "Monospace"
        p.style.fontSize = "30px"
        p.style.height = "100px";
        p.style.margin = "0"
        img.style.marginRight = "12px"
        img.style.marginLeft = "12px"
    })

}



// Fetching The Api
const url = "https://624094e02aeb48a9af754d5f.mockapi.io/ticket"
const getdata = async () => {
    try {
        let resolve = await fetch(url);
        let data = await resolve.json()
        append(data)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
getdata()

// Targeting the div with id and creating  a function for append

// let cont = document.getElementById("container");
// const append = (data) => {
//     console.log(data)
//     data.forEach((ele) => {
//         let p = document.createElement("p");
//         let hr = document.createElement("HR");
//         let img =  document.createElement("img");


//         img.src = ele.image;
//         p.innerText = ele.name

//         p.append(img)

        
//         cont.append(p, hr)

//     })
// }
// fetch ("https://624094e02aeb48a9af754d5f.mockapi.io/ticket")
// .then(function (res){
//     console.log(res)
//     return res.json();
// })
// .then(function (res){
//     console.log(res)
//     append(res)
// })

// let cont = document.getElementById("container");
// const append = (data) => {
//     console.log(data)
//     data.forEach((ele) => {

//         let p = document.createElement("p");
        
//         let img = document.createElement("img");
       

//         img.src = ele.image;
//         p.innerText = ele.name;

//         p.append(img)
//         cont.append(p)

//     })

// }

