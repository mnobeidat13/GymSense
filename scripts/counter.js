// export function Counter(title, defaultValue, steps) {
//     var counter = {};

//     counter.counterDiv = document.createElement('div');
//     counter.counterDiv.classList.add('counterDiv');

//     counter.label = document.createElement('div');

//     counter.labelTitle = document.createElement('h4');
//     counter.labelTitle.textContent = title;
//     counter.label.appendChild(counter.labelTitle);

//     counter.plusButton = document.createElement('button');
//     counter.plusButton.classList.add('fa', 'fa-plus');

//     counter.minusButton = document.createElement('button');
//     counter.minusButton.classList.add('fa', 'fa-minus');

//     counter.countLabel = document.createElement('input');
//     counter.countLabel.classList.add('countLabel');
//     counter.countLabel.id = 'countLabel';
//     counter.countLabel.value = defaultValue;

//     counter.plusButton.addEventListener('click', function() {
//       counter.countLabel.value = parseInt(counter.countLabel.value) + steps;
//     });

//     counter.minusButton.addEventListener('click', function() {
//       var count = parseInt(counter.countLabel.value);
//       if (count > 0) {
//         counter.countLabel.value = count - steps;
//       }
//     });

//     counter.getValue = function() {
//       return counter.countLabel.value;
//     };

//     counter.counterDiv.appendChild(counter.label);
//     counter.counterDiv.appendChild(counter.minusButton);
//     counter.counterDiv.appendChild(counter.countLabel);
//     counter.counterDiv.appendChild(counter.plusButton);

//     return counter;
//   }


export function Counter(sets){

  var counter = {}

  var mainCounterDiv = document.createElement('div')
  mainCounterDiv.classList.add('mainCounterDiv')

  for (let i = 1; i <= sets; i++) {
    var innerCounterDiv = document.createElement('div')
    innerCounterDiv.classList.add('innerCounterDiv')

    var setLabel = document.createElement('label')
    setLabel.classList.add('setLabel')
    setLabel.textContent = i

    var weightInput = document.createElement('input')
    weightInput.classList.add('weightInput')
    weightInput.setAttribute('inputmode', 'numeric');
    weightInput.setAttribute('pattern', '[0-9]*');
    weightInput.addEventListener('input', function(event) {
      var inputValue = event.target.value;
      var numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
      event.target.value = numericValue;
    });

    innerCounterDiv.appendChild(setLabel)
    innerCounterDiv.appendChild(weightInput)
    mainCounterDiv.append(innerCounterDiv)

    counter[i] = {
      innerCounterDiv: innerCounterDiv,
      setLabel: setLabel,
      weightInput: weightInput
    };
  }


  counter.counterDiv = mainCounterDiv

  // console.log(counter);
  return counter
}
