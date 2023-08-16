function createSidebar() {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('side-bar');
    sidebarDiv.id = 'side-bar'
    const heading = document.createElement('h3');
    heading.innerHTML = `Welcome To <span style="color: var(--button-color-active); font-size: 22px;">G</span>ym<span style="color: var(--button-color-active); font-size: 22px;">S</span>ense`;
    sidebarDiv.appendChild(heading);

    const buttonsData = [
      { text: 'Start Workout', imageSrc: 'resources/workoutIcon.png', link: 'workout.html' },
      { text: 'Edit Your Workouts', imageSrc: 'resources/planIcon.png', link: '#' },
      { text: 'See Your Progress', imageSrc: 'resources/progressICon.png', link: '#' },
      { text: 'Manage Your Profile', imageSrc: 'resources/profileIcon.jpg', link: '#' },
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

    return sidebarDiv;
  }
