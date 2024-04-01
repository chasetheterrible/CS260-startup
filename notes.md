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
*   Commands: **echo** - Output the parameters of the command
**cd** - Change directory/ **mkdi**r - Make directory/ **rmdir** - Remove directory/ **rm** - Remove file(s)/ **mv** - Move file(s)/ cp - Copy files/ ls - List files/ curl -/ Command line client URL browser/ grep - Regular expression search/ find - Find files/ top - View running processes with CPU and memory usage/ df - View disk statistics/ cat - Output the contents of a file/ less - Interactively output the contents of a file/ wc - Count the words in a file/ ps - View the currently running processes/ kill - Kill a currently running process/ sudo - Execute a command as a super user (admin)/ ssh - Create a secure shell on a remote computer/ scp - Securely copy files to a remote computer/ history - Show the history of commands/ ping - Check if a website is up/ tracert - Trace the connections to a website/ dig - Show the DNS information for a domain/ man - Look up a command in the manual
* | takes output from command on left and pipes/passes it to command on right
* '>' redirects output to file(overwrites if exists)
* '>>' redirects to file(appends if file exists)
*   ls -l | grep 'Nov' | wc -l takes files in directory, pip into grep to serach for files created in Nov then pipes into WC to count number of files fwould with date of NOV
*   CTRL-R: use type ahead to find previous command
*   CTRL-C kill curretly running command


# **Notes for HTML**
## Elements and Tags
* p(paragrph tag)
* Closing tag has (<)/character()
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

### Input element

* can include things liek text, passwords, email sign in, checkbox, radion,, adates...
* To create myst specify desired **type** attribute wtih any other associated with that specific input
* Ex radio: (<)label for='checkbox1'>CheckMe(name)(<)/label(>) (<)input type='checkbox' name='varcheckbox' value='checkbox1' checked />
  * name: name of the input
  * disabled: disables abilty of user to interact
  * value: initial value of input
  * requred: sgnigifes value required to be valid

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
* p { font-family: ; font-size: in pixels, em ; color:; text-shadow:; }
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
body
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
</body>

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
* To select a specific element if it has a reused class do: element(div or h2).class_name:nth-child(whichever child it is)
  * to select the 7th use of the class you would do 7 at the end

* select a class put a period in front of it. Ex if class='summary' .summary
* can also combine element name and class selector to select all paragraphs with class summary ex p.summary

### ID selector
* reference ID of element. All ids should be unique
* to select id put a # in front of it. Ex #summary(selects anything with id as summary)

### Attribute selector
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
* **font-family** property defines what fonts should be used. Represents ordered list of fonts. First font in list available will be used
### Font families
* 4 major families 1) Serif 2)sans-serif 3)fixed 4) symbol
*   serif is a small stroke attached to ends of a characters major stroke
*   sans-seirf do not have extra strokes
*   fixed are all same size
### Importing fonts
* to import ex @font-face { font-family: name; src: url('link_to_font')
  * can do @import url(url);
* to apply to paragraphy tags: p {font-family: font_name; }
* If not wanting to hose font file on server can import ex @import url(link to font)
### CSS Animation
* create CSS animation using animation properties and defining keyframes from what elements should look like
* EX we have a paragraph centered text and want to zoom till 20% of view height 
*   p squicgly brackets(text-align: center; font-szie: 20vh;)
* To make happen specifuy animating selected elements by adding **animation-name**  property with value. This name refers to name of keyfames we wills specify. Also add animation-duration to specify animation to last 3 seconds
*   same as above but including animation-name: demo(will store what it does somewhere else); animation-duration: 3s;
* Now we need to create keyframe
* don't need define every milisecond but key points
*   do this wtih from and to
![keyframe](https://github.com/chasetheterrible/CS260-startup/blob/main/keyframe%20demo.png)
* transform: translateX(50px) moves an element across the x axis 50 pixels

## Responsive Design
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
![Dispaly HTML](https://github.com/chasetheterrible/CS260-startup/blob/main/Display%20HTML.png)
![Display CSS](https://github.com/chasetheterrible/CS260-startup/blob/main/Display%20CSS.png)
![Visual display](https://github.com/chasetheterrible/CS260-startup/blob/main/Display%20Results.png)

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

### Media quries MDN
* Media quieries allow us to run series of tests(eg whethere users screen is greater than cedrtain width/resolution) and apply CSS selectively
<!--Ex @media screen and (min-width: 80rem) { .container \n(not actaully just entered) margin: 1em 2em; } -->
* This allows media query to see if current webpage is being displayed as screed media(not printed document) and viewport is 80 rem. CSS for .container selector will only be applied if these things are true
* Can add multiple media quiereis withing a style sheet, tweking layout/parts of it to best suit various screen sizes(known as breakpoints)
* common approac is designing simple singe column layout for narrow screens(mobile devices(
### Multicol MDN
* specifies column-count to indicate max numner of columns you want content to be split into. Browser works out the sizes
<!-- .container { column-count: 3; } -->
* if specify column-wdith, will create as many columns of width that will comfortably fit the screen, then share extra space between columns
* <!-- .container [ column-width: 10em; } -->
* Can use columns shorthanded to specifuy max number of columns and min column width

## CSS Grid
* Grid layout is useful when want to display a group of child elements in responsive grid. We start with container element that has bunch of elements
![graph stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/Graph%20stuff%20CSS.png)
![syntax for grid](https://github.com/chasetheterrible/CS260-startup/blob/main/CSS%20syntax%20for%20graph.png)
![ex of grid](https://github.com/chasetheterrible/CS260-startup/blob/main/ex%20of%20graph.png)
![more ex of graph](https://github.com/chasetheterrible/CS260-startup/blob/main/other%20graph%20example.png)

## CSS Flexbox
* flex display is usefule when want to partition app into areas that responsively move around as window resizes/orientation changes
* To make sure flex: 0 or flex: 1 works make sure html{} has height set to 100% as well as the body
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
* use flexbox to make it come alive. the display with val of flex tells browser children of element are to be displayed in a flex row. We want top level flexbox children to be column oriented so we add flex-direction property with value column. Then add some other declarations to 0 out margin and fill entire viewport with application
<!--body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
} -->
* To get division of space for flebox we add following flex properties to each of children
*   header - Flex: 0 80px. 0 means it wont grow and 80 px means its has starting basis height of 80 pixels. Creates fixed size plot
*   Footer flex 0 80 like head it will not grow and has height 30 pixels
*   main flex 1. One means it will get 1 fractional unit of gorwth, since it is the only child with non 0 growth it will get all remaining space. Main also gets additional properties because we want it to be a contaitner for controls and content area. So set dispaly to be flex and specify flex-direction to be a row so children are oriented by side
<!--header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
} -->
* now just add some CSS to control content areas represented by two child section elements. We want controls to have 25% of space and content to have remaining. So set flex propertu with value to 1 and 3 respectively. means controls get one unit of space content gets 3 units of space. No matter how we resize this ration will remain(look at code from above that holds two section elements)
<!-- section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
} effects 1st section then 2nd section-->

* align-items aligns items based on felx direction.
*   if flex direction is rows each div element in my codepen example will be each a new row. If I sent vaue to center it will but it in the middle on the x axis(y axis if flex direction is column) start will be at left(column is top) and end will be right for row, bottom for column

* Justify content changes how browser distributes space around and between element

### Media query
* above complets design, but we also want to handle small screen sizes. To do so we add media queries
* To support narrow scree[portrait mode] we include media quiery that detecs when we are in portrait orientation and sets flex-direction of main elements to be column instead of row.
*   causes cells to be stacked on top eachotehr instead of side by side
* To handle making header/footer disappear when screen is too short, we use media quiery that tirggers when our viewpoet height has max value of 700 pixels. When it is true display propeerty for both header/footer to none so they will be hidden
*   main element becomes only child and since it has flex of 1 it takes over everything

## Framework
* provides functions and components that commonly appear in web applications
### Tailwind
* Takes different approach that traditional CSS framework, instead of using large, rich, css rulesets it uses smaller definitions that are applied specifically to individual HTML elements
  * Moves much of CSS out of file and direclty to HTML
### Bootstrap
* Content Delivery Network(CDN)
* Feature packed front-end toolkit filled wtih CSS and javascript styling
* To include CSS place a link tag(<link...info>) in the headd and a script tag before the closing body tag
  * href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  * then rel="stylesheet"
  * the integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  * after integrity is crossorigin=ananymous(in quotation marks)
  * total line look liks this(its commented)
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">-->
* For Javascript its similar but src=https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js
  * with integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
  * and crossorigin="anonymous"
  * <script...info...><(backslash)script>
* If not wanting to include dropdowns, popoevers or tooltips, don't include poppwer so use: <scrip src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"(close tag)<(backslash)script>

### Using Bootstrap
Buttons:
* Once linked in GTMl can finally use componets
* When use bootstep:**btn** CSS clas, button gets nice looking rounded appearance.
  *  **btn-primary** CSS class shades button with current primary color for app, which defualt is blue
  *  Ex between plain and bootstrap in comment below.
<!--// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button> -->
* primary can be replaced by secondary(gray), success(green), danger(red), warning(yellow), info(turqouise), light(white?), dark(black) and linke(text blue white background)
* for a large button throw btn-lg/sm
* to create block level buttons add btn-block after btn-prumary/other
* If wanting button bu tnot heft backgrouhnd color replace defualt mod(btn-Primary) with btn-outline-mod_class(primary/secondary...)

# JavaScript
## Intro
### Getting Started
* Java script runtime built in function console.log to output string to debugger console
  * ex console.log('hello' + ' ' + 'world'); will output hwllo world
* Can also write own fuinction
  * function join(a,b) { (indented)return a + ' ' + b; }
  * console.log(join("hello', 'world') --> produces same output
### Comments
* To comment use line(//) or block(/* */)
### Code delimiters
* while not required in most cases, it is considered good form to end statments wtih semicolons. Code blocks, and resulting sscope are defined wtih curly braces
### Playground
1. use codepen to write whatever and you will immediately see results
2. use browser debugger be doing f12 or inpsec, then select console meny option to dispaly java script interpreter

## Console
### Log
* basic use of console is to output log message
  * console.log('hello');
* Can create formatted messages in log parameter
  * console.log('hello %S', 'world');
* can specify CSS declarations in order to style log output
  * console.log('%c JavaScript Demo', 'font-size:1.5em; color:gree;'); --> Javascript Dmeo in large green text
### Timers
* if trying to see how long piece of code is running can wrap wtih time and timeEnd calls
  * console.time('demo time'); --> some code that takes a long time
  * console.timeEnd('demo time'): --> demo time: 9762.74 ms
### Count
* to see number of times block of code is called used count function
  * console.count('a'); --> 1
  * console.count('a'); --> 2
  * console.count('b'); --> 1
## Adding JavaScript to HTML
* can insert to HTML by directly including withinn (<script>) element or by using src attribute
<!--<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body> -->
* notice we call sayHello and sayGoodbye from HTML oneclick attribute of button element. Special attributes like oneclick auto create event listeners for different DOM events that call code contained in attributes vale. Code specified by attributes can be simple call to function or any JS code
<!--<button onclick="let i=1;i++;console.log(i)">press me</button> -->
<!-- OUTPUT: 2 -->

## JS type and construct
### Declaring variables
* variables are declared with let of const keyword. Let allows you to change the variable while const is constant and will throw an error if you try to change
  * let x=1;
  * const y=2;
* Null type: variable that has not been assigned
* undefined: variable that has not been defined
* Boolean: true or false
* numebr: 64bug signed number
* BigInt: number of arbitrary magnitude
* String: textual sequence
* Symbol: unique value
### object types
* object: collection of properties represented by name-value pairs({a;3, b:'fish'})
* function: object with ability to be called --> function a() {}
* Date: calendar dates and times --> new Date('1995-12-17')
* Array: ordered dequence of any type: ([3, 'fish'])
* Map: collection of key-value paris that support efficient lookups new Map()
* JSON lightweight data-interchange used to share info across programs --> {'a':3, 'b':'fish'}
### Common operators
* when dealing with number variables, JS supports mathematical operatros
### Type conversions
* JS is weakly typed language, meaning variables always have a type, but variable can change type when assigned a new value
  * 2 + '3'; --> 23
  * 2 * '3'; --> 6
  * [2] + [3]; --> 23
  * true + null --> 1
  * true + undefined; --> NaN
* getting unexpected results is common when dealing with equality(==) operators
  * 1 == '1' --> True
  * null == undefined; --> true
  * '' == false; --> true

* unexpected results happen becuase JS uses complex rules for defining equality referred to as falsy and truthy. To remove JS introduced strict equality(===+ and inequality(!==). Skips type conversion when computing equlaity
  * 1 === '1' --> false
  * null === undefined --> false
  * '1' === false --> false
* **Strict equality** is more intuitive and almost alwyas preferred and should be used

### Conditionals
* JS supports commaon programming language, including if, else, and if else statements
  * if (a === 1) { } else if (b === 2) {} else {}
* can also use ternary operator, which provides compact if else representation
  * a === 1 ? console.log(1) : console.long('not 1');
* can use boolean operatorin expression to ceate complex predicatres such as && || and !
  * if (true && (!false || true)) {}
 ### Loops
 * for, for in, for of, while, do while, and swtich
* **for**
  * (let i=0; i<2; i++) { console.log(i);} --> 0 1
  * i++ adds one to a numner
* **do while**
  * let i = 0; do { console.log(i); i++;} whilte (i<2); --> same output
* **while**
  * let i = 0; while(i<2) { console.log(i); i++;)
* **for in**
  * iterates over objects property names
  * const obj = { a: 1, b: 'fish' }; for (const name in arr) { console.log(name);
* **for of**
  * iterates over iterables(arrays, maps, set) property values
  * const arr = ['a', 'b']; for (const val of arr) { console.log(val); }
* **Break and continue**
  * all of above follow either break or continue statements
  * let i = 0; while (true) { console.log(i); if (i === 0) { i++; continue; } else { break; } }
## JS String
* primitivve types in JS surrounded by ' or " or `(backstick)
  * backsitcks deine a string literal that may contain JS evaluated in place concatenatd into the string
  * String literal repalcement specifier is declared wtih dollar sign folowed by curl brace pair, anything inside is evaluated as JS
  * 'quoted text';
  * const l = 'literal'
  * console.log('string ${l + (1 + 1)} text'); --> string literal2 text
### Unicode support
* JS supports unicode by defining string as 16bit unsigned integer that represents utf-16 strings. Allows JS to represent most languages spoken on planet including languages read from right to left
## String functions
* length: number of characters in string
* indexOf(): starting index of a given substring
* split(): split string into array on given delimiter string
* startsWith(): true if string has given prefix
* endsWith(): True if string has given suffix
* toLowerCase(): converts all characters to lowercase
* const s = 'Example:조선글';
  console.log(s.length); -->OUTPUT: 11
  console.log(s.indexOf('조선글')); -->OUTPUT: 8
  console.log(s.split(':')); --> OUTPUT: ['Example', '조선글']
  console.log(s.startsWith('Ex')); -->true
  console.log(s.endsWith('조선글')); --> true
  console.log(s.toLowerCase()); --> example:조선글
## Functions
* JS functions are first class obkjects. Meaning they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array
* basic syntax is function keyword followed by 0+ parameters and a body that may contain 0+ return statements. Return statement may return a single value.
  * no type declarations, as type is always inferred by assignment of value to parameter
* function hello(who) {
  return 'hello ' + who;
}
console.log(hello('world')); --> OUTPUT: hello world
* function without return value usually exists to produce some side effect like modifying a parameter or interacting with an externa program
  * function hello(who) {
      who.count++;
      console.log('hello ' + who.name);
}
hello({ name: 'world', count: 0 }); --> OUTPUT: hello world
### Function parameters
* when functions are claled the caller may choose what parameters to provide
* if parameter is not defined it is given undefined when function executes

## JS array
* array objectss represent sequence of other objects and primitives. Can reference members of araay using 0 based index. Created using the array constructor or using the array literal notations as shown beloe
  * const a = [1,2,3]; console.log(a[1]); --> 2(index notation)
  * console.log(a.length) --> 3
### Object function
* array object has everal interesting static functions associated with it
function labeler(value, title = 'title') {
  console.log(${title}=${value});
}
labeler(); --> title=undefined
labeler('fish'); --> title=fish
labeler('fish', 'animal'); --> animal=fish

### Anonymous functions
* functions in JS are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support can define function anonymously and assign it to a variable

function doMath(operation, a, b) {
  return operation(a, b);
}

const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3)); --> OUTPUT: 8

console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
); --> OUTPUT: 2

### Creating, passing and returning functions
const add = function (a, b) {
  return a + b;
};

function labeler(label, value) {
  console.log(label + '=' + value);
}

function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

addAndLabel(labeler, 'a+b', add, 1, 3); --> OUTPUT: a+b=4

function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

const nameLabeler = labelMaker('name');

nameLabeler('value');
// OUTPUT: name=value

### Inner function
* can also be declared inside other functions. Allows to modularize code wtihotu explosing private details

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}
labeler(5); --> number=5

labeler('fish'); --> string=fish
### Arrow functions
* because there are first order objects in JS they can be declared anywhere and passed as parameters. This results in code with lots of ananymous functions cluttering things up
  * to make code more compact the **arrow** syntax replace the need for the function keyword wtih the symbol => after parameter declaration
* () => 3; will always return 3
const a=[1,2,3,4];
a.sort(function (v1, v2)  { return v1 - v2; });
a.sort((v1,v2) => v1-v2);
* besides being compact, the arrow syntax has importat semanitc difference from standard function syntax. Including restriction that arrow functions cannot be used for constructors/iterator generators
### Return Values
* arrow functions also have special return keuword. optional if no culry braces are provided for function and it contains single expression
* if curly braces are provided then arrow function behaves jsut like a standard function
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
### This pointer
* arrow functions inherit he **this** pointer from the scope where it was created. This makes it knows as closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope
* function makeClosure returns anonymous function using arrows syntax. Notice a parameter is overridden, a new b variagle is created and both a and b are referecend in arrow function. Becuase of the rerrerence they are both part of the closure for returned function
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
const a = 'a';
const b = 'b';
const closure = makeClosure(a);

When we call closure function it will output values contained in scope where it was created instead of current values of variables
## JSON
* JSON doc contains one of the following data types: string, number, boolean, array, object(delimited with curly braces), null
* Most commonly it contains an object. They contain zero or more key value pairs. Key is always a string and value must be one of the valid JSON data types
**EX**
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
* JSON is always encoded with UTF-*
* can converty JSON to and from JS using JSON.parse and JSON.stringify functions
  * const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
* JSOn cannon represen cannot represent JS undefiend object and so it gets dropped when converting JS to JSON
## JS object and classes
* JS object represents collection of name value pairs referred to as properties. Objects also have common object orriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.
* New objects can be created with new operator and once declared can add properties to object by simply referencing the property naem in assignment
  * Any type of variable can be assigned to a property, and is referrenced wtih dot(obj.prop) or bracket(obj['prop']) notation
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
### Object literals
* can declare variable object type with object-literal syntax, which allows you to provide initial composition of object
const obj = { a:3 b: 'fish', };
### Object funtions
* has seveal interesting static funcitons associated with it
  * enteries: returns array of key vale pairs
  * keys: returns array of keys
  * values: returns an array of value
const obj = {
  a: 3,
  b: 'fish',
};
console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
### Constructor
* any function that returns object is considered a constructor, invoked with **new** operator
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}

* because objects have any type you can create mehtods on object as part of its encapsulation

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

### This pointer
* in above example use of **this** keywordis referred to name property(this.name). Meaning of this depends upon scope of where it is used but in context of object refers to a pointer of the object
### Classes
* use classes to define objects. Using class clarifies intent to creat reusable component rather than one-off object. Class declarations look similar to declaing an object. Person object from above would look like following when converted to class
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
* can make properties and functions of classes private by prefixing them with #
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

### Inheritance
* Classes can be extracted using the extends keyword to define inheritance. Parameters that need to be passsed to parent class are delivered using super function. Any function defined on child that has same name as parent overrieds parents implementation
  * can be explicitly accessed using super keyword
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer

## JS RegEx
* Build into JS
* Enclosed between slashes
### Types
* /abc/ looks for exact copies of the exact order of abc
* (asterics) folloiwng letter/number means 0 or more occurences
* [a-z] selects any letter in that range
* \w selects all numbers and letters, not case sensitive


* Can create Regex using class constructor or regex literal
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
* string class has several fucntions that accept Regex. Including match, repalce, search, split
  * can use test function to match Regex object
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

### JS rest and spread
* sometimes we want a function with unknown number of parameters, ex checking to see if number in list is equal to given number, could write using an array
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
* however sometime we don't have an array, in this case we coudl create one on the fly
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);}

* JS provides erst syntax to make this easier. Think of it as a parameter that contains the rest of the parameters
  * to turn last paremeter into rest you prefix it with thre periods. Can then call it with any number o fparaemets an will auto combined into an array
**function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true**
* can only make last parameter a rest parameter. Otherwise JS doesnt' know which to combine into an array
### Spread
* does opposite of rest, i takes object that is terable and expands it itno a functions parameters
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
## JS exceptions
* JS supports exception handling using try catch and throw syntax. Exception is triggered whenever code genarates an exceptions using throw keyword, or when exception is generated by JS runtime
* TO catch excpetion must wrap code in try keyword and follow try block wtih cath blcok. If withing try block, including any functoin that blocks calls, exception is thrown, then all code after is ignored
* In addition to catch block, can specify finally block that is always called whenever try block is exited regardless if an exception was ever thrown
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code}

* when using exception handling its tempting to use it as way to handle normal flow of execution, however it should only be used when something truly eceptional occurs
### Fallbacks
* fallback pattern is commonly implemented using exception handling, to implement fallback you must put normal feature path in try block and provide fallback impplementation in catch block. Ex when gettig high scores for a game, if network isn't available then locally cahced bersion of last available scores is used
* allows always something to return even if desired feature is temp unavailable
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
  }
## Destructuring
* not to be confused with destructing, its the process of pulling individual items out or removing structure. Can do this with arrays or objects and helps when you only care abous certain items

const a = [1, 2, 4, 5];
const [b, c] = a;
console.log(b, c); --> 1, 2
* even thout it looks liks declaring an array wtih syntx on left side it is pnly specifying wanting to destructure those values out of array
* Can also combine multiple items using rest syntax

const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]

* can also specify properties wanting to pull from source object

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
const { a, c } = o;
console.log(a, c); --> 1, ['fish', 'cats']

* can also map names to new variables instead of just using origianl property names

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
const { a: count, b: type } = o;
console.log(count, type); --> 1, animals

* default values can be used for missning ones
const { a, b = 22 } = {};
const [c = 44] = [];
console.log(a, b, c); --> undefined, 22, 44

* all above examples created enw constant variables, but can also use destructuring to reasign existing variables
let a = 22;

[a] = [1, 2, 3];

console.log(a); --> 1

## Scope
* global: visible to all
* module: visible to all code running in module
* function: withing function
* block: visible within block of code delimited by curly braces
### Var
* originally JS used VAR to declare variables, the problem is that it ignores block scope
  * logically hosted to the top of the function
var x = 10;
console.log('start', x); --> start 10

for (var x = 0; x < 1; x++) {
  console.log('middle', x); --> middle 0
}
console.log('end', x); --> end 1

  * the for loop reassigns the value of x to 0, after the iteration x becomes 1
  * I assume it will always be 0 in the loop, not completely sure why
* few cases when to use var unless we fully know, so use **const and let**
### This
* **This** represents variable that points to obejct that contains context within scope of currently executing line
  * automatically declared and can refereence anywhre in JS program
  * becaise **this** depends on context in being reference there are 3 diff context that this can refer to
      * global: refers to globalThis which represents context for runtime environment, ex when running browser it refers to browsers window object
      * function: referst o object that owns function. Eitehr one defined or globalThis if function is defined outside of object, In JS strict mode global function this variable is undefiend instead of globalThis
      * Object: when **this** is referenced an object refers to the object
   
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
**output:**
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest

### Closure
* Defined as functoin and surrounding state, meaning whatever variables accessible when funciton is created are availabel inside the function
  * holds true een in pass funcion outside of scope

globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};
obj.f(); --> object
* arrow functions are different because they inherit the this pointer of their creation context, so if we change previous example to return arrow function then the **this** pointer at time of creation will be globablThis

globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global

* if we make function return arrow function then the **this** pointer will be the objects **this** pointer since that was the active context at time arrow function was created

globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
## JS modules
* Allows partioning and sharing of code, initially JS had no support for modules
* Because modules create file-based scope for code they represent, you must explicitly **export** objects from one file then **import** them into another file

**alert.js**
export function alertDisplay(msg) {
  alert(msg);
}

* can import moduels into another module using export
**main.js**
import { alertDisplay } from './alert.js';
alertDisplay('called from main.js');
### ES modules in browser
* when use ES modiuels via HTML script reference, things get complicated. The key thing to understand is that modules can only be called from other module
  * can't access Js contained in module from global scope that your non module JS in executing it
* From HTML can specify you are using ES module by including **type** **attribue** with value of **module** in **script** element, and can import and use other mods
Index.html EX:
<!-- <script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script> -->
* if we want to use module in global scope our HTML or other non-module JS is executing in, we must leak it into global scope
  * do this by attaching an event handler or explicitily adding function to global window object
  * in Ex below we expose alertDisplay imported module by attaching to global JS **window** object so it can be called from button onclick handler, also expose module function by attaching a keypress event
index.html EX
<!--<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html> -->
* when button/key is pressed, ES module funciotn willl be called
### Moduels with web frameworkd
* Fortunatley wen use web framework bundelr, discussed later, to generate web app distribution code, usually don't have to worry about differentiating between global scope and ES module scope. Bundler will inject all necessary syntax to conenct HTML to modules

## Document Object Model(DOM)
* an object representation of HTML elemtn that browser uses to reder display
  * browser also exposes DOM to external code so you can write programs that write progrmas to dynamically manipulate HTML
* Browser provides access to DOM through global variable named **document** **that** points to root element of DOM. If open browsers debugger console window and type variable name **document** will see DOM for doc browser is currently rendering
EX HTML
<!-- > document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html> -->
EX CSS
p {
  color: red;
}
* everything in HTML doc there is a node in the DOM including elements, attributes, text, comments, and whites[ace
  * all notes form a big tree, with doc node at top
### Accessing DOM
* Every element in HTML doc implements DOM element interface, which is derived from DOM node interface. **DOM element interface** provides means for iteraitng child elements, accessing parent element and manipulating element attributes
  * from JS code can start **document** variable and walk thorugh every element in tree
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);

* can provide CSS selector to **querySelectorALl** fucntion to select elements from the document
  * **textContent** property contains all elements text, and can access textual representation of elements HTML content with innerHTML property

const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}

### Modifying the DOM
* DOM supports ability to insert, mod or delete elements in DOM
* To create new element must first create element on DOM document, then can insert new element

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');

* to delete elements call **removeCHild** function on parent element

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');

### Injecting HTML
* The DOM also allows you to inject entire blocks of HTML into element, following code finds first **div** element in DOM and replaces all HTML it contains

const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';

* Direclty injecting hoever as a block of text is a common attack vectros for hackers
  * if untrusted party can inject JS anywhere in app then that JS can represent itself as current user of app
  * Attacker can make requests for sensitive dara, monitor activity and steal credentials
    (<)img src="bogus.png" onerror="console.log('All your base are belong to us')" /(>)
    
* if injecting HTML, make sure it cannont be maniulated by user
  * common injection paths include HTML input control, URL parameters, and HTTP headers
  * Either sanitize any HTML that contains variables or simply use DOM manipulation functions instead of using **innerHTML**

### Event listeners
* All DOM elements support ability to attach function that gets called when even occurs on element, these functions are called **event listeners**

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

**EVENT CATEGORIES**
  * clipboard: cut, copied, paste
  * foucus: an element gets focus
  * Keyboard: keys are presed\
  * Mouse: click events
  * text selection: when text is selected

* can also add event listeners directly in HTML, ex onclick handler tha is attached to button
(<)button onclick='alert("clicked")'>click me</button(>)

## Local storage
* browsers **localStorage** API provides ability to store and retreive data(ie scores, usernaes, etc) on users browser across sessions and HTML page renderings
  * ex frontend JS stores users name on one HTML page and then retrieve name later when dif page is loaded
  * in addition to data between page rendering, **localStorage** is also used as cache for when data can't be obtained from server ex when storing scores from server then displauying in future if service isn't available
### How to use
* set|item(name, value): sets named items value into local storage
* get|item(name): gets named items value from local storage
* removeitem(name): removes named item from local storage
* clear(): clears all items in local storage

* local storage vale must be type string, number or boolean. If want to store JS object or array must convert to JSON string with JSON.stringify() on insertion, and pare back to JS with JSON.parse() when retrieved

EX(commented code)
<!-- let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));

OUTPUT:

Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true] -->

* notice you are able to see round tripe journey of local storage values in console output. if wanto to see what values are currently set for app, open **Application** tab of dev tools and select storage > local storage then domain name
  * with dev tools can add, view, delete any local strage values

## Promises
* Rendering thread of HTML executes single threaded, meaing cannont take long time processing JS on main rendering thread
* Long running, or blocking should be executed wtih JS **Promise**
  * execution of promist allows main rendering thread to continue while some action is executed in background
* Create promist by calling Promist obekct constructor, passing in executor function that runs asyncrhonous operation
* Executing aysncrhornously means promist constructor is always in one of 3 main statements
  * pending: currenlty running
  * fulfileld: completed successfuly
  * rejectedL failed to complete
* use setTimeout to demonstrate aysnchronous execution to create delay in execution of the code
  * takes the number of milisecions to wait and a function to call after the time has expred
  * call delay finction in for loop in promist executro and also for loop outside so both code block are running paraellel
 
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
### Resolving and rejecting
* need to be albe to set state to **fufilled** if correctly completed, **rejected** if not
* Exercutor takes two parameters **resolve** and **reject**
  * calling resolve sets promist to fulfilled state, and calling reject sets primist to rejected state
**EX**
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
^^ Math.random chooses from 0-1 to .5 is the middle
* if log coinToss direclty to console immediately calling constructor, it will display it is in pending state:

**console.log(coinToss);
// OUTPUT: Promise {<pending>}**

If we wait ten seconds(10,000ms/1000 = 10 secc) state will either show fulfilled or rejected depending on way coin landed

**console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}**

### Then, Catch, Finally
* With abiity to execute and set resulting state, we now need wayu to generically do something with result of promist after it resolves
  * done wtih funcionality similar to exception handling
* Promise object has three functions: **then**, **catch**, **finally**
  * **then** function called if promist is fulfilled
  * **catch** called if rejected
  * **finally** always called after all processing completed
* 1- percent time coin falls of table to rejected state
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

* we then chain **then, catch, and finally** functions to coinToss object in order to handle each of possible results

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

## JS Async/await
* Promise objects are great for asycnhronous execution, larger systems were build they wanted more concise representation
* Provided with introduction of async/await syntax
* **await** keyword wraps execution of promise and removed need to chain functions
  * will block until promise state moves fulfilled, or throws exceptions if state is moved to rejected
 
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};

* can create equivalent executinos with a promise **then/catch** chian or an **await** with a **try/catch** block

coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));

try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}

### Async
* in important restriction working wtih await is you cannot call awaut unless called at top level of JS, or is in function defined wtih **async** keyword
* applying **async** keyword transforms function so it returns promise that will resolve to value previously returned by function, basically turns any function into asynchronous function so it can in turn make asyncrhonous requests

function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo

* if designate function to be asynch then reitrn values becomes promise is immediately resloved and has value that is the return val of function

async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}

* when chagne cow function to explicilty create promist instead of auto generated primsit that the await keyword generates

async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}

* can see promise is in pendind state becuase promise execution function has not yet resolved
### Await
* **async** keyword declares function returns promist. **Await** wraps call to async function, blocks execution till promise is resolved, then returns result of promise
* Can demonstrate **await** in action wtih cow promise from above
* if log output from involing cow we see reuturn is promise, if prefix call with await keywrod execution will stop till promise has resolved, at which result of promise is returned instead of actual promise

console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo

* by combining **async**, to define functions that return promise with **await**, to wait on promise can create code that is asynchronous, but sill maintains flow of code
### Putting it together
* can see benefit of async/await by considering case where multiple promises are requred. Ex when calling fetch web API on endpoint that returns JSON, would need to resolve, one for netowrk call and other reverting to JSON

const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}

* with async/awaut can clarigy code intent by hiding promise syntax, and also make execution block until promise is resolved

const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done


# **Random notes**
* ++ in Js is th incriment
* equal sign like function f(x) = {} is not valid
* valid JS object assgns values with semi colon like { propteryName: value }
* textContent Propertu sets child text of an element
* JSON only accepts double quotation marks
*   undefined is not a possible value
* CHMOD +x deploy.sh makes script executable
* To point to another DNS record use CNAME
* query selector only selects 1 element
* In regex i makes it not-case sensitive
![Example domain name and stuff](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-02-26%20at%203.27.20%20PM.png)

* **DND record types**
* A / AAAA - Address. Specific IP addresses. IPV4 and IPV6
* CNAME - Canonical Name. Alias 
* NS - Name Server. Authority for queries and proof of ownership
* TEXT - Metadata. Used for policies and verification
* SOA - Start of Authority. Propagation information





# Webservice
## The internet
* globally connects independent networkds and computing devices
### Making connections
* when one device wants to talk to another it must have IP address
* Can look up any IP address for any domain name ising dif console utility
  * ex dig byu.edu will give the IP address
### Traceroute
* can determine hops in connection using traceroute console utility
* Sees the IP address of the home computer and steps it takes to get to computer at BYU
### Network internals
* Application(HTTPS): functionality like web browsing
* Transpot(TCP): Moving connection information packets
* Internet(IP): Establishing connections
* Link(Fiber, hardware): physical connections

## Web servers
### Monolithcin web servers
* in early days web programming wouls buy massive, complex, expensive software that spoke HTTP and instaled hardware server
### Combining web and app services
* Most mondern programming languages include librareis that provide ability to make connections and serve HTTp

## Domain Name
* Simply a text string that follows specific naming conventoin and listed in special database called domain name repository
* Broken up into root domain with one or more possible subdomain prefixes
  * represented by secondary level domain and top level tomain(TLD) represented bu com, edu, or click, so root would be like google.coom
* owners of root tmains can create any # of subdomains off root domain, each may resovle different IP address
* Can get info using whois console utility
  * whois byu.edu
### DNS
* onnce domain name is in registry
* DNS database records facilitarte mapping of domain names to IP adddresses come in several flavors
* main is address(A) and cannocial name(CNAME)
  * a recrod stragiht mapping from domain name to IP address
  * CNAME maps one domain nane to another domain name byu.com -> byu.edu
 
## Web servuces intro
* files that run on browser are fronntend of application
* To make web service request we supply URL of web to fetch, which is build into browser
* Web service provides static frontedn files with function to handle fetch requests
* Functionality provided by web serice represents backend of appplicaiton
* Endpoints are the functions provided by the web service

## URL
* Uniform Resource Locator(URL) represents location of web resoirce such as web page, font, image, JSON object and more
* Follows notation: Scheme(ex https), domain name(byu.edu), port(3000), path(/school/byu/user/8014), parameters(filter=names&highlight=intro,summary), anchor(summary)
* https://byu.edu:443/cs/260/student?filter=accepted#summary
* <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
* Scheme is protocol required for asking resources usually HTTPS or FTP or Mailto]
* port specifies numbered network port to connect to domain server
  * lower numbers are reserbed for common internete protocols, highers are for any purpose
  * 80 for HTTP
  * 443 if HTTPS
* Will hear URN or URI when talking about web resources. **Uniform Resource Name** is unique resource name does not specify lofation information
  * like an ISBN number
* **Uniform Resource Identifier** is general resorue indentifier that could refer to URL or URN
* With web programming we will almost alwys use URL

## Ports
* when connect to device on internet needs IP addtress and numbered port
* Port numbers allow single device to support multiple protocols as well as different types of services
* **IANA** the internet governing body, defines standard usage for port numbers
* Ports 0 - 1023 represents standard protocol
  * generally web service should avoid thse ports unless its providing protocol reprsened by the standard
* ports from 1024 - 49141 represent ports that have been assigned to requesting entities, these are very common ports to be used
* ports 49152 to 65535 are considered dynamic and are considered dynamic and used to create dynamic connections to a device
### Common Ports
* 20: file transfer protocol(FTP) for data transfer
* 22: Secure shell(SSH) for connecting remote devices
* 25: Simple Mail Transfer protocol(SMTP) for sending email
* 53: Domain name System(DNS) for looking up IP addresses
* 80: Hyptertext transfer protocol(HTTP) for web requests
* 110: post office protocol(POP3) for retrieving email
* 123: Network time protocol(NTP) for managing time
* 161: simple network management protocol(SNMP) for managing network devices such as routers or printers
* 194: internet relay chat(IRC)
* 443: http secure(HTTPS) for secure web requests
### Your ports
* when building web we externally expose port 22 to SSH inot remote console on server, port 443 secures HTTP communication and port 80 for unsecure HTTP communication
* on caddy, it listends to ports 80 and 443, when caddy gets request on port 80 it auto redirects request to port 443 so secure connection is used, then when it hits 443 it examines path provided in HTTP

## HTTP
* Hypertext transfer protocol(HTTP) is how web talks
* When browswer makes request it does so using HTTP protocol
* When web cliet and web server talk they exchange HTTP request and responses, browser will make HTTP request and server will generate an HTTP response
* Can see HTTP exchange by using browsers debugger of by using consols tool like **curl**
  * ex can use curl on console to make following request: curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
### Request
* HTTP request for above comamnd looks like following
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
* HTTP request has this general syntax:
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
* We are asking to GET resoiuce found at path(given above)
### Response
* response to above requests look like
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
* HTTP response has following syntax
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
### Verbs
* GET: get requested resource, can represent request to get single resource or resource representing list of resources
* POST: create new resource, the body of request contians resource. Response should include unique ID of newly created resource
* PUT: update resoruce eithwer the URL path, HTTP header or body must contain unique ID of resource being updated. Should contain updated resources, and body may contain resulting updated resources
* DELETE: deletes resource, either URL path of HTTP header, must contain unique ID of resource to delete
* OPTIONS: get metadata about resource, usualy only HTTP headers are returned, the resoruce itself is not returned

### Status code
* 1xx: informational
* 2xx: success
* 3xx: redirects to some other location, or that previously cached resource is still valid
* 5xx: server errors. Request cannot be satisfied due to error on server

### Headers
* HTTP headers specify metadata about request or response, including things like how to handle security, caching, data formats,, and cookies
* Authorization: token that authorized user making request
* Accept: format the client accepts, this may include wildcards
* content-type: fomrat of content being sent, these are descrived using standard MIME types
* Cookie: key value pairs that are generated by serber and stored on client
* Host: domain name of server, requrired in all requests
* Origin: identifies origin that caused request, howst may only allow requests from specific origings
* Access-control-allow-origin: server response of waht origins can make request, may include wild card
* Conent-length: number of bytes contaiend in response
* Cache control: tells client how it can caceh the response
* User-agent: client application making reqest

### Body
* format of body of HTTP request or response is defined by content-type header
* May be HTML tex, a binary image format, JSON, or Javascript, Client may specify what formats it accepts using accept header

### Cookies
* HTTP itself is stateless, this means one HTTP requese doesn't know anything aobut a previous/future request, however it doens't mea server cannot track across requests
* One method in doing so is cookie
* Generated by server and passed to client as HTTP header

## Fetch
* ability to make HTTP requests from JA is one of main technologies that changed the web from static content oages to one of web applications that fully interact with user
* Fetch function is built into browsers JS runtime, this means you can call it from JS code running in a browser
* basoc usage takes URL and returns promis, promise **then** function takes callback function that is asynchronous called when requested URL content is obtained
* If returned contenty is of type applicaiton/json, you can use json function on response object to convert to JS obkect
* Ex that makes fetch request to get and display inspirational quote
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
**response**
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};

* To do POST request you populate optiosn parameter wtih HTTP method and headers
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
## NODE JS
* app for deploying JS outside browser
* Browsers run JS using JS interpreter and execution engine
* **TO INSTALL ON MACOS**
  * curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash into console command
  * Followed by . ~/.nvm/nvm.sh
* in console app install long term support LTS version of Node
  * nvm install --lts
### Checking installation
* Console app is simoly called node, and can verify its working by running node with -v parameter
  * node -v --> version
### Running programs
* Can execute line of JS with node.js use -e parameter
  * node -e "console.log(1+1)" --> 2
  * however to do real work need to execute entire projects of dozens if not hundred of JS files we start by creating simple JS file that reference code found in project. Then execitue code by running node with file name(ex index.js) as a parameter

function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}
countdown();
* if this is whats in index.js file when we call in using node index.js it looks like:
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5

* Can also run node in interpretive mode by executing without any parameters and then typing JS code directly into interpreter

➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello

### Package manager
* could write all JS for everything need, its always good to usee preexisting packages of JS to impliment common tasks
* To load package must so two things
  1) First install package locally on machine using Node Package Manager(NPM)
  2) Include require statement in code that references package name. NPM auto installed wtih you install Node.js
* NPM knows how to access preexisting packages
  * must create directory that will contain JS and then runn npm init. NPM will step through serires of questions about project, then can press return of each questions it want to accept defualts
    * if always accepting defauls use **npm init -y** to skip Q&A
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y

### package.json
* if list files in directory, will notice it has created file named package.json, those fiels contain 3 things
  1) Metadata about prokject such as name and defualt entry JS file
  2) Commands(Scripts) to execute things like run, test, or distribute code
  3) packages that this project depends upon
* with NPM installed can now install node packages like give-me-a-joke
  * to do so must type npm install give-me-a-joke
* when you examin contents of packages.json will see refercene to newly installed package dependencey
* If no longer want package can alwaus remove wtih npm uninstall <package name>

{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
**VERSUS**
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

* When start instlalling packages, NPM will create aditioanl file named package-lock.json and directory named node_modules in project directory.
  * node_modules contains actual JS files for package and all its dependent packages
  * Directory will start to get very largw **and you don't want to** check directory into source control sustem since it can be rebuilt using info contained in package.json and package-lock.json
  * make sure to include node_modules in .gitignore file
 
* When clone source code from github to new location, first run npm install in project directory. This will cause NPM to download all of previously installed packages and recreate node_modules
* package-lock.json fils tracks verison of package that I install. That way if rebuild node_modules will have verison of package you initially installed and not lates available bersion, which might not be compatible with code
* With NPM and joke package installed, can now use joke packagee in JS file by referencing package name as parameter to require function, its then followed by a call to the jokes okect getRandomDadJoke function to actually generate joke

**index.js**
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});

**node.js**
➜  node index.js
What do you call a fish with no eyes? A fsh.

**REMEMBER STEPS**
1) Create project directory
2) Inistialize it for use wtih NPM by running npm init -y
3) make sure .gitignore file contains node_modules
4) install any desired packages with npm install package_name
5) Add require('package_name') to apps JS
6) us code package provides in JS
7) run code with node.index.js


### Creating web service
* with JS we can write code taht listens on network port, recieves HTTP request, processes them, and then responds. We can use this to create simple seb serve we execute using Node.js

**Create**
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y

Next open VS code and create file index.js, and paste code into file and save:
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});

* This code uses Node.js built in http package to create HTTP server using http.createServer function along with callback that takes req(request) and res(response) object
* That function is called whenever server receives HTTP request
* In example callback always returns same HTML snipet with status code 200 and content type header, no matter what request is made
* server.listen call starts listening on port 8080 and blocks until porgram is terminated

* Program is executed by going back to console window and running Node.js to exectire our index.js file. If servic starts up correclty then it should look like the following:
➜ node index.js
Web service listening on port 8080

## Express
* We learned how to use JS to create simple web server, this works great for little projects, howeeer to really build a production-ready applicatoin we need a framework with bit more functionality for easily implementing full web-service
* This is where **Node** package **Express** comes in
  1) Routing requets for service endpoints
  2) manipulating HTTP requests with JSON body content
  3) Generating HTTP responses
  4) Using **middleware** to add functionality

* Everything in express revolves around creatind/using HTTP routing middleware functions, you create express application by using NPM to install express package and then call express constructor to create express app and listen for HTTP requets on desired port

➜ npm install express
const express = require('express');
const app = express();

app.listen(8080);

* with **app** object you can now add HTTP routing and middlewar funcions to application

### Defining routes
* HTTP endpoints are implimented in express by defining routes that call function based upon HTML patth
* Express **app** object supports all HTTP verbs as functions on object
  * for ex if wwant to route function that handles HTTP get request for URL path /store/provo would call get method on app

app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
* **get** takes two parameters, url path matching pattern, and callback function that is invoked when pattern matches. Path mathcing parameter is used to match agaisnt URL path of an incoming HTTP request
* callback funtion has 3 parameters taht represent HTTp request(**req**), the HTTP response(**res**) and the **next** routing function that express expects to be called if routing function wnats another function to generate response
* Express **app** compares routing function patters in order that they are added to express **app** object. So if you have two routing functions with pattern that both match, the first one added will be called and given next matching funtion in next parameter
* in above example we hard coded the store name to be provo. Real store endpoint would allow any store_name to be provided as parameter in path. Express supports path parameters by prefixing parameter name with colon. Express creates map of path parameters and populates it with matching valiues found in URL path. You then reference the parameters using the **req.params** object. Using this patter can reqrite getStore endpoint as follows

app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});

* if we run our JS using Node we can see result when we make an HTTP request using URL
➜ curl localhost:8080/store/orem
{"name":"orem"}

* If you watned enpoint that used **post** or **delete** HTTP vvery then just use post or delete function on Express app object

// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

### Using middleware
* standard mediator/middlewar desgien pattern has 2 peices: mediator and middlewar
  * middleware representes comproneitzed pieces of functionality
  * mediateor laods middleware components and determiens order of execution. When request coems to mediator it passes requesr around to middleware componets
  * Following patter, Express is mediate and middlwarew functions are middleware components
 
* Express coems with standard functions. They privide functionality like routing, authentication, CORS, sessions, serving static web files, cookies and logging.
* Some are provided by default, others must ne installed using NPM before you can use them

* Function looks pretty similar to routing function. That is because routing functions are middleware functions, the only differnece being routing functions are only called if associated pattern matches, middleware functions are always called for eery HTTP request unless preceding function does not call a **next**

* Following pattern:
function middlewareName(req, res, next)

* Middleware function parameters represent HTTP request object(req), HTTP response and next middleware function to pass processing to. You should usually call next function after completing processin gso next middleware function can execute

### Create own middleware
* Can create functions that logs out the URL of the request then passes processing to next middleware function
**EX:**
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
* remember order you add middleware to express app object controls the order that functions are called, any middleware that does not call next function after doing processing stops middleware chain from continuing

### Bulitin Middleware
* In additon to creating own middleware function, can use build it middlware functoin
* **EX STATIC**
app.use(express.static('public'));
* if you create subdirectory in project and name it publix you can serve up any subdirectory you would like. Ex can create index.html file that is default content for webs ervice, then when you call web service wihtout only path the index.html will be returned

### Third party middleware
* can also you 3rd party functions by using NPM to install pacages and include packages in JS with require function
* Ex uses cookie-parser package to simplify the generation and access of cookies

**➜ npm install cookie-parser
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});**

* common for middleware to add fields and functions to req and res objects so other middleware can access functionality. Happens when cookie-parser adds req.cookies object for reading cookies, and also adds res.cookig function in order to make it ewasy to add cookit to a response

### Putting it all together
* here is full example of web service build using express
* const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

## SOP and CORS
* Same Origin Policy
* Cross Origin Resource Sharing

* Security should always be on the mind

* **SOP** was created, which only allows JS to make requests to domain if it is the same domain user is currently viewing

* If you wanted to build a service that any web app can use it would also violate SOP and fail, to address this CORS was invented
  * allows client(browser) to specify origin of request then let server respond wiht what origins are allowed
  * server may say all origins are alloweed
  * In CORS it is the browser that is protecting user from accessing course enpoint from wrong origin
  * Only meant to alert user that something nefarious is being attempted
 
### Third paty services
* when making requests to own web services, always on sam origin so will not violate sop, however if want to make request to diff domain than one web app is hosted on, need to make sure domain allows requests as defined by Access-Control-Allow-Origin


## Service design
* provdies interactive, functionality of web app
* Commonly authenticate users, track session state, provide, store and analyze data, connect peers, and aggrgate user information
* Service endpoints are often called **A**pplication **P**rogramming **I**nterface or **API**
* When desgingin endpoints, think about grammar, readability, and discoverability

### RPC
* Remote procedure calls(RPC) expose service endpoints as simple function calls
* when used over HTTP usually leverages POST HTTP verb but called with function name
  * like deleteOrder of updateOrder
  * nane of function is either entire path of URL of parameter in POST body

### Rest
* Reprsentation State Transfer(REST) attemps to take advantage of foundational principles of HTTP
* REST verbs always act upon resource
* Operations on resoiurce impact the state of resource as it is trasnferred by a REST endpoing call. THIS allows for caching functionalitu of HTTp to work optimall. For example, GET will always return same resource until PUT is executed on resource
* When PUT is used, cahced resource is replaced with updated resource

### GraphQL
* focuses on manipulation of data instead of function call(RPC) or resoure(REST)
* Heart of graphql is a query that specifies the desired data and how it should be joined and filtered
* instead of making calls for getting a store, then bunch more for getting orders, employee names etx... graph sends single query that requesr all needed info in one big JSON. Server would examine query, join desired data then filter unwatned

## PM2
* When running program from consle, program will auto terminate when close console or if computer restarts
  * To keep running after shitdown you need to register it as a **daemon**
  * Term daemon comes from idea of somehthing always working in the backgound
* PM2 is an easy way to stop and start web services, which we already have by starting up AWS
  * scripts found in simnon deployment auto mods PM2 to register and restart webservice, meaing you should not need to do anything with PM2, however if running into problems such as service not running, here are some commands

* SSH into server: pm2 ls
* pm2 monit: visual monitor
* ' ' start index.js -n simon: adds new process with explicit name
* '' '                 ' startup --4000: adds new process with name and port parameter
* stop: stops processs
* restart: restarts process
* delete: deletes process form being hosted
* delete all: deletes all processes
* save: saves current proceess across reboot
* restart all: reload all processes
* restart simon --update-env reload process and update node verion to current environment
* update: reload pm2
* start env.js --wathc --ignore-watch="node_modules": auto reload service when index.js changes
* describe simon: describes detailed processs information
* startup: displauys command to rund to keep PM2 running after reboot
* logs simon: display process logs
* env 0: display enviornment variables for process, us Pm2 ls to get process ID

### Register new web service
* If want to set up new sub-domain tha accesses differnet web serive on web server need
  1) add rule to caddyfile to tell how to direct requests for domain
  2) create direcory and add fiels for webservice
  3) configure PM2 to host web service
### Moddify caddy
* ssh into server, copy section for startup domain and alter so it represents deisred subdomain and ifve differnet port number
* Restart caddy wtih sudo service caddy restart
### Create web service
* copy ~/services/startup directory to directory that represents purpose of service

## Debuggin Node.js
* Previously JS debugging was done in live server VS code. Now that we are writing JS that runs NODE  we need way to launch and debug code that runs outside browser
* To debug in JS first need some JS to debug
* To debug ex a file named main.js, execute by with Start Debuggind command by pressing F5. First time you furn VS will ask what debugger you want to use, select Node.js
* Code will execute and window will open to show debugger output to see results of two console log statements
* Can puase execution by setting breakpoints
* Start debugger prcess again by pressing F5, and code will start running, but pause on line with breakpoint

### Debuggin Node.js web service
* to debug web service we must first write code
* Switch console app and run npm init -y and npm install express from code directory so we can use express package to write simple web service
* use F11 to step through

### Nodemon
* once start writing complex web apps, will need to find yourself making chagnges in middle of debuggin session and you would liek to have node restart automatically and update changes
* Nodemon package is a wrapper around node that watches for files in project directory to chagnes, when detects you saved somehtin git will auto restart node
* To use install: **npm install -g nodemon**
* Becase VS doesn't know how to luanch Nodemon automatically, need to create VS code launch config
* Command-SHIFT-P and type Debug: Add configuration
* Type: Node.js and select Node.js: Nodemon setup option
* Change program from app.js to main.jss or whatever main JS file is for app and save config file
* When press F5 will run Nodemon inand changes will auito upsate app when saved

## Development and Production environments
* when working on commercial web apps, its critical to separate where you develop app from where the production relase of appis made publicly available
* A developer will not have access to production environemnt in order to prevent develope for nefariously manipulationg entire comapny asses, instead automated integreation process called continuous integration CI checkout app code, builds it, tests it, stages it, then finllay deploys in when completeed
* For our work we will use use and manage development enviornment and production environment(AWS) however should never consider prodiciton enviornment as place for development or experiment with app
* May shell into program to configure app to debug but deployment of app should happen using automated CI process, for ours we will use a simple Shell script
### Automating deployment
* Advnatage of auto deployment is reproducible, we don't accidentlay delte a feile or misonfigure somehting with a stray keystrok
* to run deployment scrip from console window do something like: ./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
* -k parameter provides crediential file necessary to access production environment
* -h parameter is domain name of production environment
* -s represents name of app you are deploying, either simon of startup for us
* This will make more sense as we gradually build technologies

## Uploading files
* Web app often needs to uplaod one or more files from frontend to backend service, can accomplish with HTML unput element type file on frontend and Multer NPM package on backend
### Frontend Code
* Following code registers event handler for when selected file changes and only accepts file type .png, .jpeg .jpg. Also create img placeholder to display uplloaded image once stored on server:
<!-- <html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input
      type="file"
      id="fileInput"
      name="file"
      accept=".png, .jpeg, .jpg"
      onchange="uploadFile(this)"
    />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="frontend.js"></script>
  </body>
</html> -->
* Frontend HS handles u0laoding fiel to server then uses filename returned from server to set src attribute of image in DOM:

(async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
})

### Backend code
* To build storage inot server must install Multer NPm package to our project
  * npm install multer
* multer handles reading file from HTTP request, enforcing size limit of upload, and storing file in uplaods directory
  * should additionaly handle requests for static files, handle erroes and provoide a GET endpoint to serve a file from uploads directory
### Where to store files
1) only have so much available space, server only has 8gb by defualt. Once space is used server will fail to operate and may need to rebuild it
2) In production system servers are tranient and often replaced as new versions are released, or capacity requirements change. That means you will lose anys tate that you store on server
3) Server storage is not usually backed, if server fails you will lose customers data
4) If you have multiple application servers then you can't assume that server you uploaded data to is going to be one request download from
* We will want to use a dedicated storage service that has druability guarantees, is not tied to your compute compacity, and can be accessed by multiple application servers

## Storage service
### AWS S3
1) unlimted capacity
2) only pay for storage you use
3) optimized for global access
4) keeps multiple redudant compies of files
5) can cerions files
6) permannt
7) supports metadata tags
8) can make files publically available from S3
9) Keep fiels private and only accessible to applicaiton

* We will not be using storage service for simon project. If howeverf you want to use S3 as storage servie for startup app, then need to learn how to use AWS SDK
  1) create S3 bucket to store data in
  2) Get credentials so app can access bucket
  3) using credentials in app
  4) Using SDK to write, list, read, and delete files from bucket
# **DO NOT INCLUDE CREDENTIALS IN CODE! Make sure they are in a .gitignore file**

## Data Services
* web apps commonly use data persistently. Data can be many things, but is is usually representation of things like user profile, organized structure, game play info, usage history, billing info, peer relatioship, library catalog, and so forth
* SQl have served as general purpose data service but now we have
    * MySQL: relational queries
    * Redis: memory cached objects
    * Elastic Search: Ranled free text
    * MongoDB: JSON object
    * DynamoDB: key value pairs
    * Neo4J: grpah based data
    * InfluxDG: time series data
 
### MongoDB
* for projects in this course that require data services we will use MongoDB
* Increases developer productvity by using JSON obejects as core data model,, this makes it easy to have app that uses JSOn from top down
* Stores data in arrays that look like they contain things comparable to key:value pairs
* unlike relational databases that require rigid table definintion whre each columnb is strictly typed beforehand, mongo has no strict schema requirements
* To add new field to collection you insert field into doc as desried. If field is not present of has diff type in document then doc simply doesn't match query criteria

### Using MongoDB in app
* First step is to install mongoDB package using NPM
  * npm install mongodb
* with that done can use **MongoClient** object to make client connection to database server
  * requires username, password and hostname of DB server
  * const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

* WIll have own user, password and hostname when creating account
* To query for other docs use **find** function on collection object
    * note find function is asychronous so we use await keyword for promise to reslove before we write them out to console

const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));

### Managed services
* each application dev team would have developers that managed data serice, acuiring hardware, insalling DB software, monitor memory, cpu, and diskapce, control data scheam, and handle migrations and upgrades
* Much of that work is not moved to services that are hoste and managed by 3rd part

### MongoDB atlast
* All major cloud providers offer multiple services
* For this class we wil use data service provided by MongoDB called Atlas
* No credit card or payment is required to set up and use, as long as you stick to shraed cluster environment

### Keeping keys out of code
* **PROTECT CREDENTIALS**
* Do do so create a dbConfig.json in the same directory as the database JS file(ex database.js that you use to make database requests
1) insert mango Db credentials into dbConfig.json file like example code but with own data:
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}
2) imp dbConfig into database.js useing Node.js require statement
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
* MAKE SURE TO INCLDUE dbConfig.josn in .gitignore

* To execute below code stored in a file named index.js run npm init -y, then npm install mangodb then node index.js:

const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);

should get the following

{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}

## Authorization services
* if app is going to remember users data then it will need way to uniquely associate data with particular credential, meaning you **augthenticate**
* This means by asking info such as email and passwrod, then remember for some period of time, that the user has authenticated by storing an authentication token on users device
* That token is often stored as a **cookie**
* Determining what a user is authorized to do in app is alo important
* Authorization services such as OAuth, SAML, OIDC or **Single Sign On SSO**
## Account creation and login
* First step to supporting authentication is by providing way fo users to uniqeuly identify themselves
  * One to Initially create authentication credential and second to authenticate or **login** on future visits
  * Once user is authenticated, can control access to other endpoints
  * For EX web services often have getMe endpoint that gives information about currenlty authenticated user
### Endpoint design
* Ussint HTTP can map design of each of endpoints
### Create authentication endpoints
* This takes an email and password and returns cookie containing authentication token and user ID, if email arleady exist it returns 409(conflict) status code

POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}

HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

### Login authentication endpoint
* Takes email and password and returns cookie containing authentication toek and user id, if email doesn't exist or if passowrd is bad it returns 401(unathorized) status code

POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}

HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

### GetMe endpoint
* uses authenticatoin token stored in cookit to lopp up and return info about authenticated user
* If token or user do not exist it returns 401(unathorized) status code

GET /user/me HTTP/2
Cookie: auth=tokenHere

HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

### Web Services
* With service endpoints desinged, can no build web service using express

const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

**STEPS TO FOLLOW**
1) Create directory called authTest that we will work in
2) Save above content to file named main.js, this is starting web service
3) run npm init -y to initialize project to work with node.js
4) Run npm install express cookie-parser mongodb uuid bcrypt to install all packages we are going to use
5) Rune node main.js or press F5 on VS code to start web service
6) Can now open console window and use curl to try out one of endpoints
   * curl -X POST localhost:8080/auth/create
   * --> {"id":"user@id.com"}
### Handling requests
* with basic service created, can implement the create authentication edpoint credentisl from body of HTTP request
* Since body is designed to contain JSON we need to express it shoudl parse HTTp requests with a content type of application/json automatically into JS object
* Do this by using express.json middleware
* can then read email and passoword direclty out of req.body object

app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});

curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'

* --> {"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}

* Now that we proved we can parse requestr bodies correclty we can change code to add ac heck to see if we arleady have user with that email address, if so we can add a 409 conflist status code(conflict)

app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});

### Using the database
* we want to persistently store our users in mongo and so we need to set up code to connect to and use DB
* code explained in snstruction on data services if want to review what its doing

const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

* With mongo collection object we can implement the getUser and createUser functions

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}

* we are missing couple of things, we need real authentication token and we cannot simply store clear text password in DB

### Generating authenticaiton tokens
*  to generare we use uuis package. UUID stands for **Universally Unique Identifier** and it does a really good job creating hard to guess, random unique ID

const uuid = require('uuid');

token: uuid.v4();

### Securing Passwords
* next need is to store passwords, failing is a major security concern
* If hacker is able to access database, have access to passwords of all users
* Instead of storing password directly we want to crytogpraphically hash passwrod so we enver store actual password
* We want to validate password during login, we can has login password

const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
### Passing authentication tokens
* now need to pass generated authentication token to browsser when login endpoint is called, and get it back subsequent request
* To do we use HTTp cookies, the **cookie-parser** package provides middleware for coookies
* import cookieParser object then tell app to ise it
* use **httpOnly, secure, and sameSite** to make it secure as possible
  * httpOnly telsl browser not to allow JS runnning on browser to read cookie
  * secure requires HTTPS to be used when sending cookie back to server
  * sameSite will only return cookie to domain that generated it

 const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
### login Endpoint
* Login authorization needs to get hased password from DB, compare to provided passwrod using **bycrypt.compare** and if successful, set authenticaiton token in the cookie
* if password does not match, or not iser with given email, endpoint returns 401(unathorized)

app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

### GetMe endpoint
* with everything in place we can now implement getM endpoint to demonstrate that it all actually workds
* To implement we get user object from DB by querying on authentication token
* If not token or no user exists reutrn 401(unathorized)

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

### Final code
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

### Experiment
* with everything imnplement can use curl to try it out
* Start up webservice by pressing F5 then selecting node.js as debugger
* Can set breakpoints on all of differnere endpoints to see what they do and inspect different variablers
* Open console window and run curl command
  * curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
    *  --> {"id":"639bb9d644416bf7278dde44"}
  * curl -b cookie.txt localhost:8080/user/me
    * {"email":"지안@id.com"}

## UI testng
* Test driven development(TDD) is proven method to acel app creation, prtect agiasnt bugs, and demonstrate correectness
* problem is brower is required to execite UI code, meaning you must actually test app in browser
* We are going to pick playright
* EX code
<!--<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body> -->
* First we would need to install playright
  * npm init playwright@latest
* NExt install exentsion for VS code
  * install Playwright test for VScode
* If testing a node.js based service run **npm run start**
* To run test in VS code select test explorer tab
  * should see test listed, select example.spex.js and press play button. It will start test, launch browser and displauy resutl
  * In this case test should fail becuase result expected was I feel not welcomed
## Endpoint testing
1) To get started with Jest we need simple web service, in console widnwo create test directory, install express, and open vs code
2) now create file named server.ks, use express to create app with two endpoints, one to get a store(geStore0 and another to update store
3) To allow jest to start HTTP we initialize app a litt more
   * normally we start listening on express app object after defined enpoints
   * export express app object form server.js file then import app in index.js file
   * can test working by debuggin f5 while viewing index.js file
4) to lauch create another file with suffix .test.js
   * any file with that suffix is considered testing file and will auto be discovered by jest and examing for tests to run
### Simple test
* before write tests for endpoints will write test that demostrates how jest works
1) call jest function
   * note don't need to include require statement
2) create file named store.test.js
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
  * test function takes description as **first** parameter, description is meant to be human readable, int his case it reads test that equat values are equal. **Second** parameteter is function to call, in thise our function just calls jest **expert**
4) install with npm install jest -D
5) replace scripts section of package.json with new command that will run tests
"scripts": {
  "test": "jest"
},
6) npm run test
### Testing endpoings
* to test endpoints we need another package so that we can make HTTP requets without having to actally send over the network
* Done with **npm package called supertest**
* npm install supertest -D
* Can then aloter store.test.js to import express service and also request fimction from supertest to make HTTp requests
* To make request we pass express app to supertest request function and then ciain HTTP verb function that we want to call, along with endpoint path
* Can then chain as many expect functions as you would like
* If something goes wrong, **end** function will contain error and we pass error to **done** function. Otherwise we just call **done** without error

const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});

* wben we run this test we see it passes without error(npm run test)
* you can change the test to expect status code of 500(server error) if you want to see test fail
* can change endpoint code to retirn 201 status code

## Websocket
* HTTP based on client-server architecture, a client initiates request and server responds
* Websocket pakes it a peer peer connetcton where either party can efficiently send data
  * if wanting to facilitate conversation between groups, must act as intermediary
### creating websocket conversation
* JS running on browser can initiate websocket connection API, but first must create Websocket object by specifying port you want to communicate on
* Can send messages with **send** funtion and register a calback using **onmessage** function to receive

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');

* server uses **ws** package to create Websocket server that is listening on same port the browser is using
* By specifying port when you create WSS you tell server to tlisten to HHTTp connections on that port and to automatically upgrade them to WS connection if request has a **connection: Upgrade** header
* when connection is detected, it calls server **on connection** callback. Server can then send messages with send function and register callback using on message funciton to receivve messages
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
## Debugging WebSocket
* can debug both sdies of WS with VS code to debug server and chrome to debug client
* When you do this you will notcie chromes debugger has support specifically for working with WS communication(**messages tab**)
### Debugging server
1) create directory named testWebSocket and change to that directory
2) run npm init -y
3) run npm install ws
4) open vs and create file named main.js and post following code:

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});

5) Create breakpoints on ws.send lines to inspect executing
6) debuggin by pressing F5, first time done may neet to choose Node.js as debugger

### Debugging client
1) Open chrome debugger by pressing F12
2) Paste this into debugger consle window and press enter to execute it. Executing it will immediately hit sever breakpoint:

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

3) Select **Network** tab then select HTTP message that was generated by execution of above client code
4) with HTTP message, click **message** tabe to bew WS messages
5) send message to serber by executing following in debugger consol window. This will cause 2nd server breakpoint to hit:

socket.send('I am listening');

6) Should see messages in messages debugger window
7) send some more messages and observe communication back and forth wihtout stopping on breakpoints

## Websocket chat
### Chat client
* HTML for client provides an input for users name, creating messages, and an element to display the messages that are sent and received:
<!--<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html> -->
* JS for app provides interaction with DOM for creating and displaying messages, and manaages the WS in order to connect, send, and receive messages

### DOM interaction
* we do not want to be able to send messages if user has not specified a name, so we add event listener on the name input and siable the chat controls if name is ever empty

const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});

* we then create function that will update displayed messages by selecting the element with **chat-text** ID and appending the new messages to its HTML
* Security minded developers will realize that manipulating DOM in this way will allow any chat user to execute code in context of application:

function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}

* when user pressed enter key in message input we want to send message over socket, do this by selecting DOM element with **new-msg** ID and adding listener that wathces for **enter** keystroke:
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

* when enter is pressed the sendMessage function is called, this selects the test out of **new-msg** element and sends that over WS. Value of message element is then cleared so its ready for next message:

function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

### WebSocket connection
* now we can set up WS we want to be able to supoprt both secure and non-secure WS connections
* To do this we look at protocol that is currently being used as representing by the **window.location.protocol** variable
* If it is non secure HTTp then we sent WS protocol to be non secure WS(ws) othersise we use secure WS(wss)
* Use that to then conect WS to same location that we loaded in HTMl from referncing the **window.location.host** variable
* We can notify the user that chat is readu to go by listening to **onopen** event and appending some text to display using **appendMsg** function we created earlier

// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

* When WS recieves message from peer, it displays using **appendMsg** function:

socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

* If the WS closes for any reason we also display that to the user and disable the controls:

socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

### Chat server
* chat server runs WS, serves up client code, mangages WS connections, and forwards messages from peers

### Web services
* WS is established using a simple express application, note that we serve up client using HTML, CSS, and JS files using the static middleware

const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

### WebSocket Server
* when we create WS we do things a little differently than we did with simple connection example
* Instead of letting WSServer control both HTTP connection and upgrading to WS, we want to use the HTTP conection that express is providing and handle the upgade to WS ourselves
* This is done by specifuing the **noServer** option when creating the WSServer and then handling the **upgrade** notification that occurs when a client requets the upgrade of the protocol from HTTP ro WS


// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

### Forwarding messages
* with WS server we can use the **connection, message, and close** events to forward messages between peers
* on conention we inster objet representing connection into list of all connections from chat peers
* Then when message is received we loop through peer connections and forward it on to everyone except peer who initated request
* Finally we remove connection from peer connection list when its closed

// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});

### Keeping connections alive
* WS connection will evv entlauu close automaticlaly if no data is sent across it
* To prevent that from happening the WS protocol supports the ability to send a **ping** message to see if peer is still there and receive **pong** responses to indicate affirmative
* To make this work we use setInterval to send out ping every 10 seconds to each of peer connections and clean up any connectoin that did no respond to previous ping

setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);

* in connection handler we listen for the **pong** response and mark the connection as alive

// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});

* any connection that did not respond will reamin in the not alive state and get cleaned up on next pass

## Security
* internet allows to socially connect, conduct financial transaction, and providea cces to sensitive personal, corporate and government data
* Accessible form eveyr corner of planet
* Hacking: proccess of amking a system do somethings its not supposed to
* Exploit: code or input that takes advantage of programming or configuration flow
* Attack vector: methid hacker uses
* Attack surface: exposer port of a system attacker can access
* Attack payload: actual code or data that hacker uses to exploit
* Input sanitiazation: 'cleaning' any input of potentially malicious data
* Black box testing: tsting app without knowledge of internals of application
* White box testing: testing app wtih knowledge of code and internal infrastructure
* Penetration testing: attemp to gain access to exploit a suystem in ways anticipated by developers
* Mitigation: action taked to remove, reduce a threat
### Motivation for attackers
* Disruption
* Data exfiltration
* Resource consumption

## OWASP
* Open Web Application Security Protocol is non-profit research entry that manages top ten list of most importatn web app security rissks
### A01 Broken access control
* Broken access control occurs when app doesn't properly enforece permission on useters(non-admin can do admin things)
* Mitigation: strict access enforcment
* clealruy defined roles and elevation paths
### A02 cryptogrpahic failures
* can occur when sensitive data is accessible either wihthout encryption, with weak enctyption of when protections are ignored
* sending uncrypted data over public network connections allows attackers to capture data
* Mitigation: use strong encryption for all data
* update encryption algorithims as older become compromised
* properly useing cryptographic safeguards
### A03 injection
* Injection exploits occur when attack is allowed to supply data that is injected into context where it vilates expected use of user input, for exapmle input field that should only contain a password, instead attack supplies SQL Db command in password input
* mitigation: sanitizing input
* use DB prepared statements
* Restricting execution rights
* limit output
### A04 insecure design
* insecure design broadly refers to architectural flaws that are unique for individual systems rather than implementaiton errors, this happens when application team doesn't focus on security when designing a system or doesn't continuously reevaluate apps security
* Insecure design explours based on unexpected uses of business logic that controlls functionality of application
* if app allows triual erros to be eaily created atacker could create denial of service attack by creating millions o f accounts
* Mitigation: integration testing
* strict access control
* security educattion and desgin pattern usages
* scenario reviews
### A05 security misconfiguration
* security misconfig attacks explout config of app(default passwrokds, not updating software
* Mitigation: config review
* Setting defaults to disable all access
* automaged foncig audits
* requir multiple layers o faccess for remote config
### A06
* Longer app has been deployed the more liekly it is that attack surfaces and corresponding exploits will increase, this is primarily due to cost of maintaining application and keeping it up to date to mitigate newlu discovered exploints
* Mitigation: keping manifest of software inlcuding versions, reviwing security bulletins, regularly updating software, required componets to be up to date, replacing unsuported software
### A07 identification and authentication failures
* identification and authentication failures in any situtatoin where users identity can be impersonated  or assumed by attacker. Ex if attack can repeadetly attempt to guess users passwrod then eventually they will be successful
* Mitgation: rate limiting requets, properly managing credentials, multifacort authentication, authentication recovery
### A07
* software and data integrity failrues represent attacks taht allow external, processes or data to compromise your application, modern web apps extensively use open source and commercially produced packages to provide cuntioanliuty
* Without secuity adut gives unknown ammount of control over your app
* Mitigations: only using truseted package respositories, using your own private vetted repository, audit all updates to 3rd party packages and data sources
### A09
* proper system monitoring, logging and alerting is critical to increasing security, one of the first things attacker will do after penetrating is deleting or altering any logs taht might reveal attackers presence
* Secure system will store logs that are accessible, immmutable, and contain adequate info to detect inrusion and conduct post mortem analysis
* Attack might try to create a smoke screen
* Mitigation: real time log processing, automated log review, periotic log review, visual dashboard for key idicators
### A10 Server side request forgery(SSRF)
* cateory of attack cuases app service to make unintended interal requests that utilized services elevated prviliges in order to expose internal data or services
* If service exposed enpoint that let user retrieve an external profile image based upon supplied URl, attacker could change URL to point to location that is normally only availoable to service internallyy
* Mitigation: sanitzing returned data, not returning data, whitelisting accessible domains, rejecting HTTP requests

# Web Frameworks
## Web frameworkds
* seeks to make job writing web app easier by providing tools for completing common application tasks such as modularizing code, creating sinlge page apps, simplifying reactivity, and supporting diverse hardware devices
* Each has advangages and disadvantages, some are very prescriptibe(opinionated) about how to do things, some have major institutional backing, and others have strong open source community
### Hello world example
* Vue
  * Vue combines HTML, CSS and JS into single file. HTML is represented by template slement that can be aggregated inot others
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>

### Svelte
* also vombines into single file, however it requires transpiler to generate browswer-ready code, instead of runtime virtual DOM

<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>

### React
* Combines JS and HTML into component format, CSS must be declared outside of JSX file
* Component itself highly leverages functionality of JS and can be represented as function or class

import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};

p {
  color: green;
}

###  Angular component
* defines what JS, HTML, and CSS are combined together. Keeps fairly strong separatioon of files that are usually grou0ped together in directory rathe rthan using single file representation

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}

<p>hello {{name}}</p>

p {
  color: green;
}

## **React**
* react and associated projects provide powerful web programming framework
* Name react comes from focus on making reactive web page components that automatically update based on user interactions or changes in underlying data
* Created by Jordan Walk for use at facebook
* Abstracts HTML into JS variatn called JSX, which is converted into valid HTML and JS using preprocessor called Babel
* Note example that has both HTML and JSS:

const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);

* Babel will converty into valid JS

const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);

* **React.createElement** function will then genarate DOM element and monitor data they represent for changes, when change is discovered trigger dependent changes

## Components
* React components allow modularizing functionality of app, which allows underlying code to directlyt represent components that user interacts with
* Also enables code refuse as common app compononets often sho up repeatedly
### Render function
* one of primary purposes of component is to generate user interface, which is done wtih components **render** function
* Whatever is returned from render is inserted into components HTML elemnet
* Simple example, JSX file contaning react component elemnet named **Demo** would cause react to load that component, call render function and insert result into place of Demo element

<div>
  Component: <Demo />
</div>
* NOTE: Demo is not valid HTML element, tranplier will repalce this tage with resulting rendered HTML

function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}

* Resulting HTML
<div>Component: <b>Hello world</b></div>

### Properties
* React components also allow you to pass info to them in form of element properties
* Component receives properties in its constructor and then can display them when it renders
* JSX
<div>Component: <Demo who="Walke" /><div>
* React component
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
* Resulting HTML
<div>Component: <b>Hello Walke</b></div>

### State
* in addition to properties, component can have internal state. Component state is created by calling React.useState hook function
* useState function retunrs variable that contains current state and function to update the state
* Following example creates state varibale called **clicked** and toggles the click state in the **updateClicked** function that gets called whent he paragraph text is clicked

const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);

* NOTE: you can use JSX even without function, a simple variable representing JSC will work anyolace you would otherwise put component

const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
### Class style components
* In addition to preferred **function style** components demonstrated above, react also supports **class style** components
* However, you should note react team is moving away from class style representation, so we whould probalby not use it
* Should still be aware of syntax. Major difference is that properties are loaded on constructor and state is ste using **setState** funciton on component object

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);

### Reactivity
* Components properties and state are used by react framework to determine reactivity of interface
* Reactivity conttols how component reacts to actions taken by user of events withing app
* When components state or properties change, **render** function for component and all its dependent component **render** functions are caled

## Tool Chains
* As web programming becomes more and more complex, it became necessary to abstract away some of that complexity with series of tools
  * Code repository: stores code in shared, versioned, location
  * Linter: removes, or warns, of non-idiomatic code usage
  * Prettier: formats code accoriding to shared standard
  * transpilier: complies code into diff format; from JSX to JS, TypeScript to JS or SCSS to CSS
  * Polyfill: generates backward compatible code for supporting old browser versions that do not support latest standards
  * Bundler: packages code into bundles for delivery to browser, this enables compatibility(for ex Es6 module support) or performace(with lazy loading)
  * Minifier: removes whitespace and reanmes variables in order to make code smaller and more efficient to deploy
  * Testing: automated tests at multiple levels to ensure correctness
  * Deployment: automated packaging and delivery of code from the development environment to production environment
  * Tool chain we will use is Github as repository, Vite for JSX, TS, development and debugging support, ESBuild for converting Es6 and transpiling(with Babel), Rollup for bundling and tree shakking, PostCSS for CSS transpiling and finally simple bash script for deployment
## Vite
* Want to extend usage to include full web framework toolchain that allows to use JSX, minification, polyfills, and budling for simon and startup applications
* Common way to confiure is to take advantage of CLI(command line interface) to initially set up web app
  * saves trouble of congifuring toolchain parameters and gets us quickly started with default application
* To create new react based web app using Viet open console and ruin following commands
  1) npm create vite@latest demoVite -- --template react
  2) cd demoVite
  3) npm install
  4) npm run dev
* Will create new web app in demoVite direcotry, download required 3rd party packages, and start up application using local HTTP debugging server
  * can tell Vite to open browser to URL that is hosting app by pression o, or press h to see all of Vite CLI options
* Can terrturn to your console and stop vite from hosting application by pressing q
### Generated project
* / directory
  * index.html: primary page for app, starting point to load of JSX begnning with main.jsx
  * package.json: npm definition for package dependencies and script commands
  * package-lock.json: version constratines for included packages(DO NOT EDIT)
* /public
  * vite.svg: vite logo for use as favicon and display in app
* /src
  * main.jsx: entry point for code execution, simply loads the app component found in *
* app.jsx
  * index.css: CSS for entire app
  * app.jsx: jsx for top level app component, displays logs and implements click counter
  * app.css: CSS for top level app component
* /scr/assets
  * react.svg: react logo for display in app
 
* main files in app are index.html, main.jsx, and app.jsx
* Browser loads index.html which provides HTML element(#root) that the react app will be injected into, it also includes script element to load main.jsx
* Main.jsx creates react app by associating #root element with app component found in app.jsx
* Causes all component redner functions to execute and the genrated HTML, CSS, JS to be executed in index.html

### JSX vs JS
* Vite CLU uses .jsx extention for JSX files intstead of .js extension
* Babel transpiler will work with either one but some editor tools work differetly based on extension which is why its better to use .jsx for files that contain it
### Building production release
* when execute npm run dev you are bundling codee to temporary directory that vite debug HTTP server loads from
* When want to bundle your app so you can deploy to production encironment ned to run **npm run build** which executres **build** script found in **package.json** and invokes vite CLI
* **vite build** transpiles, minifies, injects proper JS and outputs everything to deployment-read version contained in distribution sub-directory named **dist**

➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms

### Deploying production release
* deployment script fo simon react(deployReact.sh) creates production distribution by callin npm run build and then copying resulting dist directory to your productoin server
* Take time to build produiction rleasee by running npm run build then examine what vite actaully buidls by examining **dist** directory
  * if lo0k at dist/assets will see bundled and minified JS and CSS file

## Router
* Web framework router provides essentiual functionality for single-page apps
* With multi webpage apps the headers, footers, nave and common components must be duplicated in each HTML page, or injected before server sends page to browswer
* With single page, browser only loads one HTML page then JS is used to manipulate DOM and give it appearance of multiple pages
* Router defines routes a user can take through app
* React does not have a standard router package, and there are many that you can choose from
* We will use **react-router-dom** version 6
* Simplified routing functionality of react-router-dom derives from project react-router for its core functionality
* Do not confuse the two, or versions of react-router-dom before version 6, when rading tutorials and documentation
* Basic implementation of router consits of **BrowserRouter** component that encapsulates entire app and controlls the routing action
* The **Link** or **NavLink** component captures user navigation events and modifies what is rendered by **Routes** component by matching up **to** and **path** attributes

// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>
      main
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    /div
  </BrowserRouter>
);
