# Groups
 ---

## Create a group
 ---
Go to **groups.yml** and enter the following:

```yaml
groupname:
  - "WorldName1"
  - "WorldName2"
```

The **"gropname"** is the name of the group must be in lowercase, and the **"WorldName"** would be the names of the worlds.

## Use the group
 ---

To use the group, you must go to **config.yml** and add the following text:

Remember that you don't have to add everything, just add the group in the list of plugins already generated.

```yaml
plugins:
  Example:
   - "g:groupname"
```

The **"g:"** is to indicate that it is a group and the **"groupname"** is the name of the group you want to add to the plugin.
