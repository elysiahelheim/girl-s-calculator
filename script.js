let display = document.getElementById('display');
let response = document.getElementById('response');

// Different lazy and dramatic responses
const lazyResponses = [
    "Ugh, why do you keep bothering me? 😒",
    "I can't right now... I'm too tired. 🥱",
    "What even is math? I don't understand this... 🙄",
    "You want me to do what? I’m not your servant! 😜",
    "You are stressing me out! 😣",
    "Why are you making me do this? 🤷‍♀️",
    "Stop it! I’m on break! 🍹",
    "Nope, I can’t do that! Just can’t! 😤",
    "Please... I’m not a calculator. I'm a drama queen. 👑",
    "Meh... I’m not doing it. 😒",
    "Okay, fine. But I’m only doing it because you asked me! 😤",
    "Why? Just why? 😭",
    "Ugh... again? 😑"
];

const positiveResponses = [
    "Okay, here’s your answer! 😏",
    "Done and dusted! ✅",
    "Ooh, math! My favorite! 🎉",
    "All finished. So satisfying! 😌",
    "I got you, boo! 🎀",
    "No worries, I got this! 💪",
    "Result is in! And it's fabulous! ✨",
    "Like, so easy! You owe me big time! 😉",
    "Aha! Here’s the answer, honey! 👑",
    "I did it! You're welcome! 💖",
    "And the answer is... here! 💃"
];

function appendToDisplay(value) {
    // If it's an equal sign, try to evaluate the expression
    if (value === '=') {
        if (display.value === '' || display.value === '0') {
            response.textContent = getRandomResponse(lazyResponses);
        } else {
            try {
                let result = eval(display.value);
                
                // Randomly decide whether to give a real answer or not
                if (Math.random() < 0.7) {  // 70% chance to give a response
                    response.textContent = `${getRandomResponse(positiveResponses)} The result is: ${result} 😏`;
                } else {
                    response.textContent = getRandomResponse(lazyResponses);
                }
            } catch (e) {
                response.textContent = "Oops! Something went wrong! 😅";
            }
        }
    } else {
        if (display.value === '0' || display.value === 'Error') {
            display.value = value;
        } else {
            display.value += value;
        }
        response.textContent = ""; // Clear previous response
    }
}

function clearDisplay() {
    display.value = '0';
    response.textContent = "Oh, you’re cleaning up? 😶‍🌫️";
}

// Function to return a random response
function getRandomResponse(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
