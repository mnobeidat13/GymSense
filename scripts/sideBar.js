
function createSidebar() {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('side-bar');
    sidebarDiv.id = 'side-bar'
    const heading = document.createElement('h3');
    heading.innerHTML = `Welcome To <span style="color: var(--button-color-active); font-size: 22px;">G</span>ym<span style="color: var(--button-color-active); font-size: 22px;">S</span>ense`;
    sidebarDiv.appendChild(heading);

    const buttonsData = [
      { text: 'Start Workout', imageSrc: 'resources/workoutIcon.png', link: './workout.html' },
      { text: 'Edit Your Workouts', imageSrc: 'resources/planIcon.png', link: './editWorkouts.html' },
      { text: 'See Your Progress', imageSrc: 'resources/progressICon.png', link: '#' },
      { text: 'Manage Your Profile', imageSrc: 'resources/profileIcon.jpg', link: './profilePage.html' },
    ];

    buttonsData.forEach(button => {
      const buttonElement = document.createElement('button');
      const buttonImage = document.createElement('img');
      buttonImage.classList.add('button-image');
      buttonImage.src = button.imageSrc;
      buttonElement.appendChild(buttonImage);
      buttonElement.appendChild(document.createTextNode(button.text));
      buttonElement.addEventListener('click', () => {
        location.href = button.link;
      });
      sidebarDiv.appendChild(buttonElement);
    });

    // if (window.outerWidth >= 800) {
    //     // sidebarDiv.classList.add('active')
    // }

    function createCloseButton() {
        var closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.id = 'close-button';

        var closeButtonImg = document.createElement('img');
        closeButtonImg.id = 'menu-button-image';
        closeButtonImg.src = 'resources/xIcon.png';
        closeButtonImg.style.height = '20px';
        closeButton.appendChild(closeButtonImg);

        closeButton.addEventListener('click', () => {
          const sideBar = document.getElementById('side-bar');
          console.log(sideBar.classList);
          sideBar.classList.remove('active');
        });

        return closeButton;
    }

    if (window.innerWidth <= 800) {
        const closeButton = createCloseButton();
        sidebarDiv.appendChild(closeButton);
      }

    return sidebarDiv;
  }
