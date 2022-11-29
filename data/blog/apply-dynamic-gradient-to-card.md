---
title: useMemo versus useCallback
date: '2022-01-08'
tags: ['hooks', 'callback']
draft: false
summary: Both useMemo and useCallback are used when you want to optimize your site.
---

React provides many hooks that helps us to avoid multiple logics. Two of them are `useMemo` and `useCallback`.

Both useMemo and useCallback are used when you want to optimize your site. According to React's documentation
`useMemo` is a a React hook that lets you cache(memoize) the result fo a calculation between renders. However, `useCallback` is a React hook that lets you cache a function definition between renders. But what does this mean?

Both `useCallback` and `useMemo` take a function and dependencies.

# useCallback

`const cachedFunction = useCallback(function, dependencies)`

useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

# useMemo

`const cachedResult = useMemo(function, dependencies)`

You will often see useMemo alongside useCallback. They are both useful when you’re trying to optimize a child component.

Example usage:

```
import { useMemo, useCallback, useState } from 'react';

function ProductPage() {
  const [product, setProduct] = useState(0);

  const result = useMemo(() => { // Calls your function and caches its result
    return setProduct(() => product * product));
  }, [product]);

  return (
    <div className={theme}>
      <p>{product}
    </div>
  );
}
```

## Differences

- `useMemo` caches the result of calling your function. In this example, it caches the result of calling computeRequirements(product) so that it doesn’t change unless product has changed. This lets you pass the requirements object down without unnecessarily re-rendering ShippingForm. When necessary, React will call the function you’ve passed during rendering to calculate the result.

- `useCallback` caches the function itself. Unlike useMemo, it does not call the function you provide. Instead, it caches the function you provided so that handleSubmit itself doesn’t change unless productId or referrer has changed. This lets you pass the handleSubmit function down without unnecessarily re-rendering ShippingForm. Your code won’t be called until the user submits the form.
