# pubsub

## PubSub.js
### v0.0.2

PubSub.js is s general purpose pubsub.

Usage:-
```
  const pubsub = new PubSub();

  // Subscribe
  pubsub.subscribe('Hello', (hello) => console.log('hello ' + hello ) );
  pubsub.subscribe('Hello', (hello) => console.log('hello2 ' + hello ) );

  // Broadcast
  pubsub.broadcast('Hello' , 'Angeline');

  // Case without parameters
  pubsub.subscribe('Greet', () => console.log('Good day'));
  pubsub.broadcast('Greet');

  // Unsubscribe
  pubsub.unsubscribe('Hello', (hello) => console.log('hello2 ' + hello ) );
  pubsub.broadcast('Hello' , 'Johnny');
  // error below will be alerted because no channel 
  pubsub.unsubscribe('Greet', () => console.log('Good day'));
  pubsub.broadcast('Greet');
 ```

## PubSubOOP.js
### v0.0.2

PubSubOOP.js is s general purpose pubsub but with context attached/specified.

Difference with PubSub is when subscribing, pass the context and function as an object.
Example
```
  pubsub.subscribe('greet' , { ctx : this , func : this.greet });
```
