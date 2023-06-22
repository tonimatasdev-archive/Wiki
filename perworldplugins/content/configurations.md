# Configurations
 ---
### config.yml

#### Update Checker
```yaml
updateChecker: true
```
This option is used to disable or enable the update checker.

#### Metrics
```yaml
metrics: true
```
This option is used to disable sending metrics to [bStats](https://bstats.org/). Disabling this may reduce the CPU usage very slightly.

#### Blacklist/Whitelist
```yaml
blacklist: true
```
This option is used to add the plugins into a blacklist.

Setting `blacklist: true` causes plugin that are added to the list to not work in the specified world.

Setting `blacklist: false` causes plugin that are added to the list to work in the specified world. Those that are not listed there, won't work.

#### Plugin List
```yaml
plugins:
  PluginName:
    - world
    - world_nether
```
This is an example of the plugins list. It automatically adds the name of each of the plugins you have in your server, so you don't have to worry about that. In this list you can add the worlds you want to disable/enable depending on the `blacklist` configuration.
You can see the name of the worlds in your worlds folder.

### groups.yml
This is a future planned feature. It doesn't work yet.