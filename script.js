/*Henter eksisterende højhuse fra json-fil */
const hojhusdata = "hojhuse.json";

async function fetchdata(hojhusdata) {
    const result = await fetch(hojhusdata);
    const hojhusejson = await result.json();
    vishojhuse(hojhusejson);
}

/* Fremviser eksisterende højhuse (card template med template literal) */
function vishojhuse(hojhusejson) {
    const hojhuscontainer = document.querySelector(".eksisterendehojhuse");
    hojhusejson.forEach(hojhus => {
        const hojhusArticle = document.createElement("article");
        hojhusArticle.classList.add("border", "border-1", "border-black", "flex");
        hojhusArticle.innerHTML = `
        <figure class="basis-1/3">
            <img src="fotos/${hojhus.foto}" class="w-full h-full object-cover object-center"> <!-- h-80 sm:h-96 md:h-72 lg:h-80  -->
        </figure>
        <div class="basis-2/3">
            <h3 class="px-4 pt-4 text-lg font-bold">${hojhus.navn}</h3>
            <p class="etager px-4">Etager: ${hojhus.etager}</p>
            <p class="hoejde px-4">Højde: ${hojhus.hojde}</p>
            <p class="byggeaar px-4">Byggeår: ${hojhus.byggeaar}</p>
            <p class="byggeaar px-4">Funktion: ${hojhus.type}</p>
            <p class="bydel px-4">Bydel: ${hojhus.bydel}</p>
        </div>
        `;
        hojhuscontainer.appendChild(hojhusArticle);
    });

}

fetchdata(hojhusdata);