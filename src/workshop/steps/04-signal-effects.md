---
title: Signal Effects
layout: page-step.njk
templateEngineOverride: njk,md
date: 2023-01-05
---

# {{ title }}
---

For the last stop of our quickstart workshop, we are going to look at how we can use the **effect** method to create a signal effect. These are exceptionally handy when you need to respond to changes in a signal to perform something "on the side." A few examples would be logging out information, storing data in local storage, or sending data to a realtime stream.

Effects are usually created in a **constructor** because they need access to the injection context. There are ways to make this work but we are going to stick with the simplest approach for now.

In the **constructor**, we are going to call the **effect** method and pass in a function that will be called whenever the signal changes.

```javascript
constructor() {
  effect(() => {
    // Code goes here
  });
}
```

The signal that we are going to use for our trigger is **currentTile**. When the **currentTitle** signal is greater than zero, we are going to call the **updateStream** method. 

```javascript
constructor() {
  effect(() => {
    if (this.currentTile() > 0) {
      this.updateStream(this.currentAttempt());
    }
  });
}
```

This **updateStream** is just a placeholder for where you may implement some realtime functionality. A simple **console.log** will do for now.

```javascript
updateStream(attempt: number) {
  console.log(
    `Trasmitting "${this.getAttemptedWord(attempt)}" to realtime stream`
  );
}
```

## Challenges
- Add a **constructor** method to the class and then add in the **effect** method.
- Use the **currentTile** signal to check if the current tile is greater than zero.
- If **currentTile** is greater than zero, call the **updateStream** method with the **currentAttempt** signal.
- Update the **updateStream** method to use the **getAttemptedWord** method to get the word from the **currentAttempt** signal.

```javascript
console.log(`Like a boss! 🎉`);
```