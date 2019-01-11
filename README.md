complate-hello-world
====================

This demonstrates using the same complate component from different
runtime environments.

What the components do
----------------------

### One trivial component

Simply renders a string in a paragraph


### One less trivial component

* It displays a list (a plain `<ul>`)

* One item in the list is generated locally, by the component itself

* One item comes from the environment using it

* One item comes from the trivial component (but the less trivial component
  doesn't know that)

How to compile the components
-----------------------------

First, build the components and make them accessible:

```
cd components/p
npm link

cd ../list
npm link
```

Running the express example
---------------------------

```
cd express
npm install
npm link complate-hello-world-p complate-hello-world-list
npm start
```

Running the Spring MVC example
------------------------------

```
cd spring-mvc
mvn spring-boot:run
```
