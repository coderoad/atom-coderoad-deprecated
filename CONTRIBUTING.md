# Contributing to CodeRoad

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to CodeRoad, which is hosted in the [CodeRoad Organization](https://github.com/coderoad) on GitHub. These are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.


#### Table Of Contents

[Code of Conduct](#code-of-conduct)
 |* [Tutorials](#tutorials)
 |* [Contact](#contact)

[Contributing](#contributing)
 |* [Reporting Bugs](#reporting-bugs)
 |* [Suggesting Enhancements](#suggesting-enhancements)
 |* [Pull Requests](#pull-requests)


## Code of Conduct

### Tutorials

Tutorial content is owned by the creator. Please take responsibility not to violate any copyright with your contents.

### Contact

Please report any code of conduct issues to [coderoadapp@gmail.com](mailto:coderoadapp@gmail.com).


# Contributing

### Reporting Bugs

This section guides you through submitting a bug report for Atom-CodeRoad. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). If you'd like, you can use [this template](#template-for-submitting-bug-reports) to structure the information.

#### Before Submitting A Bug Report

* Check if you can reproduce the problem [in the latest version of Atom](https://atom.io/docs/latest/hacking-atom-debugging#update-to-the-latest-version), if the problem happens when you run Atom in [safe mode](https://atom.io/docs/latest/hacking-atom-debugging#check-if-the-problem-shows-up-in-safe-mode), and if you can get the desired behavior by changing [Atom's or packages' config settings](https://atom.io/docs/latest/hacking-atom-debugging#check-atom-and-package-settings).
* **Perform a [cursory search](https://github.com/coderoad/atom-coderoad/issues)** to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create [an issue](https://github.com/coderoad/atom-coderoad/issues) at Atom-CodeRoad and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Atom, e.g. which command exactly you used in the terminal, or how you started Atom otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an Atom command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on OSX and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Atom crashed**, include a crash report with a stack trace from the operating system. On OSX, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance**, include a [CPU profile capture and a screenshot](https://atom.io/docs/latest/hacking-atom-debugging#diagnose-performance-problems-with-the-dev-tools-cpu-profiler) with your report.
* **If the Chrome's developer tools pane is shown without you triggering it**, that normally means that an exception was thrown. The Console tab will include an entry for the exception. Expand the exception so that the stack trace is visible, and provide the full exception and stack trace in a [code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines) and as a screenshot.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem in [safe mode](https://atom.io/docs/latest/hacking-atom-debugging#check-if-the-problem-shows-up-in-safe-mode)?**
* **Did the problem start happening recently** (e.g. after updating to a new version of Atom) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Atom-CodeRoad?** What's the most recent version in which the problem doesn't happen? You can download older versions of Atom-CodeRoad from [the releases page](https://github.com/coderoad/atom-coderoad/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of Atom are you using?** You can get the exact version by running `atom -v` in your terminal, or by starting Atom and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **Which version of Node are you using?** Run `node -v` in your terminal.
* **Which version of NPM are you using?** Run `npm -v` in your terminal.
* **What's the name and version of the OS you're using**?
* **Are you running Atom in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Which [packages](#atom-and-packages) do you have installed?** You can get that list by running `apm list --installed`.
* **Are you using [local configuration files](https://atom.io/docs/latest/using-atom-basic-customization)** `config.cson`, `keymap.cson`, `snippets.cson`, `styles.less` and `init.coffee` to customize Atom? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Are you using Atom with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

#### Template For Submitting Bug Reports

    [Short description of problem here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behavior:**

    [Describe expected behavior here]

    **Observed behavior:**

    [Describe observed behavior here]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which follow reproduction steps to demonstrate the problem](url)

    **Atom version:** [Enter Atom version here]
    **OS and version:** [Enter OS name and version here]
    **NodeJS Version:** [Enter NodeJS name and version here]
    **NPM Version:** [Enter NPM name and version here]

    **Installed packages:**

    [List of installed packages here]

    **Additional information:**

    * Problem can be reproduced in safe mode: [Yes/No]
    * Problem started happening recently, didn't happen in an older version of Atom: [Yes/No]
    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]
    * Problem happens with all files and projects, not only some files or projects: [Yes/No]

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Atom-CodeRoad, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). If you'd like, you can use [this template](#template-for-submitting-enhancement-suggestions) to structure the information.

#### Before Submitting An Enhancement Suggestion

* **Are you using the latest version?** Check if you're using the latest version of Atom-Coderoad. Go to *Atom* -> *preferences* -> *packages* -> search for "atom-coderoad" to find the version. Compare this to the [latest version](https://github.com/coderoad/atom-coderoad/releases).
* **Check if there's already [a package](https://atom.io/packages) which provides that enhancement.**
* **Perform a [cursory search](https://github.com/coderoad/atom-coderoad/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on OSX and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Atom users and isn't something that can or should be implemented as a [community package](#atom-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of Atom you're using.** You can get the exact version by running `atom -v` in your terminal, or by starting Atom and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **Specify the name and version of the OS you're using.**
* **Specify the version of NodeJS & NPM you are using.** Run `node -v` & `npm -v`

#### Template For Submitting Enhancement Suggestions

    [Short description of suggestion]

    **Steps which explain the enhancement**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Current and suggested behavior**

    [Describe current and suggested behavior here]

    **Why would the enhancement be useful to most users**

    [Explain why the enhancement would be useful to most users]

    [List some other text editors or applications where this enhancement exists]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which demonstrate the steps or part of Atom the enhancement suggestion is related to](url)

    **Atom Version:** [Enter Atom version here]
    **OS and Version:** [Enter OS name and version here]
    **NodeJS Version:** [Enter NodeJS name and version here]
    **NPM Version:** [Enter NPM name and version here]

### Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* End files with a newline.

#### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* When only changing documentation, include `[ci skip]` in the commit description
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on Mac OS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings
