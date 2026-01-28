---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IcePatch"
  text: "New Android kernel root solution"
  tagline: Forked from APatch, maintained with compatibility in mind
  image:
    src: /logo.png
    alt: IcePatch
  actions:
    - theme: brand
      text: Get started
      link: /what-is-apatch
    - theme: alt
      text: View on GitHub
      link: https://github.com/Anatdx/IcePatch
    - theme: alt
      text: Contribute to documentation
      link: https://github.com/AndroidPatch/IcePatchDocs

features:
  - title: Kernel-based
    details: IcePatch runs in kernel space and has greater concealment and control than userspace root.
  - title: Root access control
    details: Only permitted apps may access or see su, all other apps aren't aware of this.
  - title: APModule
    details: Support for modules similar to Magisk.
  - title: KPModule
    details: Support for modules that allow you to inject any code into the kernel (Provides kernel function inline-hook and syscall-table-hook).
---
