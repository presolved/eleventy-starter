---
title: Hello Signals
layout: page-step.njk
templateEngineOverride: njk,md
date: 2023-01-02
---

# {{ title }}
---

The easiest place to start with Signals is to convert simple properties into signals. In this step, we will convert the **message**, **currentAttempt**, **currentTile**, and **solved** properties into signals. 

```javascript
currentAttempt = 0;
currentTile = 0;
message = '';
solved = false;
```

We do this by calling the **signal** function and passing in an initial value. 

```javascript
message = signal('');
currentAttempt = signal(0);
currentTile = signal(0);
solved = signal(false);
```

If we wanted to set the **message** signal to be something other than an empty string, we would just pass in the value we want to use as the initial message.

```javascript
message = signal('Try to guess the word in six tries or less');
```

To read a signal, we just call it like a function without any parameters.

```html
<div class="message">{% raw %}{{ message() }}{% endraw %}</div>
```

A typical conversion to signals is pretty simple in that you are going to spend most of your time 
turning properties into function calls. 

The **keyEvent** function is a good example of what this would look like.

```javascript
@HostListener('body:keyup', ['$event'])
keyEvent({ key, which }: KeyboardEvent) {
  if (key === BACKSPACE) {
    this.deleteLetter();
  } else if (key === ESCAPE) {
    this.resetGame();
  } else if (key === ENTER && this.isAtEnd(this.currentTile())) {
    this.checkAttempt(this.currentAttempt());
  } else if (this.isValid(which) && !this.isAtEnd(this.currentTile())) {
    this.addLetter(key);
  }
}
```

Another example would be how we update the **addLetter** and **deleteLetter** methods.

```javascript
addLetter(key: string) {
  this.updateTile(this.currentAttempt(), this.currentTile(), key);
  this.nextTile();
}

deleteLetter() {
  this.prevTile();
  this.updateTile(this.currentAttempt(), this.currentTile(), '');
}
```

Updating a signal is done by calling the **set** method and passing in the new value. There are a few variations on how to update a signal, but the **set** method is the easiest to understand.

```javascript
resetSolved() {
  this.solved.set(false);
}

resetCurrentAttempt() {
  this.currentAttempt.set(0);
}

resetCurrentTile() {
  this.currentTile.set(0);
}
```

In the code above, we are setting the **solved** signal to **false**, the **currentAttempt** signal to **0**, and the **currentTile** signal to **0**. 

As much as we are huge fans of RxJS and the power of observable streams, we love the simplicity of Signals. 

## Challenges

- Convert the **message** property into a signal and set a default value
- Update the template to use the **message** signal
- Convert the **currentAttempt** property into a signal and set a default value
- Convert the **currentTile** property into a signal and set a default value
- Convert the **solved** property into a signal and set a default value
- Update the code to use the new signals starting with the **keyEvent** method
- Update **resetSolved**, **resetCurrentAttempt**, and **resetCurrentTile** to set simple values on the signals 

```javascript
console.log(`You're doing great!`);
```