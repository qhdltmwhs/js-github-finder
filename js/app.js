// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
let debounceTimer;
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if(userText !== ''){
      // Show spinner
      ui.showSpinner();
      // Make http call
      github.getUser(userText)
        .then(data => {
          // Hide spinner (optional, since showProfile/showAlert will overwrite)
          // ui.hideSpinner();
          if(data.profile.message === 'Not Found') {
            // Show alert
            ui.showAlert('User not found', 'alert alert-danger');
          } else {
            // Show profile
            ui.showProfile(data.profile);
            if (Array.isArray(data.repos)) {
              ui.showRepos(data.repos);
            }
          }
        })
    } else {
      // Clear profile
      ui.clearProfile();
    }
  }, 500);
}); 