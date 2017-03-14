# Walk a list of words

This was a programming challenge I got that bothered me because I didn't
find a solution right way. So I implemented one. You can probably use it to
see in which areas I'm rusty, how I go about problem solving and my approach
to best practices.

### To test it out:

```
$ git clone https://github.com/tfmalt/wordwalker.git
$ cd WordWalker
$ node wordwalker.js -w "ball, bail, tall, bait"
```

### Running help

```
$ node wordwalker.js help

  Usage: wordwalker.js [options] [command]

  Commands:

    help  Display help

  Options:

    -h, --help     Output usage information
    -v, --version  Output the version number
    -w, --words    A quoted and comma separated list of words you want to test for traversal.
```
