// Function to create an element with attributes
function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
    return element;
  }

// Function to create the navbar component
function createNavbar() {
    // Create the navbar elements
    const navbar = createElementWithAttributes('div', { class: 'navbar', id:'navbar'});

    // Create the logo-and-name div and its child elements
    const logoAndName = createElementWithAttributes('div', { class: 'logo-and-name' });
    const logoImg = createElementWithAttributes('img', { class: 'logo-img', src: 'resources/dumbellLogo.png', alt: 'logo', style: 'width: 25px;' });
    const logoLabel = createElementWithAttributes('label', { class: 'logo-label' });
    logoLabel.textContent = 'GymSense';
    logoAndName.appendChild(logoImg);
    logoAndName.appendChild(logoLabel);

    // Create the nav-items-container div and its child elements
    const navItemsContainer = createElementWithAttributes('div', { class: 'nav-items-container' , id:'nav-items-container'});
    const homeLink = createElementWithAttributes('a', { href: '/', class: 'home-label' });
    homeLink.textContent = 'Home';
    const workoutLink = createElementWithAttributes('a', { href: './workout.html', class: 'workout-label' });
    workoutLink.textContent = 'Workout';
    const dataLink = createElementWithAttributes('a', { href: './data.html', class: 'data-label' });
    dataLink.textContent = 'Data';
    navItemsContainer.appendChild(homeLink);
    navItemsContainer.appendChild(workoutLink);
    navItemsContainer.appendChild(dataLink);

    // Create the profile-label-container div and its child elements
    const profileLabelContainer = createElementWithAttributes('div', { class: 'profile-label-contianer' });
    const profileIcon = createElementWithAttributes('img', { class: 'profile-icon', src: 'resources/profileIcon.jpg', alt: 'profile-icon', style: 'width: 25px;' });
    const profileLink = createElementWithAttributes('a', { href: './profile.html', class: 'profile-label' });
    profileLink.textContent = 'Profile';
    profileLabelContainer.appendChild(profileIcon);
    profileLabelContainer.appendChild(profileLink);

    var menuButton = document.createElement('button')
    menuButton.classList.add('menu-button')

    var menuButtonImg = document.createElement('img')
    menuButtonImg.id = 'menu-button-image'
    menuButtonImg.src = 'resources/menuIcon.png'
    menuButtonImg.style.height = '20px'
    menuButton.appendChild(menuButtonImg)

    menuButton.addEventListener('click', () => {
      const verticalNav = document.getElementById('vertical-nav-items-container');
      verticalNav.classList.toggle('active');
      if (menuButtonImg.src.includes('menuIcon.png')) {
        menuButtonImg.src = 'resources/xIcon.png';
      } else {
        menuButtonImg.src = 'resources/menuIcon.png';
      }
    });

    // Append all elements to the navbar
    navbar.appendChild(logoAndName);
    navbar.appendChild(navItemsContainer);
    navbar.appendChild(profileLabelContainer);
    navbar.appendChild(menuButton);

    return navbar; // Return the root element of the component
  }


function createNavbarVertical() {

    // Create the nav-items-container div and its child elements
    const navItemsContainerVertical = createElementWithAttributes('div', { class: 'vertical-nav-items-container' , id:'vertical-nav-items-container'});
    const homeLink = createElementWithAttributes('a', { href: '/', class: 'home-label' });
    homeLink.textContent = 'Home';
    const workoutLink = createElementWithAttributes('a', { href: './workout.html', class: 'workout-label' });
    workoutLink.textContent = 'Workout';
    const dataLink = createElementWithAttributes('a', { href: './data.html', class: 'data-label' });
    dataLink.textContent = 'Data';
    const profileLink = createElementWithAttributes('a', { href: './profile.html', class: 'profile-label' });
    profileLink.textContent = 'Profile';

    navItemsContainerVertical.appendChild(homeLink);
    navItemsContainerVertical.appendChild(workoutLink);
    navItemsContainerVertical.appendChild(dataLink);
    navItemsContainerVertical.appendChild(profileLink);

    return navItemsContainerVertical; // Return the root element of the component
  }
