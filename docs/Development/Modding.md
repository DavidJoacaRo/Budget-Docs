---
slug: /docs/modding
title: Modding
description: This section should mostly cover everything about the game's open-source stuff, how to use it, modify and so on.
keywords: [docs, budget backrooms, mod, mod guide, budget docs]
---

![bb backrooms wiki modding banner](https://user-images.githubusercontent.com/32200281/232258762-98b0885e-b8b1-42fe-a3d9-62c8b9c530c2.png)
<div align="center">

# About this section
###### Last revision on 01.08.2024 (dd.mm.yyyy)
</div>

This section should mostly cover everything about the game's open-source stuff, how to use it, modify and so on.

Well, the game is open source so you're free to see what's hiding behind the blueprint stuff by [downloading the project](https://github.com/DavidJoacaRo/Budget-Backrooms/releases) (not the [binary release](https://github.com/DavidJoacaRo/Budget-Backrooms/releases)).

I hope you'll learn something and do something better for this game or, for your own game.

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

:::warning

**Make sure to download & install the Marketplace plugins, and then open the project. Otherwise you'll run into errors, so best advice to install them before.**

:::

:::info

* **AMD FSR (AMD FidelityFX Super Resolution 1.0)** plugin can be found [here](https://gpuopen.com/fidelityfx-superresolution/) since it's not available on the Unreal Marketplace.

* If the project has been downloaded using `git clone` then **DiscordRPC** can be installed by typing `git submodule update --init --recursive` in the game's root directory (usually where the `.uproject` is located)
    * If the project has been downloaded directly as a `.zip`, you can go to [LouisRaverdy/DiscordRPC](https://github.com/LouisRaverdy/DiscordRPC) and download the plugin from there.

:::


3. You may be prompted to "rebuild" `BudgetBackrooms` when opening the project.
* Encountering errors? (Troubleshooting Ideas)
    * 1. You could try right-clicking `BudgetBackrooms.uproject` and selecting **Generate Visual Studio project files** then, recompile Budget Backrooms inside Visual Studio (Build > **Build BudgetBackrooms**).
            * If the build didn't succeed anyway, try reading the log and see what went wrong, make sure the C++ Plugins such as **AdvancedSteamSessions** (and a few more) are installed inside the `Plugins` folder in the source code.
    * 2. If none of the above worked, make sure you got all the plugins installed as they are used in the project.
            * The paid plugin issue was solved [here](https://github.com/DavidJoacaRo/Budget-Backrooms/pull/28)
    * 3. Make sure you have Visual Studio installed properly, since it's required to compile everything about C++ in the game, which is being used. Inside Visual Studio Installer, you can try pressing **Modify** at your preferred VS installation, and make sure the option **Game Development with C++** is ticked.
* If you don't encounter any (other) errors, proceed to rebuild without doing anything else.

4. Did you get the game's splash screen?
    * Yes
        * You are done, modify the heck of it (the game).

    * No
        * Backtrace your problem, and see what went wrong.
        * Revert some steps?
        * Still not working?
            * [Make an issue](https://github.com/DavidJoacaRo/Budget-Backrooms/issues/new), and hopefully, I could try helping you.

