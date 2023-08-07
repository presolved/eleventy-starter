---
title: Updating Signals
layout: page-step.njk
templateEngineOverride: njk,md
date: 2023-01-03
---

# {{ title }}
---

In a slightly more complex example (barely), we are going to update **message** signal by calling **set** that relies on some string literal interpolation.

```javascript
checkAttempt(attempt: number) {
  //...

  if (this.isChosenWord(word)) {
    const attempts = this.currentAttempt > 1 ? 'attempts' : 'attempt';
    this.message = `Congratulations! You solved the word in ${this.currentAttempt} ${attempts}`;
  }
}
```

The differences are so minimal, we did a double take on this code snippet more than once because they looked exactly the same. 

```javascript
checkAttempt(attempt: number) {
  //...

  if (this.isChosenWord(word)) {
    const attempts = this.currentAttempt > 1 ? 'attempts' : 'attempt';
    this.message.set(`Congratulations! You solved the word in ${this.currentAttempt} ${attempts}`);
  }
}
```

A more interesting example is how we update the **currentAttempt** and **currentTile** signals. 

We are going to use the **update** method which takes a function that returns the new value for the signal. The inline function is passed the current value of the signal and we can use that to calculate the new value.

```javascript
nextAttempt() {
  this.currentAttempt.update((value) => value + 1);
}

nextTile() {
  this.currentTile.update((value) => value + 1);
}

prevTile() {
  if (this.currentTile() > 0) this.currentTile.update((value) => value - 1);
}
```

We are doing simple increment and decrement operations, but you can imagine how this could be used to do more complex operations.

## Challenges

- Update the **checkAttempt** method to use the **set** method on the **message** signal.
- Update the **nextAttempt** method to use the **update** method on the **currentAttempt** signal.
- Update the **nextTile** method to use the **update** method on the **currentTile** signal.
- Update the **prevTile** method to use the **update** method on the **currentTile** signal.

```javascript
console.log(`🔥🔥🔥`);
```