// meteor-app.js — Meteor rule violations
// eslint-plugin-meteor targets Meteor-specific APIs

// JS-0727: meteor/no-session — Session is deprecated, use ReactiveVar
Session.set("currentUser", "admin");
const user = Session.get("currentUser");

// JS-0726: meteor/audit-argument-checks — Meteor methods should validate arguments
Meteor.methods({
  addItem(name, quantity) {
    Items.insert({ name, quantity, createdAt: new Date() });
  },
});

// JS-0735: meteor/no-dom-lookup-on-created — DOM not ready in onCreated
Template.myTemplate.onCreated(function () {
  const el = this.$(".my-element");
  el.hide();
});

// NOTE: meteor/scope-dom-lookups (JS-0734) crashes on ESLint 9
// — uses removed context.getAncestors() API. Plugin compat issue.
// Skipping that pattern for now.

export { user };
