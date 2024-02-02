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
*   smiley face: &#128521

## HTML structure
![HTML Code examplpe.](https://github.com/chasetheterrible/CS260-startup/blob/main/Example%20html%20code.png)
![Code output.](https://github.com/chasetheterrible/CS260-startup/blob/main/Output%20html%20code.png)
* Block vs Inline: Block element is to distinguish flow in the content structure while Inline element is meant to be inline within the flow of a block element
*   Ex: <div>He said <b>don't</b> cross the beams.</div>
* If wanting to upload image with URL copy image address by right click(cntrl+click)



## **HTML Input**
* For checkboxes, at the end of the tag(ex <input...checked />) it will auto select the option
* form: to submit values of input
  
### Input element
* Text: single line vale
* password(obscurred)
* email
* tel(telephone)
* url(address)
* number
* checkbox(inclusive selection)
* radio: exclusive selection
* Range(of numbers)
* date(y,m,d)
* datetime-local: date and time
* month(year,month)
* Week(week of year)
* Color
* file(local file)
* submit(button to trigger form submit)
* !!Important!! To create imnput must specify with type= attribute
*   ex <label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked /> <!-- checked at end means option is auto filled -->
*   name: name of input. Submitted as name of input if used in a form
*   disabled: disables ability for user to interact with input
*   value: initial value of input
*   required: signifies value is required in order to be valid
### Validating Input
* several inputs have auto validation, meaning they won't accept value that is not for example, a number, url, outside of range, or an email
* Can specify required attribute on input element to mark it requiring value before it can be submitted
* Patter attribute exists on text, serach, url, tel, email, passwrod inputs
*   provides a reged that must mathc for the input to be considered valid

## HTML media
### Images
* to include image use image tag and specify src(picture file/url)
* also incldue alt to describe image
* ex <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
### Audio
* To include audo specify src wtih source to audio file
* can include controls attribute to allow user to control playback
*   if not displayed there will be no visual representaion of autio on page
* Autoplay attribute starts audio as soon as audio dile is loaded and loop attribute keeps playing over and over
* ex <audio controls src="testAudio.mp3"></audio>
### Video
* Use video tage and specify src wtih url to source video. Like audio can iinclude control or autoplay
* may need to include crossorigin="anonymous" if requesting filees from different domain name then one serving your content
* ex "<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>"

### Internal Media
* svg and canvas allow to create images directly within HTML
SVG(scalable vector graphics)
* Ex draws black border with red circle: '<'svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
Canvas
* Faciliates 2d Drawing and animation. HTML for canvas is simple but requires javascript for support

# CSS
## CSS intro
* Converts structure/content of HTML into vibrant responsive experience
* CSS is primarily concerned with defining ruleents, or simply rules. Rules are comprised of a selector that selects elements to apply rule to, and one or more declarations that represents property to style with given property value
* p { font-family: ; font-size: ; color:; text-shadow:; }
*   selects all paragrpah elements and changes font, font size, color, and creates gray shadow for the text
### Associating CSS wtih HTML
* 3 ways to associate CSS with HTML, fist is to use style attribute of HTML elemtn and explicitly assign one or more declarations
*   (<p style="color:green">CSS</p>)
* Next way is to use HTMl style element to define CSS rules withitn HTML document. Style element should appear in head element so rules apply to all elements in body
![Associating css with HTML](https://github.com/chasetheterrible/CS260-startup/blob/main/associating%20CSS%20with%20HTML.png)
### Cascading styles
* because elements inherit rules applied to parents you often end up with same declaration property applied to single element multiple times. Ex setting body elements to be red, and paragraph elements to be green and span to be blue, then finally use style element on specific span to be black
![Cascading styles](https://github.com/chasetheterrible/CS260-startup/blob/main/cascading%20example.png)

* In this case rules cascade down from highest nodes in DOM tree to lowest. Any property defiend at lover level will overriede higher.
### The Box Model
* CSS defines everything as boxes, when apply styles, we apply them to region of display that is a rectangualr box. Inermost holds elements content like text or image are displayed. Next is padding that will inherit bacgkround color. After is the border which inherits color, thickness and linestyle, FInal is the margin whihc is considered external to actual  and therefore only represents whitespace. By default width and height of element is defined by content of box
  
* Final way is to use HTML link element to create hyperlink reference to external file containing rules. Link element must appear in head element of document
*   (<link rel=stylesheet href=styles.css />)
*   Using thise form is preferred way to define CSS

## Selector
* To start we select the element(body, main, p, id, class etc) it will effect all those. If we did body if would effect the whole document, sense body is the whole document.
*   Can use the asteriks(*) to select all elements as well
### Combinators
*sections should always have a heading
"(<body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>)"
* Say we want to change the h2 color but only for the sections for each department we provide a descednat cobinator where each item in lst is descendant of previous item so selector would be all h2 descendants of section elements
*   ex section h2 { color: #004400  }
* Examples of combinators to use:
*   descendant(list of descendants): body sectoin
*   child(list of direct children): section > p
*   general sibling(list of siblings) p ~ div
*   adjacent siblin(list of adjacent sibling): p + div
* can use general sibling combinator to incease white space padding on left paragprahs siblings of level two headings
*   h2 ~ p {  padding-left: 0.5cm;  }
*   siblings are on same tab spacing
### Class selector
* select a class put a period in front of it. Ex if class='summary' .summary { font-weight: bold;  }
* can also combine element ame and class selector to select all paragraphs with class summary ex p.summary{...}
### ID selector
* reference ID of element. All ids should be unique
* to select id put a # in front of it. Ex #summary
## Attribute selector
* Allows to select element based upon attributes
* can select any element with given attribute a[href]. Can also specify required value for attribute a[href]=.fish.png] for selector to match
* also supports wildcards siuch as ability to select attribute contaning values specific text p[href*=https://}
### Pseufo selector
* Select based on positional relationship, mouse interaction, hyperlink visitation states, and attributes
* suppose we wnat purple highlight bar to appear only when mouse hovers over text. To accomplish this we change ID selector to select whenever section is hovered over
* ex section:hover { border-left: solid lem purple; }
