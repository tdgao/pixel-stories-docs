---
title: Triggering Events and Actions
description: Add triggers that run events when the player touches or interacts with them.
---

Use event triggers to run actions or play an event when the player interacts with something, presses a key, or uses the mouse.

## Adding a Trigger

To add a trigger to the map, use the `Add Event Trigger` action.

1. Add the `Add Event Trigger` action to the Starting Map Actions. This adds a trigger to the map when the map first loads.
2. In the trigger action, create a new event or link it to an existing event.
3. Choose a trigger type, then configure what activates it. If the trigger uses an area, draw the area in the map.

## Configuring Your Trigger

The following options are available to configure the trigger:

- **Trigger type**
  - **Player interact**: Runs when the player presses the interact key inside the trigger area.
  - **Player touch**: Runs when the player collides with the trigger area.
  - **Keyboard input**: Runs when a key is pressed, released, or held.
  - **Mouse input**: Runs when the mouse is clicked, held, or moves into or out of an area.
- **Position type**: Choose where the trigger activates. Player interact and Player touch triggers can be placed on the map or attached to an NPC. Keyboard and mouse triggers have additional options described below.
- **Trigger area**: Move or resize the area that activates the trigger.
- **Remove trigger**: Choose **Never**, **After triggered once**, or **After triggered several times**. For several times, set the **Trigger count**.

### Keyboard Input

For keyboard triggers, choose a **Key binding**. You can select specific keys, use a player or game control, or create a custom control. Select **Any key** to activate the trigger with any keyboard key.

Custom controls let you reuse a set of keys across multiple triggers. For example, an Attack control could use the Space key. You can create and edit controls in the key binding dropdown or in **Settings → Controls**.

Use **When** to choose how the key activates the trigger:

- **Pressed**: Runs once when the key is pressed.
- **Released**: Runs once when the key is released.
- **Held**: Runs repeatedly while the key is held, waiting for the event to finish before running it again.

For **Position type**, choose **Anywhere in map** or **Area in map**. With Area in map, the player must be inside the trigger area when using the key.

### Mouse Input

For mouse triggers, use **When** to choose what activates the trigger:

- **Mouse left click**: Runs when the left mouse button is clicked.
- **Mouse right click**: Runs when the right mouse button is clicked.
- **Mouse left click held**: Runs repeatedly while the left mouse button is held.
- **Mouse right click held**: Runs repeatedly while the right mouse button is held.
- **Mouse enters area**: Runs when the mouse pointer enters the trigger area.
- **Mouse leaves area**: Runs when the mouse pointer leaves the trigger area.

For **Position type**, choose **Anywhere in map**, **Area in map**, or **On NPC**. These options use the mouse pointer’s position.

Held mouse triggers wait for the event to finish before running it again. Moving the pointer outside the trigger area stops the repeats. Moving it back inside while still holding the button starts them again.

## Story Progression

An event can also contain an `Add Event Trigger` action. This means an event, when activated, can add more event triggers to the map. This is how story progression works in PS Maker.

For example, the Starting Map Actions might add a trigger for talking to an NPC. After that NPC event plays, it can add a new trigger for a door, a note, or another character. One trigger can unlock the next trigger, and your story can move forward step by step.