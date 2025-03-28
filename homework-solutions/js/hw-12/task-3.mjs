// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
//       Пример: 
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona    
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell   
//           email: Shanna@melissa.tv 
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

async function fetchUserData() {
    try {
      const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/photos"),
      ]);        
      if (!usersResponse.ok) {
        throw new Error("Failed to fetch users");
      }
      if (!albumsResponse.ok) {
        throw new Error("Failed to fetch albums");
      }
      if (!photosResponse.ok) {
        throw new Error("Failed to fetch photos");
      }
      const [users, albums, photos] = await Promise.all([
        usersResponse.json(),
        albumsResponse.json(),
        photosResponse.json(),
      ]);
      const usersDetails = users.map((user) => {
        const userAlbums = albums.filter((album) => album.userId === user.id);
        const albumsWithPhotoCount = userAlbums.map((album) => {
          const photoCount = photos.filter((photo) => photo.albumId === album.id).length;
          return `${album.title} (${photoCount} photos)`;
        });  
        return {
          name: user.name,
          email: user.email,
          phone: user.phone,
          company: user.company.name,
          albums: albumsWithPhotoCount,
        };
      });
      usersDetails.forEach((user) => {        
        console.log(`name: ${user.name}`);
        console.log(`email: ${user.email}`);
        console.log(`phone: ${user.phone}`);
        console.log(`company: ${user.company}`);
        console.log("albums:");
        user.albums.forEach((album) => console.log(`  - ${album}`));
        console.log("__________________________________");
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchUserData();


