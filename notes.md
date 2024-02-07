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
* select a class put a period in front of it. Ex if class='summary' .summary
* can also combine element name and class selector to select all paragraphs with class summary ex p.summary

### ID selector
* reference ID of element. All ids should be unique
* to select id put a # in front of it. Ex #summary(selects anything with id as summary)
## Attribute selector
* Allows to select element based upon attributes
* can select any element with given attribute a[href]. Can also specify required value for attribute a[href]=.fish.png] for selector to match
* also supports wildcards siuch as ability to select attribute contaning values specific text p[href*=https://}
### Pseufo selector
* Select based on positional relationship, mouse interaction, hyperlink visitation states, and attributes
* suppose we wnat purple highlight bar to appear only when mouse hovers over text. To accomplish this we change ID selector to select whenever section is hovered over
* ex section:hover { border-left: solid lem purple; }

## CSS Declarations
* Specify porperty and vlaue assign when rule selector matches one or more elemnts. There are tons of possible properties defined to modify style of HTML
![Some Declerations](https://github.com/chasetheterrible/CS260-startup/blob/main/Declaration%20properties.png)
![More declarations](https://github.com/chasetheterrible/CS260-startup/blob/main/more%20delcarations.png)

### Units
* Helps define size of properties. Example when the width of an element can be dfined by usin gabsolute unites such as number of pixels or inches. Or percentages of parent element, percentage of viewport dimension or multiplier of size letter m (1.5em)
![Examples of Units](https://github.com/chasetheterrible/CS260-startup/blob/main/units.png)

### Color
* Ways to describe color, raning from representations familiar to programmers
![Color examples](https://github.com/chasetheterrible/CS260-startup/blob/main/color%20methods.png)

## Fonts
* font-family property defines what fonts should be used. Represents ordered list of fonts. First font in list available will be used
### Font families
* 4 major families 1) Serif 2)sans-serif 3)fixed 4) symbol
*   serif is a small stroke attached to ends of a characters major stroke
*   sans-seirf do not have extra strokes
*   fixed are all same size
### Importing fonts
* to import to @font-face(squigly brackets)
*   on inside to font-family: font_name; as well as src: url(link to font);
* or can do @import url(url); then p squicly brackets font-family: font_name;
### CSS Animation
* create CSS animation using animagtion properties and defining keyframes from what elements should look like
* EX we select p(paragraph element) of center text and want to zoom till 20% view height
*   p squicgly brackets(text-align: center; font-szie: 20vh;)
* To make happen specifuy animating selected elements by adding **animation-name**  property with value. This name refers to name of keyfames we wills specify. Also add animation-duration to specify animation to last 3 seconds
*   same as abovee but including animation-name: demo(will store what it does somewhere else); animation-duration: 3s;
* Now we need to create keyframe
* don't need define every milisecond but key points
*   do this wtih from and to
![keyframe](https://github.com/chasetheterrible/CS260-startup/blob/main/keyframe%20demo.png)
* transform: translateX(50px) moves an element across the x axis 50 pixels

## Responsive Design
* Media quieries allow us to run series of tests(eg whethere users screen is greater than cedrtain width/resolution) and apply CSS selectively
<!--Ex @media scree and (min-width: 80rem) { .container \n(not actaully just entered) margin: 1em 2em; } -->
* This allows media query to see if current webpage is being displayed as screed media(not printed document) and viewport is 80 rem. CSS for .container selector will only be applied if these things are true
* Can add multiple media quiereis withing a style sheet, tweking layout/parts of it to best suit various screen sizes(known as breakpoints)
* common approac is designing simple singe column layout for narrow screens(mobile devices(
### Multicol
* specifies column-count to indicate max numner of columns you want content to be split into. Browser works out the sizes
<!-- .container { column-count: 3; } -->
* if specify column-wdith, will create as many columns of width that will comfortably fit the screen, then share extra space between columns
* <!-- .container [ column-width: 10em; } -->
* Can use columns shorthanded to specifuy max number of columns and min column width

### Display
* Display css property sets whether element is treated as block or inline box and layout of its children such as flow layout, grid or flex
* Formally the property sents elements inner and outer dislay types: outer sets elements participation in flow layout; the inner sets the layout of the children
* display: none; - will not display element(still there but not rendered)
* display: block; - displays elements wtih width that fills its parent element.
*   A p or div element had block display by default
* display: inline; displays elements with width only as big as content.
*   B or span elements have this by default
* display: flex; displays elements children in flexible orientaiton
* display: grid; displays elements children in grid orientation
* **If applying the display: rule to a default tag it will overide it**

### Viewport meta tag
* when mobile devies gained pop they began to be used to view websites however they were optimized for desktop disply and not mobile screen. To chagne web spps scaled to screen size it got in the ay. Solution is to include meta tag in head element of all HTML pages to not scale the page
* <!--<meta name="viewport" content="width=device-width,initial-scale=1" />-->

### Float
* float CSS property moves elements to left or right of container element and allows inline elemnets to wrap arround it.
* Ex if we had an asside element followed by large paragraph of tex we could create following CSS rule to cause text to wrap around the aside
<!-- aside { float: right; padding: 3cm; margin: 0.5cm; border: black solid thin; } -->
* float right will put the element on the right side, left on left and inline end the whole space it looks like
* when browser resizes, text will flow around floating element

### Media queries
* one of main CSS features for creating responsive applications is (at symbol)media selector. It dynamically detecs sie and oientation of device and applies CSS rules to represent struture of HTML in way that accomodates the change
* can use medai to tell which side of scree(technically viewpoet) is longest. takes 1 or more predicates spearated by boolean operatos. In out case we simply want to know if screen is oriented in portrain(short size on top) or not. If it is we transform all dive elements by rotating 270 degrees
<!-- @media (orientation: portrait) { div { transform: rotate(270def); } } -->
![Media querie stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/Media%20queries%201.png)
![more stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/media%20queries%20syntax.png)
![mmore more stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/media%20queries%20synta2.png)

* can also use media queries to make entire pieces of applications disappear, or move to different location. For example, if we had aside that was helpful when screen is wide, but took to much room as got narrow, could use following to make it dissapear
<!-- @media (orientation: portrait) { aside { display: none; } } -->

## CSS Grid
* Grid layout is useful when want to display a group of child elements in responsive grid. We start with container element that has bunch of elements
![graph stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/Graph%20stuff%20CSS.png)
![syntax for grid](https://github.com/chasetheterrible/CS260-startup/blob/main/CSS%20syntax%20for%20graph.png)
![ex of grid](https://github.com/chasetheterrible/CS260-startup/blob/main/ex%20of%20graph.png)
![more ex of graph](https://github.com/chasetheterrible/CS260-startup/blob/main/other%20graph%20example.png)

## CSS Flexbox
* flex display is usefule when want to partition app into areas that responsively move around as window resizes/orientation changes
* Structure HTML
<!-- <body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body> -->
* use flexbox to make it come alive. the display with val of felx tells borwser children of element are to be displayed in a flex row. We want top level flexbox childfren to be column oriented so we add flex-direct property wil value column. Then add some other declarations to 0 out margin and fill entire viewport with application
