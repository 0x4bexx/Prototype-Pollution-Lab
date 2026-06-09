# Prototype Pollution Lab

A small JavaScript lab created to understand how Prototype Pollution can affect authorization checks.

## Objective

The goal of this project is to demonstrate how a vulnerable authorization check can be bypassed when an attacker injects properties into the prototype chain.

This lab compares insecure and secure authorization checks and shows how different user configurations react to Prototype Pollution.

## Scenarios

The lab tests three different users:

1. A legitimate administrator (`isAdmin: true`).
2. A user without the `isAdmin` property.
3. A user with `isAdmin: false`.

## What This Lab Demonstrates

### Insecure Verification

The application only checks:

```javascript
if (user.isAdmin)
```

Because JavaScript searches the prototype chain, a polluted prototype may cause a non-administrator user to be treated as an administrator.

### Secure Verification

The application checks:

```javascript
user.hasOwnProperty("isAdmin") && user.isAdmin
```

This verification ensures that the property belongs to the user object itself instead of being inherited from the prototype chain.

## Expected Results

- The administrator remains an administrator.
- The user without an `isAdmin` property becomes affected by Prototype Pollution.
- The user with `isAdmin: false` is not affected because the property already exists on the object.

## Running the Lab

```bash
node prototype-pollution.js
```

## Learning Notes

This project started as a simple visualization of secure and insecure authorization checks.

During development, additional scenarios were added to answer questions such as:

- What happens if the property does not exist?
- What happens if the property exists and is set to false?
- What happens if the user is already an administrator?

These scenarios helped illustrate how Prototype Pollution interacts with different authorization implementations.

## Disclaimer

This project was created for educational purposes to better understand Prototype Pollution and authorization logic in JavaScript.
