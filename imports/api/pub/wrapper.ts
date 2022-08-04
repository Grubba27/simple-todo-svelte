import {Meteor} from "meteor/meteor";
import {Store} from "/imports/api/pub/type";

const W = <S = Store>() => {
  const sub =
    <T extends keyof S>(key: T & string, cb: (v: S[T]) => void)
      : Meteor.SubscriptionHandle => {
      return Meteor.subscribe(key, cb);
    }
  const pub =
    <T extends keyof S>(key: keyof Partial<S> & string, fn: () => S[T])
      : void => {
      Meteor.publish(key, fn)
    }
  return {sub, pub};
}
let _ = W();
export {_ as W};
