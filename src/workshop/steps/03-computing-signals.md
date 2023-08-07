---
title: Computing Signals
layout: page-step.njk
templateEngineOverride: njk,md
date: 2023-01-04
---

# {{ title }}
---

Computing signals is where things get really interesting because we can use the **computed** method to create a new signal based on other signals. Because a signal is lazy, it will only recalculate when one of the signals it depends on changes. Signals are also memoized, so if the value of the signal doesn't change, it will return the same value which can be a huge performance boost.

This also creates some really interesting scenario for dynamic signal composition because we can create a signal that is based on other signals that are created dynamically. 

We are going to use the **solved** signal to serve as a trigger for computing a more dynamic **message** signal. 

```javascript
checkAttempt(attempt: number) {
  //... 

  if (this.isChosenWord(word)) {
    this.solved.set(true);
  }
}
```

We are going to define the **message** signal using the **compute** method.

```javascript
message = computed(() => {
  // Code goes here
});
```

Inside the signal, we are going to check the value of **solved** and use that to return a message.

```javascript
message = computed(() => {
  if (this.solved()) {
    // Code goes here
  }
});
```

We are also going to use the **currentAttempt** signal to compute a **attempts** signal that will return the word **attempts** or **attempt** based on the value of the **currentAttempt** signal.


```javascript
message = computed(() => {
  if (this.solved()) {
    const attempts = this.currentAttempt() > 1 ? 'attempts' : 'attempt';
    return `Congratulations! You solved the word in ${this.currentAttempt()} ${attempts}`;
  } else {
    return ``;
  }
});
```

But! Why not make this more reactive? We can move this logic to the **computed** method to create a **attempts** signal that will return the word **attempts** or **attempt** based on the value of the **currentAttempt** signal.

```javascript
attempts = computed(() => {
  return this.currentAttempt() > 1 ? 'attempts' : 'attempt';
});
```

And then use the **attempts** signal in the **message** signal. Fun!

```javascript
message = computed(() => {
  if (this.solved()) {
    return `Congratulations! You solved the word in ${this.currentAttempt()} ${this.attempts()}`;
  } else {
    return ``;
  }
});
```


## Challenges

- Update the **checkAttempt** method to set the **solved** signal to **true**.
- Update the **message** signal to use the **computed** method to return a message when the **solved** signal is **true**.
- Update the **attempts** signal to use the **computed** method to return the word **attempts** or **attempt** based on the **currentAttempt** signal.

```javascript
console.log(`You're simply the best! 🎵`);
```