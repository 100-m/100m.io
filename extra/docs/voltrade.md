<style>
kbd {
  display: inline-block;
  padding: 0 .5rem;
  border: var(--border);
  border-radius: 2px;
  background: var(--background-2);
  color: var(--dark-text-1);
  text-transform: none;
  font-weight: 300;
  font-size: 1.2rem;
  font-family: monospace;
  line-height: 1.8;
}
kbd {
  padding: .1em .6em;
  margin: 0 .1em;
  color: #333;
  text-shadow: 0 1px 0 #fff;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;
  white-space: nowrap;
}
table, ul {
  margin-top: -20px;
  margin-bottom: 30px;
}
table thead {
  display: none;
}
</style>

<div class="header">
  <link rel="stylesheet" href="/css/100m.css">
  <img style="position: relative;z-index: -1;" src="/extra/prez/01.jpg" />
  <h1>Voltrade Setup</em></h1>
</div>

This documentation is divided into:
- ***Setup*** script
- ***Software*** usages/commands/api
- ***Code*** snippets

---

# ***Setup*** script

The windows installation script is available <a tt href="https://github.com/100-m/back-voltrade/blob/master/setup/install-windows.ps1">here</a>.  
Scripting tool chosen was powershell/bash.  
An Ansible script will be provided if multiple machines needs to be setup.

***Install*** Procédure:
- download (or copy/paste) the file `install-windows.ps1` on the machine to set up
- double-clic on the file (or run it from cmdline)
- accept admin prompt / enter password

***Update*** Procédure:
- re-run the script `install-windows.ps1`
- answer the prompt with <kbd>u</kbd> for *Update*

***Software*** Installed & Configured:
- googlechrome / atom / nodejs / git / putty / python2 / python3 / office365proplus / adobereader / winrar / 7zip / pyxll / sshfs / z / vim

---

# ***Software*** usages/commands/api

Chrome ***Extentions***:
- [AdBlock Plus](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb)
- [Disconnect](https://chrome.google.com/webstore/detail/jeoacafpbcihiomhlakheieifhpjdfeo)
- [HTTPS Everywhere](https://chrome.google.com/webstore/detail/gcbommkclmclpchllfjekcdonpmejbdp)
- [Vue.js devtools](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd)
- [Wappalyzer](https://chrome.google.com/webstore/detail/gppongmhjkpfnbhagpmjfkannfbllamg)

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

***CLI*** = CommandLine Utilities: <small style="float: right;">Dotfiles available <a tt href="https://github.com/vbrajon/dotfiles">here</a></small>

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

PYXLL ***Usage***

SSHFS ***Usage***

---

# ***Code*** snippets

***CSV*** connector

***JSON*** connector

***SQL*** connector

***Firebase*** connector

***Bloomberg*** connector
