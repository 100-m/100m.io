# *Voltrade* Documentation

This documentation is divided into:
- <a href="#-setup-script" target="_self">***Setup*** script</a>
- <a href="#-software-usages-commands-api" target="_self">***Software*** usages/commands/api</a>
- <a href="#-code-architecture" target="_self">***Code*** architecture</a>
- <a href="#-code-snippets" target="_self">***Code*** snippets</a>

---

# ***Setup*** script

The windows installation script is available [here](https://github.com/vbrajon/dotfiles/blob/master/setup/install-windows.ps1).  
Scripting tool chosen was powershell/bash.  
An Ansible script will be provided if multiple machines needs to be setup.

***Install*** Procédure:
- Open a powershell terminal **as Admin**
- Run the following command:
  `iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/vbrajon/dotfiles/master/setup/install-windows.ps1'))`

***Update*** Procédure:
- Re-run the command
- Answer the prompt with <kbd>u</kbd> for **Update**

***Software*** Installed & Configured:
- googlechrome / atom / nodejs / git / putty / python2 / python3 / office365proplus / adobereader / winrar / 7zip / pyxll / sshfs / z / vim

---

# ***Software*** usages/commands/api

Atom ***Shortcuts***:<small style="float: right;">Replace <kbd>Ctrl</kbd> by <kbd>Cmd</kbd> on Mac</small>

Key | Action
--- | ---
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | Search & Run Command
<kbd>Ctrl</kbd>+<kbd>T</kbd> | Search & Open File
<kbd>Ctrl</kbd>+<kbd>D</kbd> | Select Next / Multicursor
<kbd>Ctrl</kbd>+<kbd>B</kbd> | Autoformat Code

Git ***Shortcuts***

Command | Behavior
--- | ---
`git c` `message` | commit -m `message`
`git co` `branch` | checkout `branch`
`git st` | status --short --branch
`git lg` | log --graph --oneline --shortstat
`git br` | branch
`git cp` `hash` | cherry-pick `hash`
`git pur` | pull --rebase

***CLI*** = CommandLine Utilities: <small style="float: right;">Dotfiles available [here](https://github.com/vbrajon/dotfiles)</small>

Command | Behavior
--- | ---
`z` `search` | Jump to folder matching `search` pattern
`a` `search` | Jump to folder matching `search` pattern + Open in Atom
`o` `search` | Jump to folder matching `search` pattern + Open in File Explorer
`s` `search` | Jump to folder matching `search` pattern + Serve Folder
`h` | `no` arguments: return the last 100 `history`
`h` `search` | `search` argument: return `history` matching `search` pattern
`h` `num` | `num` argument: return last `num` most popular `history` commands
`open` | Open current folder with file explorer
`server` | Serve/Watch current folder + Sync Browser > [browsersync.io](https://www.browsersync.io/)
`ip` | Display local and remote ip
`extract` | Extract archive [rar/zip/tar/gz/+]

***CLI*** Additional Info:
- CLI Utils are available in *git-bash* and not in *powershell* or *cmd*
- Automatically prompt for passphrase in `~/.ssh/` folder
- Automatically launch `tmux` if installed

Chrome ***Extentions***:
- [AdBlock Plus](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb)
- [Disconnect](https://chrome.google.com/webstore/detail/jeoacafpbcihiomhlakheieifhpjdfeo)
- [HTTPS Everywhere](https://chrome.google.com/webstore/detail/gcbommkclmclpchllfjekcdonpmejbdp)
- [Vue.js devtools](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd)
- [Wappalyzer](https://chrome.google.com/webstore/detail/gppongmhjkpfnbhagpmjfkannfbllamg)

PYXLL ***Usage***

SSHFS ***Usage***

---

# ***Code*** architecture

The code is available at [https://github.com/100-m/back-voltrade](https://github.com/100-m/back-voltrade).

#### Folder structure

The *voltrade* folder is the entry-point and centralises:
- specific configuration (connection informations, ticker list, schema)
- initialisation of generic modules (*connector* / *cron*)
- initialisation of specific modules (*analytics* / *business*)
- import (`from voltrade import x`)
- snippets/examples

It is the entry point/glue code and should not contain business logic / generic code / analytics / cron tasks / api.

#### Data

The data comes from *Bloomberg SFTP* (Data Licence) and is stored in a *MSSQL* (Microsoft Sql Server) Database into a *static* and an *historical* table. A *computed* table will be added to store models/analytics informations. (see <a tt href="https://github.com/100-m/back-voltrade/master/voltrade/schema.sql">schema.sql</a>)

Every data request should be done over the *SQL* Database.  
The Bloomberg connector should only be used for initial and incremental automatic tasks (= cron).  

To add a *ticker*, edit `voltrade/tickers.csv` file and run command update_ticker.  
To add a *field*, edit static_fields or historical_fields list in `voltrade/__init__.py` file and run  command update_ticker.  

#### Scheduling

Scheduled commands are run via [**commandr**](https://github.com/vbrajon/commandr).  
The commandr interface is the following: http://127.0.0.1:1111  
The process to schedule a command is the following:
- Add a command: `ipython 'S:\CODE\back-voltrade\cron\update_ticker.py'`
- Click on newly added command name to edit advanced settings
- Edit schedule input: `R/2017-01-01T02:00/PT24H` (see [ISO8601](https://en.wikipedia.org/wiki/ISO_8601#Repeating_intervals) format)

---

# ***Code*** snippets

***SQL*** connector
```python
# NOTE: By default, the request will return the last available date (in the sql database) and every fields (static and historical)
from voltrade import sql_connector
df = sql_connector.request(securities=['ES1 Index'])
df = sql_connector.request(securities=['ES1 Index', 'JB1 Comdty'], daterange=['2017-09-01', '2017-10-01'])
```

```python
# NOTE: For custom request, the connector can be used like this (with _db)
# NOTE: see https://github.com/kennethreitz/records
from voltrade import sql_connector
df = sql_connector._db.query('SELECT * FROM static').export('df')

# NOTE: A sqlachemy connection is also available (with _con)
from voltrade import sql_admin
df.to_sql(name='static', con=sql_admin._con, if_exists='replace', index=False)
```

***Bloomberg SFTP*** connector
```python
# NOTE: bbg_connector should only be used for daily/initial tasks to populate sql
# NOTE: bbg_connector as the same API as sql_connector
# NOTE: the execution time is ~20min (sleep, waiting for bbg response)
from voltrade import bbg_connector, tickers, static_fields, historical_fields
df = bbg_connector.request(securities=['ES1 Index'])
df = bbg_connector.request(securities=tickers, fields=static_fields + historical_fields, daterange=['2010-01-01', '2017-10-01'])
```

***Email*** connector
```python
from voltrade import email
email.send(['valentin@100m.io'], 'Subject', '<h1>Text or HTML<br>content here</h1>')
```

***Commandr*** connector
```python
from voltrade import commandr
commadr.add(command="ipython ~/update_ticker.py", schedule="R/2017-01-01T02:00/PT24H", runhook="#1", onsuccess="echo log >> /log.txt", onsuccess="echo error >> /error.txt")
commandr.delete('#2')
commandr.run('#3')
commandr.kill('#3')
```
