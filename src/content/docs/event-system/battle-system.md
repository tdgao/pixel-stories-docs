---
title: How to make a battle system
description: Make turn-based battles with UI buttons and events.
---

The battle system is highly customizable and made with the **Add UI** action and events, but there is also a bigger learning curve to it.

At a high level, a turn-based battle is a loop driven by the player's actions. Each time the player click a button in the UI, the game should decide whether the NPC is defeated, the player is defeated, or the battle continues to the next turn.

## Creating the Battle Events

Create separate events for the different parts of the battle. For example, you might have events named **Start Turn**, **NPC Turn**, and **End Turn**.

For the **NPC Turn** event:

1. Create a new map event and name it **NPC Turn**.
2. Add the actions that the NPC should perform, such as playing an attack animation and changing the player's health.
3. Add any actions needed to check whether the player was defeated. If the player is defeated, add the actions to end the battle and Change map back.

Keeping the NPC's actions in a separate event lets you the same turn after any player action buttons.

## Connecting Player Actions

Use UI buttons for the actions the player can take, such as attacking. The player's turn ends after the selected button's actions have finished.

At the end of each button's actions, add a `Run Event` action that runs the **NPC Turn** event. For example:

```
  Attack button click:
  - Play player attack animation
  - Change NPC health
  - Check if the NPC is defeated
    - If so, end the battle
  - Run event [NPC Turn]
```

Repeat this for each button that completes the player's turn. This makes the NPC take a turn whenever the player finishes an action, then the battle can either end or continue with the next player turn.
