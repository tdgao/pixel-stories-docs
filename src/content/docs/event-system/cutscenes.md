---
title: How to make a cutscene
description: Make cutscenes with movement, camera, animation, and dialogue actions.
---

Cutscenes can utilize a multitude of different actions, which include:

- Move camera
- Shake camera
- Reset camera position
- Move camera
- Fade transition
- Set NPC/Player direction
- Set NPC/Player movement animations
- Play NPC/Player animation
- Move NPC/Player
- Toggle player movement
- Wait timer

Depending on the type of cutscene you want to make, it will change what actions you will need. For example, let’s say you wanted to make a cutscene where the camera moves, then returns, but the player doesn’t move during the time the camera is gone, you could do something like this:

```
    - Toggle player movement [Disable]
    - Move camera [x, y]
    - Wait timer [time]
    - Reset camera position
    - Toggle player movement [Enable]
```

Now what if you wanted to make a cutscene where the player automatically walks to the location? You could do something like this:

```
  - Toggle player movement [Disable]
  - Move camera [x, y, Reset after completion unchecked]
  - Move Player [x, y]
  - Move NPC [x, y]
  - Dialogue

  ... additional cutscene actions

  (When cutscene is done)
  - Toggle player movement [Enable]
  - Reset camera position
```

Note: Reset after completion moves the camera back after it goes to where you moved it.
