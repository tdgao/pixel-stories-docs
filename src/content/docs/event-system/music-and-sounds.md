---
title: Music and Sounds
description: Use music and sound actions in events.
---

How to use the Music and Sound actions:

- Add an action (either to an event trigger, or standalone) and look for the **Music & Sound** section.
  - Play sound: Plays a sound once.
  - Set background music: Sets an audio to play on loop in the map.
  - Set background music volume: Changes the volume of the audio that was set by **Set background music**.
  - Stop background music: Stops all background music.

Background music is set globally across maps. If you want to play a new song when in **Map 2**, after having playing a song in **Map 1**, make it it's set again in the **Map Enter** actions.

It would look like this:

```
  Map 1's Map enter:
  - Set background music [Song 1]

  Map 2's Map enter:
  - Set background music [Song 2]
```
