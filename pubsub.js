/***********************************************************
 * 
 * Class PubSub
 * Author : Tony Ooi
 * Purpose : general purpose PubSub
 * Version : 0.0.2
 * 
 * *********************************************************/

class PubSub {
    constructor() {
        this.subscribers = new Map();
    }
    /********************************************************************************
     * function : subscribe
     * param : channel - the channel to subscribe to
     *          fn - the associated function to trigger when channel is broadcasted
     * return : nil
     * 
     * ******************************************************************************/
    subscribe(channel,fn) {
        let subscribersList = []; // if channel does not exist then the subscribersList is empty array of functions
        if ( this.subscribers.has(channel) ) {
            subscribersList = this.subscribers.get(channel); // if channel exists then get the subscribersList
        }
        subscribersList.push(fn); // push functions into array of subscribers
        this.subscribers.set(channel,subscribersList); // update the map entries for the channel
    }
    /********************************************************************************
     * function : unsubscribe
     * param : channel - the channel to unsubscribe to
     *          fn - the associated function to remove from the broadcast
     * return : nil and false if err occurs
     * 
     * ******************************************************************************/
    unsubscribe(channel,fn) {
        if ( !this.subscribers.has(channel) ) {
            // if channel does not exists then alert
            alert(channel + 'channel does not exist');
            return false;
        }
        let subscribersListFn = this.subscribers.get(channel);
        subscribersListFn = subscribersListFn.filter( subscriberFn => subscriberFn.toString() !== fn.toString() );
        // remove the key if no values exists
        if ( subscribersListFn.length == 0 ) {
            this.subscribers.delete(channel);
            return false;
        }
        this.subscribers.set(channel,subscribersListFn);
    }
    /********************************************************************************
     * function : broadcast
     * param : channel - the channel to broadcast to
     *          fn - the associated functions to trigger when broadcasting channel
     * return : nil and false if err occurs
     * 
     * ******************************************************************************/
    broadcast(channel, ...param ) {
        if( !this.subscribers.has(channel) ) {
            // if channel does not exists then alert
            alert(channel + 'channel does not exist');
            return false;
        }
        let subscribersListFn = this.subscribers.get(channel) ;
        subscribersListFn.forEach( (subscriberFn) => {
            ( param.length == 0 ) ? subscriberFn.call(this,param) : subscriberFn.call(this, ...param);
        });
    }
}