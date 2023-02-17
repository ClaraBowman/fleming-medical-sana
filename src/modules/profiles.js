/**
 * The event listener to handle showing/hiding the profile bio.
 */
export default function profiles() {
  if (document.getElementById('profiles')) {
    let profiles = document.getElementsByClassName('profile-card');

    for (let i = 0; i < profiles.length; i ++) {
      profiles[i].addEventListener('click', function() {
        this.classList.toggle('expanded');
      });
    }
  }
}
