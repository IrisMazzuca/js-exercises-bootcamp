//## **Ejercicio 1**

// const getUser = (name) => {

//     //claro
//     fetch(`https://api.github.com/users/${name}`)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(`
//         Login: ${data.login}
//         Repos públicos: ${data.public_repos}
//         Seguidores: ${data.followers}
//         Siguiendo: ${data.following}
//         URL Avatar: ${data.avatar_url}
//         `)
//         })

// };

// getUser("BrendanEich");

// ## **Ejercicio 2**

// - Vamos a tomar la solución del ejercicio 1 y el[HTML base](./ ej_02 / index.html)
// - Modifiquemos la función para que, una vez obtenido los datos, actualicemos cada elemento del HTML con la información del perfil de GitHub
// - Además, para enviarle ese parámetro a la función, utilicemos el input del formulario, de forma que nos permita buscar cualquier perfil

const githubProfile = document.getElementsByClassName("github--profile");
const search = document.getElementById("search");

const getUser = (name) => {
    console.log(name)
    //claro
    fetch(`https://api.github.com/users/${name}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            githubProfile[0].innerHTML =
                `
                <div class="github--profile__info">
                    <a href="#" target="_blank">
                        <img src="${data.avatar_url}" />
                    </a>
                    <h2>
                        <a href="#" target="_blank">${data.name}</a>
                    </h2>
                </div>
                <div class="github--profile__state">
                    <ul>
                        <li>
                            <a href="#" target="_blank" title="Number Of Followers"
                            >${data.followers}<span> Followers</span></a
                            >
                        </li>
                        <li>
                            <a href="#" target="_blank" title="Number Of Repositoriy"
                            >${data.public_repos} <span> Repositoriy</span></a
                            >
                        </li>
                        <li>
                            <a href="#" target="_blank" title="Number Of Following"
                            >${data.following}<span> Following</span></a
                            >
                        </li>
                    </ul>
                </div>`

        })

};

search.addEventListener("keypress", (e) => {

    if (e.keyCode == 13) {
        e.preventDefault();
        getUser(search.value);
    }

})

getUser("BrendanEich");