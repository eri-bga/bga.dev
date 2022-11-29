---
title: A code snippet for chakra color mode switcher icons
date: '2022-03-08'
tags: ['chakra-ui']
draft: false
summary: This snippet can be included in any chakra powered reactjs
---

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
This snippet is written in typescript, so, make sure your application is written in typescript.

## Code snippet

```javascript
import * as React from 'react'
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
```
