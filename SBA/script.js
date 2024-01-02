const API_KEY =
  "live_OfY9n77V3t9DKm6MjRRML84FaEFlSZ2j20mcMzyUljvk44pxNNN0shUn9HGV4ono";

const button = document.getElementById("btn-cat");
const div = document.getElementById("image-cat");

button.addEventListener("click", () => {
  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_riVAP14ATCGuCpjUmGmqbOGj8zyEiSVd5G17ScnvW2aNklOiXGTL6BxZ4SKlzxNR&breed_ids=beng,abys,awir,nebe"
  )
    .then((response) => response.json())
    .then((data) => {
      let foundMatch = false;
      const userInput = document.getElementById("input");

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        const breedMatch = item.breeds.find(
          (breed) => breed.name.toLowerCase() === userInput.value.toLowerCase()
        );
        if (breedMatch) {
          foundMatch = true;
          console.log(item.url);
          div.innerHTML = `
                <img src=${item.url} width = 250px height = 200px  margin-top = 50px/>
            `;
          break;
        }
      }
      if (!foundMatch) {
        console.log("no");
      }
    });
});

// console.log(data)
// console.log(data[1].breeds[0].adaptability)
