// # Objetos 003

// - Tenemos una variable `playlist`, con información sobre una playlist de spotify
// - El objeto tiene una propiedad `songs` que es un array vacío
// - Al objeto vamos a agregarle un método que se llame `addSong`
//   - Este método va a recibir un string como parámetro (el nombre de una canción) y va a agregarlo en la propiedad `songs` del objeto.
// - Después de crear la función, agregá las siguientes 3 canciones utilizando `playlist.addSong`: **'Geronimo'**, **'Sissy That Walk'**, **'Cover Girl'**

// ```js
// // TODO: agregar en el objeto el método addSong, que recibe como parámetro el nombre de una canción a agregar en el array songs
const playlist = {
  name: "Rupaul Lipsyncs",
  owner: "Ada",
  followers: 8743,
  songs: [],
  addSong: function(cancion) {
    this.songs.push(cancion);
  }
};

playlist.addSong('Geronimo');
playlist.addSong('Sissy That Walk');
playlist.addSong('Cover Girl');
console.log(playlist);




// // TODO: utilizando el método que creamos antes, agrega las siguientes tres canciones utilizando el método playlist.addSong
// // 'Geronimo'
// // 'Sissy That Walk'
// // 'Cover Girl'

// console.log(playlist.songs); // [ 'Geronimo', 'Sissy That Walk', 'Cover Girl' ]
// ```
