![bb backrooms wiki modding banner](https://user-images.githubusercontent.com/32200281/232258762-98b0885e-b8b1-42fe-a3d9-62c8b9c530c2.png)
<div align="center">

# About this section
###### Last revision on 07.08.2023 (dd.mm.yyyy)
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

* *⚠ If  you're encountering errors or having difficulties, [post an issue](https://github.com/DavidJoacaRo/Budget-Backrooms/issues) and, with your cooperation, we could try fixing your problem. This guide is not foolproof. Make sure you have everything in order before attempting this.*

* Before that, rename the `.uproject` to anything but not BudgetBackrooms, do this ONLY if you have more copies of the game (like one folder with the fork source code and other the original source code)

---

1. Download / Clone the project using Git or any other preferred method. (git is required to be up to date with the source code)

2. Make sure to install the required plugins inside the [.uproject](https://github.com/DavidJoacaRo/Budget-Backrooms/blob/main/BudgetBackrooms.uproject).
    * ~~*If you do not have `HardwareData` and `DiscordRichPresence` plugin (both paid apparently), get them from a reliable source or somehow ask me but shhhhh*~~
        * ~~After you got `HardwareData` and `DiscordRichPresence`, make sure they in the **engine's plugin folder** and *not* in the `Plugins/` folder of the game.~~ ***ℹ️ Issue was fixed in [this pull request](https://github.com/DavidJoacaRo/Budget-Backrooms/pull/28)***
        * ⚠ **Make sure to download & install the Marketplace plugins, and then open the project. Otherwise you'll run into errors, so best advice to install them before.**
    * **AMD FSR (AMD FidelityFX Super Resolution 1.0)** plugin can be found [here](https://gpuopen.com/fidelityfx-superresolution/) since it's not available on the Unreal Marketplace.

3. You may be prompted to "rebuild" `BudgetBackrooms` when opening the project.
* Encountering errors?
    * 1. You could try deleting the `Source/` and the `.sln` if you **don't planning on using C++**.
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
            * [Make an issue](https://github.com/DavidJoacaRo/Budget-Backrooms/issues/new), and hopefully I could try helping you.

# ❔ FAQ (Frequently Asked Questions)

* What font do you use?
    * Rubik, it's available on the [Google Fonts](https://fonts.google.com) website.

* Which icons do you use for the UI?
    * **Material Icons (not symbols)** that are also available on the [Google Fonts](https://fonts.google.com) website.

* Music?

    * Level 0 uses the song "Key" made by C418 (sorry C418, I was too scared to email you).

    * Main Menu uses a custom song made by me which is available on my [BandLab](https://www.bandlab.com/dabardibid/albums/f27d5d47-02c5-ed11-a8e0-00224844f6cb).

# 📝 Pull Request Bare Minimum

## What's this?

Well let's say this is a quick guide on how to get accepted when making contributions to this game.

## What do I need?

Well, to be honest with you. I accept everything that goes on with the game. UI, Features, Gamemodes, Maps.

* UI's bare acceptance minimum
    * If using icons, they should be the [Material Icons using Two-Tone Style](https://fonts.google.com/icons?icon.style=Two+tone&icon.set=Material+Icons) on white.
    * Text should use Rubik font, make it so it looks good on both small and big screens (even though im incapable to do so).
    * Other, that means blur, transparency, boxes, dialogues or other screens
        * Please at least inspire from existing widgets and try to copy their style.

* Features
    * Make sure the features fit to the game.
        * When adding funny things, make them game changer, use your brain more than mine.
    

* AI
    * It should be good enough, and have a good mechanism.
        * I don't know how to do good AI too so my bad why am I writing this :(

* Gamemodes & Maps

    * Gamemodes
        * Existing Gamemode contributions (ex: working on unavailable or existing gamemdes.)
            * Should be what the Gamemode's title inquires.
            * Improvements and modifications should be explained in the Pull Request's description.
    
        * New Gamemode?
            * It should fit to the game, (e.g. Practice Mode, Multiplayer, Split-Screen, Catch the Flashlight), you know.. something.
    
    * Maps

        * Should use the same "realistic but not so" style like the other levels. A puzzle or mechanism is optional, please also provide infos.
            * FOR THE LOVE OF GOD DO NOT INSTALL 16 ASSET PACKS ONLY FOR ONE FUCKING MAP, GITHUB IS JUST GONNA SUSPEND MY WHOLE REPOSITORY
                * Do NOT make zip bombs out of this game.


## 🔧 Notice about Game Mods or Modpacks

This is if you want to do your own set of modifications, without touching or wanting to contribute to this repository.

The name of Modpacks for this game usually refers to do your own set of custom maps and stuff from your existent knowledge, and modify the game to your liking. Have fun because I'm not sure I can give support so mark them as unofficial please :)

Before that,

**It's recommended to:**
* Clone the repository locally, good luck uploading it because Git LFS rejects me.

* Questions and more can be answered by DM'ing me (David#7643) on Discord or [joining the server](https://discord.gg/WVuTB56ag4).

* Do your own stuff, it's your modpack anyways.

* Credit the sound/texture/model authors properly.
    * Funny joke I forgot to credit them in my own game ;-;

