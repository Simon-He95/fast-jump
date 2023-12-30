<p align="center">
<img height="200" src="./assets/kv.png" alt="fast jump">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

>WIP
1. 解决vue中组件导入多次link跳转后才能到达期望组件问题 

2. 解决了vue中一些事件等等的变量，跳转到对应实现代码块的问题 

3. 解决了ts默认会点击跳转.d.ts文件，可以通过快捷键直接追踪到原始代码层面

4. 总结：减少到达期望路径中的步骤


## 使用前
![img](/assets/1.jpg)

![img](/assets/2.jpg)

## 使用后
![!img](/assets//3.jpg)

![demo](/assets/demo.gif)

## ✅ 如何使用它

- 鼠标点击到任意变量然后使用快捷键 `mac ? cmd+e : ctrl+e`

## 🎡 新特性

- 支持配置`"fast-jump.click": boolean`来控制是否需要鼠标点击才能输入文件，不建议开启这个属性了，推荐使用快捷键

- `cmd+e` or `ctrl+e` 支持了快捷键跳入，因为使用click的时候会涉及到ts提供的默认跳入选择，这样会需要选择跳入的文件，为了避免这个选择的过程增加了这个快捷键的方式

- 支持了直接跳转到node_modules中一些第三方依赖库的源码，例如引入了ant-design-vue中的某个组件，通过快捷键可以跳到实现该组件的位置

- 支持了auto-import模式下的跳转源码能力

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor/sponsors.png"/>
  </a>
</p>
