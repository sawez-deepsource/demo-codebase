// ember-component.js — Ember rule violations
// eslint-plugin-ember targets Ember patterns

import EmberObject from "@ember/object";
import { computed, observer } from "@ember/object";
import Mixin from "@ember/object/mixin";
import Component from "@ember/component";

// JS-0786: ember/no-get — use native ES getters instead of this.get()
const Person = EmberObject.extend({
  fullName: computed("firstName", "lastName", function () {
    return this.get("firstName") + " " + this.get("lastName");
  }),
});

// JS-0795: ember/no-mixins — mixins are deprecated in Ember
const LoggingMixin = Mixin.create({
  log(msg) {
    console.log(msg);
  },
});

// JS-0798: ember/no-observers — observers are discouraged
const WatchedComponent = Component.extend({
  nameChanged: observer("name", function () {
    console.log("name changed");
  }),
});

// JS-0810: ember/no-volatile-computed-properties — volatile() is deprecated
const Settings = EmberObject.extend({
  timestamp: computed(function () {
    return Date.now();
  }).volatile(),
});

export { Person, LoggingMixin, WatchedComponent, Settings };
