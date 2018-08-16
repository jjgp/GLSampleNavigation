# GLSampleNavigation

![NavigateDemo](NavigateDemo.gif)

> Samsung Galaxy S9, Android 8.0.0

This is a demonstration of the original issue [2475](https://github.com/react-navigation/react-navigation/issues/2475)
upgraded to RN 0.56.0 and React-Navigation ^2.11.2.

This demonstration shows that the GLView shows a persistent black view when navigating between components.

# Solutions

## https://stackoverflow.com/a/3559726

In commit: b038a1755b424ed3b5b78f04de47dfa50db5b25c

```java
getHolder().setFormat(PixelFormat.TRANSLUCENT);
setZOrderOnTop(true);
```

![SettingZOrder](SettingZOrder.gif)

##