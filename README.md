<p align="center">
<img height="200" src="./assets/kv.png" alt="fast jump">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

>WIP
1. Solve the problem of the expected component after the component import in vue can only be reached after multiple link jumps.

2. Solve the variables of some events and so on in vue, and jump to the corresponding implementation code block.

3. Solve the problem that ts will click to jump to the .d.ts file by default, which can be directly traced to the original code level through the shortcut key.

4. Summary: Reduce the steps to reach the desired path

5. Provide a display of the deep type in the ts file

## Before use
![img](/assets/1.jpg)

![img](/assets/2.jpg)

## After use
![!img](/assets/3.jpg)

![demo](/assets/demo.gif)

## ✅ How to use it

- Click on any variable and then use the shortcut key `mac? cmd+e : ctrl+e`

## 🎡 Features

- Support the configuration of "fast-jump.click": boolean` to control whether you need to click the mouse to enter the file. It is not recommended to turn on this attribute. It is recommended to use shortcut keys.

- `cmd+e` or `ctrl+e` supports shortcut key jump-in, because when using click, it will involve the default jump-in option provided by ts, so you will need to select the jump-in file. In order to avoid this selection process, this shortcut key method is added.

- Supports direct jump to the source code of some third-party dependency libraries in node_modules, such as the introduction of a component in ant-design-vue, and you can jump to the position where the component is implemented through shortcut keys.

- Support the ability to jump to source code in auto-import mode

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.png"/>
  </a>
</p>
