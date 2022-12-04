# react-use-hooks

> React Customised Hooks Library

[![Downloads](https://img.shields.io/npm/dm/@tam11a/react-use-hooks.svg)](https://www.npmjs.com/package/cropperjs) [![NPM](https://img.shields.io/npm/v/@tam11a/react-use-hooks.svg)](https://www.npmjs.com/package/@tam11a/react-use-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Performant, flexible & extensible hooks with easy-to-use flexibility. react-use-hooks reduces the amount of code you need to write while removing unnecessary re-renders.

## Table of contents

- [Getting started](#getting-started)
- [API](#api)

## Getting started

### Installation

```bash
npm install --save @tam11a/react-use-hooks
```

## API

- [useTitle](#usetitle)
- [useToggle](#usetoggle)
- [usePaginate](#usepaginate)

## useTitle

Change the Website Title with `useTitle()`.

### Import

```jsx
import { useTitle } from "@tam11a/react-use-hooks";
```

### Usage

```jsx
useTitle("My First App"); // Change the app title
```

Pass the expected title you want the website renamed and it's done.

### Example

```jsx
import React from "react";
import { useTitle } from "@tam11a/react-use-hooks";

const App = () => {
  // useTitle() to change the app title
  useTitle("My First App");
  return (
    <>
      <div>Hello World!</div>
    </>
  );
};

export default App;
```

## useToggle

`useToggle` is the toggle state functionality everytime you need to make in different component.

### Import

```jsx
import { useToggle } from "@tam11a/react-use-hooks";
```

### Usage

```jsx
const { state, toggleState, setState } = useToggle(defaultValue);
```

Current state in `state`,

toggle function in `toggleState()`

or directly set the state value with `setState()`.

The default value of the boolean state is always `false`

### Example

```jsx
const App = () => {
  const { state, toggleState } = useToggle(true);
  return (
    <>
      <div>
        Light is: <button onClick={toggleState}>{state ? "On" : "Off"}</button>
      </div>
    </>
  );
};
```

## usePaginate

`usePaginate`, the pagination for pages and data tables handling hook.

### Import

```jsx
import { usePaginate } from "@tam11a/react-use-hooks";
```

### Usage

```jsx
const {
  params,
  limit,
  setLimit,
  page,
  setPage,
  search,
  setSearch,
  watch,
  setFilterField,
  getQueryParams,
} = usePaginate();
```

`params` : returns all the params in the hook

`limit` : `number` type variable that returns the limit or page size

`setLimit` : to set the page size or limit, pass the limit

`page` : `number` type variable that returns the current page number

`setPage` : to set the page number, pass the page number

`search` : `string` type variable carries the search string

`setSearch` : to set search string, pass the string

`watch` : to get value of any filter field as state, watch always work

`setFilterField` : set or update any filter field pass the field name & value

`getQueryParams` : returns all params as query object

### Default Values

```jsx
const { getQueryParams } = usePaginate({
  defaultParams: {
    limit: 5,
  },
});
```

Default params can be passed as following. If no params passed, the default params will be setted as,

`limit`: 10

`page`: 1

`search`: ""

`filters`: {}

### Example

```jsx
const App = () => {
  const { page, setPage } = usePaginate();

  return (
    <div>
      <button onClick={() => setPage(page - 1)}>-</button>
      {page}
      <button onClick={() => setPage(page + 1)}>+</button>
    </div>
  );
};
```

```jsx
console.log(getQueryParams());
```

### License

N/A © [tam11a](https://github.com/tam11a)
