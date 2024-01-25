What I learned from this assignemnt I've learned that somewhat how to resolve conflicts between the compiuter and github


[Readme.md](/README.md)

IP address for server: 52.55.2.3
To command SSH to server:  ssh -i /Users/chasecook/Downloads/Chase\'s\ AWS\ keypair.pem ubuntu@52.55.2.3
[Route53]<https://learn.cs260.click/page/webServers/amazonWebServicesRoute53/amazonWebServicesRoute53_md>

# Git
* **git init ** convets an existing project to a git repository, or intilizaes a new empty repository
* **git add** tracks everything and **git status** to see the what respository looks like now
* git commit -m 'type message'
## Diff
* Most of time we don't wantto reverse to earlier commit, but just want tto compare differences between commits
*   To refer to earlier commits you just add ~ and the numerical distance from HEAD that you want to reference. In this case we will compare HEAD and HEAD~1: git diff HEAD HEAD~1
## Branches
* branching allows to work on variations of code wihtout affecting main branch
*   create new one ny doing "git branch A" for ex
*   work on new branch with git checkout A
*   to merge and execute branch to main to git merge A
##Cloning repository
* git clone 'url of github repository'
* When cloning its placed in the subdirecotry named with the name of the respository so make sure you are in the directory where you keep all source repositoreis before running command
* cd repository name to get to the repository directoy

  
# Caddy Info
* web service for HTTP requests and serves requested static files or routes to another web service
*   ability to route requests is called gateway or reverse
* ssh -i [key paur file] ubuntu@domain_name
*   to configure cd ~ then vi Caddyfile
* do nano caddyfile to for editing and :wq to save and exit
* configure file ~/Caddyfile
* HTML files: ~/public_html

# EC2
* To ssh to server to ssh -i [key pair] ubuntu@ip_address
* do ls -l to view the home directory

# The Console
* in the warp app do  pwd to see which directory you are in
*   list all files using ls(list files) and ls -la for hidden ones in a long format
*   Commands: echo - Output the parameters of the command
cd - Change directory/ mkdir - Make directory/ rmdir - Remove directory/ rm - Remove file(s)/ mv - Move file(s)/ cp - Copy files/ ls - List files/ curl -/ Command line client URL browser/ grep - Regular expression search/ find - Find files/ top - View running processes with CPU and memory usage/ df - View disk statistics/ cat - Output the contents of a file/ less - Interactively output the contents of a file/ wc - Count the words in a file/ ps - View the currently running processes/ kill - Kill a currently running process/ sudo - Execute a command as a super user (admin)/ ssh - Create a secure shell on a remote computer/ scp - Securely copy files to a remote computer/ history - Show the history of commands/ ping - Check if a website is up/ tracert - Trace the connections to a website/ dig - Show the DNS information for a domain/ man - Look up a command in the manual
* | takes output from command on left and pipes/passes it to command on right
* '>' redirects output to file(overwrites if exists)
* '>>' redirects to file(appends if file exists)
*   ls -l | grep 'Nov' | wc -l takes files in directory, pip into grep to serach for files created in Nov then pipes into WC to count number of files fwould with date of NOV
*   CTRL-R: use type ahead to find previous command
*   CTRL-C kill curretly running command
[The Console info]<https://github.com/webprogramming260/.github/blob/main/profile/essentials/console/console.md>

# **Notes for HTML**
## Elements and Tags
* p(paragrph tag)
* Closing teg has </character>
* "<html>" represents top level page structure
*   followed by head containing metadata bout the page/page title
*   <head>, next line tabed <title>title name</title>
*   go back a tab then close with body(contains elements  presenting conent structure
* <main>represents main content structure as opposed to tings like headers, footers, avigation content</main>
## Attributes
* Describes sepcific deatils of element
* id= gives unitque id to element to distinguis from others
* class= designates element being classified into named groups of elements ex <p id= "hello" class="greeting>Hello world</p>
## Hyper Links
* started with anchor tag <a href="url">name shown</a>
## common elements
* **html**: The page container/ **head**: Header information/ **title**: Title of the page/ **meta**:	Metadata for the page such as character set or viewport settings/ **script**: JavaScript reference. Either a external reference, or inline/ **include**:	External content reference/ **body**:	The entire content body of the page/ **header**:	Header of the main content/ **foote**r:	Footer of the main content/ **nav**:	Navigational inputs/ **main**:	Main content of the page/ **section**:	A section of the main content/ **aside**:	Aside content from the main content/ **div**:	A block division of content/ **span**:	An inline span of content/ **h<1-9**>:	Text heading. From h1, the highest level, down to h9, the lowest level
* p:	A paragraph of text
* b:	Bring attention
* table:	Table
* tr:	Table row
* th:	Table header
* td:	Table data
* ol,ul:	Ordered or unordered list
* li:	List item
* a:	Anchor the text to a hyperlink
* img:	Graphical image reference
* dialog:	Interactive component such as a confirmation
* form:	A collection of user input
* input	User: input field
* audio:	Audio content
* video:	Video content
* svg: Scalable vector graphic content
* iframe:	Inline frame of another HTML page
* can add comments by doing <!-- coment end with -->
* Special characters
*   &: &amp;
*   <  &lt;
*   >  &gt;
*   ": &quot;
*   ' &apos;
*   smiley face: &#128521;
## HTML structure
![HTML Code examplpe.](https://github.com/chasetheterrible/CS260-startup/blob/main/Example%20html%20code.png)
![Code output.](https://github.com/chasetheterrible/CS260-startup/blob/main/Output%20html%20code.png)
* Block vs Inline: Block element is to distinguish flow in the content structure while Inline element is meant to be inline within the flow of a block element
*   Ex: <div>He said <b>don't</b> cross the beams.</div>
* If wanting to upload image with URL copy image address by right click(cntrl+click)



## **HTML Input**
* For checkboxes, at the end of the tag(ex <input...checked />) it will auto select the option
