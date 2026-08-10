---
title: Multiple Maps
description: Create multiple maps and move the player between them.
---

Multiple maps let your game move between separate areas, such as rooms, houses, towns, caves, or different floors of the same building. Instead of building everything in one large map, you can create smaller maps and connect them with events.

## Adding Maps

Use the map dropdown at the top of the map editor to create and switch between maps. When you add a new map, it becomes part of the same project and can use the same tilesets, objects, characters, and actions as your other maps.

## Moving Between Maps In Game

To move the player from one map to another, use the **Change map** action.

```
  In an event trigger:
  - Change map [Map 2, x, y]
```

For example, a doorway can transfer the player from an outside town map into a house map. Add an event trigger and the **Change map** action to it, set the map and player position, then place that event trigger over the doorway.

If the player should be able to return, create another event on the destination map.

```
  Map 1 event trigger:
  - Change map [Map 2, x, y]

  Map 2 event trigger:
  - Change map [Map 1, x, y]
```

:::note
Use [event triggers](../../event-system/event-triggers/) for doors, stairs, portals, and area exits. **On touch** works well when the player should transfer as soon as they walk into the trigger, while **On interact** works well for doors or objects the player should intentionally use.
:::
