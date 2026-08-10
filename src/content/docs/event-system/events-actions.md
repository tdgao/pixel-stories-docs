---
title: Events and Actions
description: Understand how events and actions drive game logic in PS Maker.
---

This article explains what actions and events are, where they run, and how to add them in the editor.

## Common Mechanics

- Talk to an NPC with dialogue and choices.
- Read a note on a table many times.
- Pick up an item that disappears after use.
- Unlock a room after finding an item.

## Actions

An action is basically one thing the game can do. You can read actions like a list of steps that the game will perform.

Actions will run one after another in order. This matters because sometimes an action can depend on a previous one, such as running `Spawn NPC` before `Move NPC`.

You can reorder the actions by drag and drop.

## Events

An event is a list of actions. There are local events (the ones specific to one event trigger), map events (specific to one map), and global events. Map and global events are reusable.

## Player Interactions

To run actions or play an event when the player interacts or touches something, use event triggers. See [Event Triggers](/event-system/event-triggers/) for more details.

:::note[Action Previews in Editor]
The editor shows a preview of the current state for the action you are viewing. For NPCs, the current position is shown normally. Previous positions are shown at half opacity.
:::

## Map Start, Enter, and Leave

The map start, enter and leave events are related to what actions play when the player goes between maps (with "**Change map**" action).

Map start:

- Runs the action When the map first loads. This happens when the player first goes into the map.
- Useful for basically setting everything up in the map.

Map enter:

- This plays every time the player enters the map.
- It plays after Map start if its the first time loading.
- Useful for setting the background music every time you enter, or ensuring player always enters to a specific spot with "set player position" or even just playing a dialogue saying the map name when you enter the map

Map leave:

- This plays every time the player leaves the map, going into another map.
- It runs on the map the player is in, right before it changes the map
- Useful just for playing some actions every time before committing the player to leave the map. Maybe a dialogue, maybe remove a bunch of NPCs to reset it for a puzzle.

## Common Actions

- **Show Dialogue**: Shows dialogue text to the player.
- **Show Choices**: Shows choices and runs the selected event.
- **[Add Event](/event-system/event-triggers/)**: Adds an event trigger to the map.
- **[Transfer Player](/map-editor/multiple-maps/)**: Moves the player to another map or position.
- **Spawn NPC**: Places an NPC into the map.
- **Move NPC/Player**: Moves an NPC or the player.
- **Set NPC/Player Direction**: Changes which direction a character faces.
- **Move Camera**: Moves the camera to a position or target.
- **Set Background Music**: Changes the music currently playing.
- **Play Sound**: Plays a sound effect.
- **[Set Variable](/event-system/conditional-branching/)**: Updates a switch, number, or text variable.
