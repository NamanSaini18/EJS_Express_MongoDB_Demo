console.log("Hello World");
let result = document.getElementById("main");


async function searchDB(searchText)
{
    const res = await fetch(`http://localhost:5000/search?q=${searchText}`); // String ke through data bhejne ke liye

    const data = await res.json();

    data.forEach(ele => {
        console.log(ele);

        let newDiv = document.createElement("div");
        newDiv.setAttribute("id","main-div");
        // console.log(newDiv);
        newDiv.textContent = ele.name;
        result.appendChild(newDiv);

    })

}



const searchInput = document.getElementById("searchinput");

searchInput.addEventListener("keyup",()=>{

    let searchText = searchInput.value;

    console.log(searchText);


    searchDB(searchText);


});