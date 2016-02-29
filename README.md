# Atom CodeRoad plugin

Interactive coding tutorials inside of the Atom editor.

See a [video](https://youtu.be/DbLpdgrYVOU).

Read the [docs](https://coderoad.github.io).

*Currently beta. Please post issues.*


### Atom CodeRoad

Use [Atom CodeRoad](https://github.com/coderoad/atom-coderoad) to view and play your tutorial.

You'll need to download the [Atom](https://atom.io/) editor and install *Atom Shell Commands*.

Install the *Atom-CodeRoad* package: `> apm install atom-coderoad`

For an example of how to do this, see the image below:

![Install atom-coderoad](https://coderoad.github.io/img/gif/install-atom-coderoad.gif)

You may also want to install [terminal-plus](https://atom.io/packages/terminal-plus) used in the example above.

Toggle open *Atom-CodeRoad* using the *Packages* menu or press *ctrl-alt-0*.



### Tutorial

To install a tutorial, setup a *package.json* file and save the tutorial as a dependency. Make sure [NodeJS](nodejs.org) is already installed.

You can setup a project quickly by typing `> npm init --y` into the command line in your project's folder. This agrees to all of the defaults for your newly created *package.json* file.

Now you can install a tutorial. Run `> npm install --save-dev $THE-PACKAGE-NAME$` to save the tutorial as a package development dependency. If you run *Atom-CodeRoad* you should see the tutorial appear on the first screen.

![Install a Tutorial](https://coderoad.github.io/img/gif/install-tutorial.gif)
