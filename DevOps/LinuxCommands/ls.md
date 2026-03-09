ls Command – Quick Notes (Linux)
1. Basic Syntax
ls [options] [directory/file]

Example:

ls
ls /home
ls file.txt

Purpose: List files and directories

2. Most Used ls Options
Command	Meaning
ls	list files
ls -l	long format
ls -a	show hidden files
ls -A	hidden except . ..
ls -h	human readable sizes
ls -R	recursive listing
ls -t	sort by time
ls -S	sort by size
ls -r	reverse order
ls -1	one file per line
ls -d	show directories only
ls -i	show inode number
3. Long Listing (ls -l)
ls -l

Example output:

-rw-r--r-- 1 kunal kunal 234 Mar 9 file.txt
drwxr-xr-x 2 kunal kunal 4096 Mar 9 folder

Structure:

[file type][permissions] [links] [owner] [group] [size] [date] [name]

File types:

Symbol	Meaning
-	file
d	directory
l	symbolic link
4. Hidden Files

Hidden files start with .

Example:

.git
.bashrc
.env

Commands:

ls -a
ls -A

Difference:

Command	Shows
ls -a	. .. hidden
ls -A	hidden only
5. Useful Combinations
Command	Purpose
ls -la	long + hidden
ls -lh	human readable sizes
ls -ltr	oldest files first
ls -lt	newest first
ls -lhS	largest files first

Most common dev command:

ls -lah
6. File Filtering

List specific files:

ls *.cpp
ls *.txt
ls *.py

Multiple types:

ls *.cpp *.h
7. Directories Only
ls -d */

Example output:

folder1/
folder2/
8. Sorting

Sort by size:

ls -S

Sort by time:

ls -t

Reverse order:

ls -r

Natural sorting:

ls -v

Example:

file1
file2
file10
9. Recursive Listing
ls -R

Shows files inside all subdirectories.

10. Human Readable Size
ls -lh

Output example:

1K
4M
2G

Instead of:

1024
4096000
11. Show Inode Number
ls -i

Example:

345345 file.txt
543534 main.cpp

Used in filesystem debugging.

12. Show Only Hidden Files
ls -d .*
13. Important . and ..
Symbol	Meaning
.	current directory
..	parent directory

Example:

cd ..

Move up one directory.

14. Useful Tricks
Pipe with grep
ls | grep cpp

Find .cpp files.

Scroll large directories
ls -lah | less
Colored output
ls --color=auto

Directories → blue
Executables → green

15. Common Errors / Gotchas ⚠️
Hidden files not visible

Problem:

ls

Fix:

ls -a
Default sorting confusion

Default sorting = alphabetical

Example:

file1
file10
file2

Use:

ls -v
Spaces in filenames

Example:

my file.txt

Use quotes:

cat "my file.txt"
Permission denied

Example:

ls /root

Fix:

sudo ls /root
16. Useful Alias (Pro Tip)

Add to .bashrc

alias ll="ls -lah"

Then run:

ll
17. Empty Directory Case
ls

Output:

(no output)

But:

ls -a

Shows:

.
..
Quick Revision (Important Ones)
ls
ls -l
ls -a
ls -lah
ls -lt
ls -ltr
ls -lhS
ls -R
ls *.cpp
ls -d */