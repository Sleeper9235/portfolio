
// let prevScrollPos = window.pageYOffset


// window.onscroll = function() {
//     const currentScrollPos = window.pageYOffset;

//     if ( prevScrollPos < currentScrollPos) {
//         // user has scrolled up
//         console.log("up")
//         document.querySelector('.navbar').classList.add('show');
//       } else {
//         // user has scrolled down
//         console.log("down")
//         document.querySelector('.navbar').classList.remove('show');
//       }
    
//       // update previous scroll position
//       prevScrollPos = currentScrollPos;
// }

// my projects
const projects = {
    unison: {
        name: "Unison",
        image: "https://github.com/Sleeper9235/game-progress-tracker/raw/main/assets/game_title.png",
        github: "https://github.com/Sleeper9235/game-progress-tracker",
        live: "https://sleeper9235.github.io/unison-concentration-game/", 
        description: "Unison is a tonal, or sound, matching game. It forces the player to not look for matches but listen for the matches."
    },

    gamoury: {
        name: "Gamoury",
        image: "https://github.com/Sleeper9235/unison-concentration-game/raw/main/assets/photos/shotOfBoard.png",
        github: "https://github.com/Sleeper9235/unison-concentration-game",
        live: "https://game-tracker-347ade7f3e94.herokuapp.com/", 
        description: "Gamoury aka Game Armoury is a game collection database. Which utilizes an ever growing collectin of games for the user to add or remove from their inventory. This allows gamers to keep track of what games they are playing and which ones have been completed."
    }, 

    gg: {
        name: "Gardener's Guide",
        image: "https://github.com/Sleeper9235/gardeners-guide-react/raw/main/public/assets/app_screenshot.png",
        github: {
            front_end: "https://github.com/Sleeper9235/gardeners-guide-react",
            back_end: "https://github.com/Baileybk2/gardeners-guide-back-end",
        },
        live: "https://gardeners-guide.netlify.app/", 
        description: "Gardener's guide is an app for plant minded people to keep track of all the plants they have, whether inside, outside, in their garden, or on their shelves."
    },

    ff: {
        name: "Fur Friends",
        image: "https://github.com/Sleeper9235/fur-friend/raw/main/media/media/app_photo.png",
        github: "https://github.com/Sleeper9235/fur-friend",
        live: "https://fur-friend-app-7f1a72d680b7.herokuapp.com/", 
        description: "Fur friends is an app that helps with the perilous search for that perfect companion. Fur friends is a place for Rescues, Shelters, and Fosters to display their loved ones in hopes for the perfect match with a want to be animal owner."
    }, 
}

