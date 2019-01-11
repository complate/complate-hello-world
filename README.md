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

Have Java installed. (We successfully used Oracle's 1.8.0_171, OpenJDK 1.8.0_181
and OpenJDK 11.0.1, and expect these and any in between to work for you as well.)


```
cd spring-mvc
./mvnw spring-boot:run
```

### Note

We use the components unchanged, but our top-level root script
`[index.js](spring-mvc/src/main/views/index.js)` contains a call to `Java.from`
translating a Java `Collection` to a JavaScript `Array`.
