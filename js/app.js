const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow";

async function fetchHandler() {
    try{
        const responce = await fetch(url);
        const data = await responce.json();

        image.src = data.file;
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded){
        fetchHandler();
    }
});