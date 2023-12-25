---
slug: /docs/modding
---

![bb backrooms wiki modding banner](https://user-images.githubusercontent.com/32200281/232258762-98b0885e-b8b1-42fe-a3d9-62c8b9c530c2.png)
<div align="center">

# About this section
###### Last revision on 28.10.2023 (dd.mm.yyyy)
</div>

This section should mostly cover everything about the game's open-source stuff, how to use it, modify and so on.

Well, the game is open source so you're free to see what's hiding behind the blueprint stuff by [downloading the project](https://github.com/DavidJoacaRo/Budget-Backrooms/releases) (not the [binary release](https://github.com/DavidJoacaRo/Budget-Backrooms/releases)).

I hope you'll learn something and do something better for this game or, of your own game.

## ❓ Prerequisites

* Good PC running Windows.
* Make sure you have UE 4.27.2 installed, I cannot help you if you have UE 5 because I NEVER USED IT.
* Basic knowledge of Unreal Engine.
* Basic Brain processing power.
    * Concentrated and calm behavior is recommended.


# 📁 Setting up the Project
---

:::info
**This guide is not foolproof. Make sure you have everything ready before attempting this.**
:::


:::warning

*If you're encountering errors or having difficulties, [post an issue](https://github.com/DavidJoacaRo/Budget-Backrooms/issues) and, with your cooperation, we could try fixing your problem.*

:::
:::danger
* Before that, rename the `.uproject` to anything but not BudgetBackrooms, do this ONLY if you have more copies of the game (like one folder with the fork source code and other the original source code).
    * There's this awkward bug in Unreal, that if you have the same name .uproject, shader recompilation will be re-triggered and we don't want to waste precious time.
:::

---

1. Download / Clone the project using Git or any other preferred method. (git is required to be up to date with the source code)

2. Make sure to install the required plugins inside the [.uproject](https://github.com/DavidJoacaRo/Budget-Backrooms/blob/main/BudgetBackrooms.uproject).
        * ⚠ **Make sure to download & install the Marketplace plugins, and then open the project. Otherwise you'll run into errors, so best advice to install them before.**
    * **AMD FSR (AMD FidelityFX Super Resolution 1.0)** plugin can be found [here](https://gpuopen.com/fidelityfx-superresolution/) since it's not available on the Unreal Marketplace.

3. You may be prompted to "rebuild" `BudgetBackrooms` when opening the project.
* Encountering errors?
    * 1. You could try deleting the `Source/` and the `.sln` if you **don't plan on using C++**.
    * 2. Keep everything in place and follow [these steps](https://github.com/DavidJoacaRo/Budget-Backrooms/issues/27#issuecomment-1546723543).
    * 3. If none of the above worked, make sure you got all the plugins installed as they are used in the project.
        * The paid plugin issue was solved [here](https://github.com/DavidJoacaRo/Budget-Backrooms/pull/28)
* If you don't encounter any (other) errors, proceed to rebuild without doing anything else.

4. Did you get the game's splash screen?
    * Yes
        * You are done, modify the heck of it (the game).

    * No
        * Backtrace your problem, see what went wrong.
        * Revert some steps?
        * Still not working?
            * [Make an issue](https://github.com/DavidJoacaRo/Budget-Backrooms/issues/new), and hopefully, I could try helping you.

