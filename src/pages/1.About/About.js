

export function simulateTyping(stringsArray, elementId) {
  let typingIndex = 0; // Index of the current string in the array
  let deleting = false; // Whether we are in the process of deleting
  let currentCharIndex = 0; // Index of the current character being typed/deleted
  let typingActive = true; // Flag to control the typing process

  const typingSpeed = 150; // Speed for typing (ms)
  const deletingSpeed = 100; // Speed for deleting (ms)
  const pauseDuration = 2000; // Pause after typing before deleting (ms)

  const element = document.getElementById(elementId);

  // Defensive check to ensure the element exists
  if (!element) {
    // console.error(`Element with ID ${elementId} not found in DOM.`);
    return;
  }

  // Log the initial element to ensure it's being found
  // console.log(`Element found: ${elementId}`, element);

  // Function to handle the typing and deleting phases
  const typeLoop = () => {
    if (!typingActive) return; // Stop typing if inactive

    const currentString = stringsArray[typingIndex]; // Get the current string from the array

    // Log the current string being typed
    // console.log(`Current string: ${currentString}`);

    // Typing phase
    if (!deleting && currentCharIndex <= currentString.length) {
      element.innerHTML = currentString.substring(0, currentCharIndex++); // Type each character
      if (currentCharIndex === currentString.length + 1) {
        // Pause after typing the entire string
        setTimeout(() => {
          deleting = true; // Switch to deleting mode
          setTimeout(typeLoop, deletingSpeed); // Start deleting
        }, pauseDuration);
        return;
      }
    }

    // Deleting phase
    if (deleting && currentCharIndex >= 0) {
      element.innerHTML = currentString.substring(0, currentCharIndex--); // Delete each character
      if (currentCharIndex === -1) {
        // Once deletion is done, pick the next random string
        typingIndex = Math.floor(Math.random() * stringsArray.length);
        currentCharIndex = 0;
        deleting = false; // Switch back to typing mode
        setTimeout(typeLoop, typingSpeed); // Start typing again
        return;
      }
    }

    // Continue the loop with appropriate speed based on typing or deleting
    setTimeout(typeLoop, deleting ? deletingSpeed : typingSpeed);
  };

  // Function to stop all typing and deleting processes
  const stopTyping = () => {
    typingActive = false; // Set the flag to false to stop the typing process
    element.innerHTML = ''; // Optionally clear the text from the element
    // console.log("Typing stopped");
  };

  // Start the loop by picking the first random string
  typingIndex = Math.floor(Math.random() * stringsArray.length);
  typeLoop(); // Start the typing loop

  // Return the stop function so it can be called externally
  return stopTyping;
}





  
  
  
  
  
  