import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Card, CardMedia, CardActions, CardHeader, CardText } from 'material-ui/Card';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [ { creator: 'Jerry Jong',
      title: 'All About that Sass',
      link: 'https://medium.com/@jerryjong01/all-about-that-sass-8c56a35e87a1?source=rss-86c94f3c8187------2',
      pubDate: 'Fri, 08 Sep 2017 06:34:21 GMT',
      'content:encoded': '<figure><img alt="" src="https://cdn-images-1.medium.com/max/427/1*UMfUwzsm3lo230vWd2TMWw.png" /></figure><p>When it comes to simplicity in style sheets, CSS has always been the main choice for most developers. However, as our applications continue to grow in scale, become more complex, and target a wider variety of devices and screen sizes, this simplicity becomes a liability as CSS quickly buckles underneath all the weight. While proposals have been made to add more content to CSS, it would be a long time before all browsers are compatible with the new CSS.</p><p>This is where CSS preprocessors come in to play. A few years ago, developers Hampton Caitlin and NathanWeizenbaum realized that while browsers weren’t necessarily ready for a new CSS, the two could design a new style sheet syntax made to handle increasingly complex CSS, then use a <em>preprocessor </em>(a program that runs on your computer or server) to translate this new syntax into the classic CSS syntax that all browsers can recognize (More on this process later). There are many CSS preprocessors out there, but today we will be talking about <strong>Sass </strong>(syntactically awesome style sheets) and its ability to use variables, nesting, and mixins. Sass looks incredibly similar to CSS but does not use curly braces or semi-colons and also uses indentation and nesting. It is also important to note here that Sass offers two distinct syntaxes — Sass and SCSS.</p><ul><li>Sass (Syntactically Awesome Style Sheets) refers to thepreprocessor and syntax as a whole. It takes on its own syntax (the indented syntax), and compiles to readable CSS. We refer to the overalllanguage as Sass.</li><li>SCSS (Sassy CSS) falls under the Sass umbrella. It is a CSS syntax that’s been turbocharged with all the goodnessof Sass. Valid CSS is also valid SCSS, so the transition is swift and painless, and you can learn as much as you want at any time to improve your skills.</li></ul><p>SCSS is generally considered to be the newer and better approach and most typically code in SCSS so this guide will be primarily focused on SCSS syntax. Here’s a quick example of the differences between the three.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/798/1*3ic_7Gp7FyjZStpeFLXCKg.png" /></figure><h3><strong>Why Sass?</strong></h3><p>When it comes to traditional CSS, the great thing is that if you know the basics of the language, you have the freedom to do a lot of great things with CSS. However, as applications become more complex, so do the CSS files and this freedom begins to become a liability as the files get out of control. Even in moderately sized projects, CSS files can become hard to maintain and it can slow down the workflow.</p><p>To combat these problems, Sass introduces variables, nesting, inheritance/extend, and mixins.</p><h4>Variables</h4><p>Variables in Sass work in a similar fashion to those in any programming language, including core principals of scope and data types. You can think of variables as a way to store and reuse information throughout your style sheet. Sass uses the $ symbol to make something a variable. Here&#39;s an example:</p><p><strong>SCSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/859/1*N3LLzfXYBGD6HSobfC34zg.png" /></figure><p><strong>CSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/860/1*93_T53UqEngsBSz2rgrjQQ.png" /></figure><p>Once the Sass is processed, it takes thevariables we define for the $color and $color2 and outputs normal CSS with our variable values placed in the CSS (view right-most code snippet above). This can be extremely powerful, for example, when working with brand colors and keeping them consistent throughout a site.</p><h4>Nesting</h4><p>Sass allows you to nest your CSS selectors in a way that follows the same visual hierarchy of an HTML file. This can be both beautiful and dangerous, as it’s easy to get carried away with nesting, and end up with very long declarations that are hard to maintain and this is generally considered bad practice.</p><p><strong>SCSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/861/1*qgUZUpO86gxp4yLtuNv7Eg.png" /></figure><p><strong>CSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/862/1*f6U_G9l3SrXm7T6utUIiYQ.png" /></figure><p>Awesome, right? Moving on.</p><h4>Inheritance/Extend</h4><p>This is an extremely powerful feature of SCSS that permits sharing a set of CSS properties from one selector to another, allowing us to keep our code extremely DRY.</p><p><strong>SCSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/859/1*T-NHVFITb55cxhXc0akL9A.png" /></figure><p>The above code will allow you to take the CSS properties in %box and apply them to .greenBox. Then,.greenBoxBlueBackground will inherit %box properties as well by extending the.greenBoxproperty to.greenBoxBlueBackground. After the processing, you’ll end up with something like this:</p><p><strong>CSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/860/1*BpsXFupurR8VjGxsdfYTfQ.png" /></figure><p>Again, wow.</p><h4>Mixins</h4><p>Mixins are another great feature of Sass. They allow us to reuse whole blocks of code by creating our own functions and passing in variables. This is particularly useful for properties that need vendor prefixing. Sass uses the @mixin directive to define mixins,and the @include directive to use them.</p><p><strong>SCSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/861/1*vKpd4A5ZwTTe-Z_H_4JQTw.png" /></figure><p>which will generate the following:</p><p><strong>CSS</strong></p><figure><img alt="" src="https://cdn-images-1.medium.com/max/861/1*qwmEB3CDqasx_Aqsq1m5Dg.png" /></figure><h3><strong>In Conclusion</strong></h3><p>This is just an introduction to Sass — there are many more features to discover. I recommend the official <a href="http://sass-lang.com">Sass documentation</a> and tocheck out <a href="http://compass-style.org/help/">Compass</a> in your further research and encourage you to consider using Sass in your next project and don’t forget to clap that Sass.</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8c56a35e87a1" width="1" height="1">',
      'dc:creator': 'Jerry Jong',
      picture: 'https://cdn-images-1.medium.com/max/427/1*UMfUwzsm3lo230vWd2TMWw.png',
      guid: 'https://medium.com/p/8c56a35e87a1',
      categories: [ 'sass', 'scss' ],
      isoDate: '2017-09-08T06:34:21.000Z' },
    { creator: 'Jerry Jong',
      title: 'Introducing Spion IO',
      link: 'https://medium.com/@jerryjong01/introducing-spion-io-8b548527d990?source=rss-86c94f3c8187------2',
      pubDate: 'Fri, 18 Aug 2017 01:35:45 GMT',
      'content:encoded': '<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*oi1ztPuc4qHG_qEXNtYWUQ.png" /></figure><p><strong>Intro:</strong></p><p>We built Spion IO, an open source focus group management API, designed to capture page visitor’s session and allow the developer to replay these sessions in our sleek and interactive open source interface. One of the features that we placed the most importance on when first white-boarding our API was the idea of making it free, scalable and in the hands of the developers and open source community as much as possible. As such, we have separated our API into three moving parts that are easy to implement, such as simply adding a script tag.</p><p><strong>Creating a Free and Open-Source Architecture:</strong></p><p>The simplest way to construct the API would have been tosend all page visitor data to our own central database, but that would mean that the service couldn’t be free as we would have to charge for server usage and increased bandwidth costs. Our solution, Spion IO, consists of three components:</p><p>1. A script tag that can be injected into a developers HTML that adds event listeners for clicks, scrolls and mouse movement and sends event data to the database<br>2. Servercode that will store that data in the database<br>3. An interface that access the event data in the database and plays back page visitor sessions</p><p>We wanted to give developers the ability to set up their own database that could run on their sites existing server. We also wanted to ensure that it would be easy to implement. The injected HTML and the video-like playback interface need to access the same database.To do this, we created a simple configuration shell script that will install MongoDB if they don’t have it already, inject client and server dependencies and configure all three parts so that they can communicate with the same database.</p><p><strong>Optimization:</strong></p><p>One of the early challenges we faced was the additional expense of adding many different event listeners onto a developers website and how to handle the data sent from frequently triggered events, such as mouse movement and scroll movement which happens on a single pixel change.The problem with data frequently being sent traditionally is that HTTP requests are extremely expensive. If we were to write a script that could make 10 HTTP requests per second, this would drastically slow down the developer’s website and the page visitor’s experience. As a result of this challenge, we chose to design our script to use WebSockets, throttles and local storage to mitigate the burden of our script on a developer’s website.</p><p><strong>How WebSockets Optimize our Script:</strong></p><p>First, once the developer has injected our script tag into the desired HTML pages, every page visitor to these websites will begin to, on page load, start collecting data containing page visitor mouse positions and scroll positions. Assuming that the developer has already run our shell script to setup Mongo and configure the models for storing our data into the database, our script will also, on a page load, open a WebSocket connection, reducing the large number of HTTP requests to only one request. This will already improve the performance of our script but we can do better. Furthermore, we can implementevery computer’s local storage with the setTimeout method to store an array of page visitor events and send them off in bundles every couple of seconds. By combining all three of these strategies to reduce the amount of requests and frequency of requests, we are able to run our script with little to no interference on the developer’s website.</p><p><strong>Seamless Video-Stitch Experience and Website Mimicking:</strong></p><p>Now that user event data has been gathered, it needs to be redisplayed back on the platform website in such a way that it does not affect the website. So we cannot just inject a developer’s HTML and CSS. The page’s data needs to be injected into an iframe as an iframe does not affect the content around it. This allows us to create a responsive and interactive React interface and inject a developer’s website exactly as it is into our interface. Due to security implications of iframes, it is difficult to inject CSS (i.e cursor animation) from cross domain webpages. So we had to extract the developer’s exact HTML and additionally also requests to any linked scripts/stylesheets to that page. Our injected script parses through the developer’s HTML file for scripts and link files, instantiates child processes to get the exact content from each of these links and, then finally saves all relevant information to one model.</p><p>Lastly, when we have to redisplay the developer’s site on our interface, all of this information is injected into the mounted page such that no cross browser request is made. After the process of mimicking the web page exactly as it was to the page visitor, we further have to mimic the cursor inside the browser insuch a way that is would represent the user’s exact cursor positions on the client’s browser.</p><p>By iterating through the event’s array that we stored earlier and interpreting each event in the object, we animate the rendered cursor to the corresponding position. Yet, the problem lies in how to give the interface of the animation similar appeal to that of a video interface. Key UI features included a slider to move forward and backwards through the data and rendering that single frame, similar to a video. This was solved by getting to the new event object data only when an animation of moving the cursor has finished, as without it the animations are finished afterwards.</p><p><strong>Conclusion:</strong></p><p>As proof of concept, we would like other developers to try our library and leave feedback on how we can improve the project or even build upon it. Come check us out at our website and GitHub.</p><p><em>Spion IO is </em><a href="http://github.com/morpherious"><em>Mustafa Khan</em></a><em>, </em><a href="http://github.com/mm0nr0e"><em>Miranda Monroe</em></a><em>, and </em><a href="http://github.com/j3rryj"><em>Jerry Jong</em></a></p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8b548527d990" width="1" height="1">',
      'dc:creator': 'Jerry Jong',
      picture: 'https://cdn-images-1.medium.com/max/1024/1*oi1ztPuc4qHG_qEXNtYWUQ.png',
      guid: 'https://medium.com/p/8b548527d990',
      isoDate: '2017-08-18T01:35:45.000Z' },
    { creator: 'Jerry Jong',
      title: 'Have Some Fiber in your Diet',
      link: 'https://medium.com/@jerryjong01/have-some-fiber-in-your-diet-b7832602281b?source=rss-86c94f3c8187------2',
      pubDate: 'Sun, 03 Sep 2017 00:10:48 GMT',
      'content:encoded': '<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*2BNv_0GbPW5wcWa8-K2Spg.png" /></figure><p>In case you have not heard, the React team has been working on a reimplementation of it’s core diffing algorithm that we’ve all come to love. This is the performant feature of React that utilizes the virtual DOM and avoids expensive tree traversals for DOM manipulation, allowing developers today to create solid and sophisticated UI’s. So why reimplement something that’s already so performant?</p><h3><strong>React Fiber vsStack</strong></h3><p>Well, it’s important to note early on that the main reason for the current ongoing reimplementation is not focused onmaking React more performant but rather more suitable for areas like animation, layout and gestures. This is due to the fact that React’s current implementation of building up the call stack recursively and calling all render functions in one event tick can cause problems when it comes to animating UIs. And so React Fiber’s headline feature is incremental rendering: the ability to split render work into chunks and spread it out over multiple frames. If you take a look at the two animations below, you will be able to see what I mean.</p><h4><strong>StackExample</strong></h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/550/1*PRfPGtWu1luNFAxRekJP7g.gif" /></figure><p>If you take a look at the Stack example, notice how the animation of expanding the nodes is rather choppy and seems to skip multiple frames of animation. However, at the same time the nodes expand, so does the number within the node, which is retrieved from the data store. Like I said previously, this is due to React’s current implementation of DOM manipulation. React introduces the idea of pure functions in its component rendering, meaning each component can be thought of as a function that calls another function in its render method. Then, all of the render functions are called at once in one event tick. Therefore, everything is rendered at once, which is exactly what you see in the stack example.</p><p>There are multiple problems with this approach when it comes to creating user interfaces. For starters, certain updates, like the animation of expanding the nodes, get stuck behind more computationally expensive procedures, such as the background procedure of updating the number within the node from the data store. Furthermore, when too much work is executed at once, frames can drop and you end up with low fps in terms of animation. No need to worry, however, because React Fiber introduces basic project management skills to its reconciliation process that can drastically improve React’s suitability for user interface animations. Let’s take a look:</p><h4><strong>Fiber Example</strong></h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/550/1*hvfXLcMGNXQ4KITbG-EoNg.gif" /></figure><p>At first glance, you can already see exactly how much more powerful React is with the introduction of React Fiber. Whereas the current implementation calls all the render functions in one event tick, Fiber introduces scheduling, the ability to pause, abort, or reuse work, as well as assigning priorities todifferent types of updates. For example, if something is offscreen, we can delay any logic related to it. If data is coming in faster than the React render rate, then we can batch and coalesce updates. And we can prioritize updates, like the animation of expanding the nodes, over more expensive background updates, like the numbers increasing within the node itself. By allowing React Fiber to do so, React developer’scan now consistently return to the main thread of execution, rather than only returning to the main thread of execution once in one render cycle.</p><h3>What is a “Fiber”?</h3><p>So what exactly is a Fiber and how did React achieve incremental rendering? Well, the whole idea behind incremental rendering lies on the ability to split rendering work into chunks, or into units of work. And that’s essentially what a Fiber is. A Fiber is a data structure created by the React team with the necessary properties to keep track of node relationships and assign different priorities. A dive into the data structure reveals where this is done.</p><pre>var createFiber = function (tag, key) {<br>  return {<br>    // Instance<br>    tag: tag,<br>    key: key,<br>    type: null,<br>    stateNode: null,</pre><pre>    // Fiber<br>    ‘return’: null,<br>    child: null,<br>    sibling: null,<br>    ref: null,<br>    pendingProps: null,<br>    memoizedProps: null,<br>    updateQueue: null,<br>    memoizedState: null,<br>    callbackList: null,<br>    output: null,<br>    nextEffect: null,<br>    firstEffect: null,<br>    lastEffect: null,<br>    pendingWorkPriority: NoWork,<br>    progressedPriority: NoWork,<br>    progressedChild: null, <br>    alternate: null<br>  };<br>};</pre><p>The child and sibling properties keep track of node relationships. There is also a number of properties that imply theability to pause reuse and abort work as well as assign priorities to different types of updates. The properties pendingWorkPriority and progressedPriority are where the updates are assigned either high priority through the requestAnimationFrame API or low priority through the requestIdleCallback API. The requestAnimationFrame will allow for a high priority update to return to the main thread of execution before each new frame repaint in the browser while the requestIdleCallback can delay any functions.</p><h3>Is Fiber Ready Yet?</h3><blockquote><a href="http://isfiberreadyyet.com/">http://isfiberreadyyet.com/</a></blockquote><p>Fiber is out! (Beta version) And the great news is that React Fiber is backwards compatible, meaning the only requirement it takes for you to include React Fiber in your next project is npm installing the next version of react via</p><pre>npm install react@next react-dom@next</pre><p>It is important to note that React has not recommended Fiber for production. Also, there are many more features to React Fiber that include the ability to return arrays from render as well as errorboundaries. Definitely research more on the topic if any of this interested you. You can start here with Lin Clark’s cartoon explanation onReact Fiber:</p><p><a href="https://www.youtube.com/watch?v=qAs1bHnSn7I">https://www.youtube.com/watch?v=qAs1bHnSn7I</a></p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=b7832602281b" width="1" height="1">',
      'dc:creator': 'Jerry Jong',
      picture: 'https://cdn-images-1.medium.com/max/1024/1*2BNv_0GbPW5wcWa8-K2Spg.png',
      guid: 'https://medium.com/p/b7832602281b',
      categories: [ 'javascript', 'react' ],
      isoDate: '2017-09-03T00:10:48.000Z' },
    { creator: 'Jerry Jong',
      title: 'onTouchTap with Material-UI',
      link: 'https://medium.com/@jerryjong01/ontouchtap-with-material-ui-59d59acd5cf3?source=rss-86c94f3c8187------2',
      pubDate: 'Fri, 14 Jul 2017 00:34:23 GMT',
      'content:encoded': '<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*yqSYIZNfRPHeF-tCTrRrIw.png" /></figure><p>Material-UI is a set of React components that was developed in 2014 out of a love for React and Google’s Material Design. Because it was developed with React in mind, it is quite easy for people who are more familiar with React to hit the ground running in designing their front-end. However, there are quirks that even those who are familiar with React will need to get adjusted to. One of those is the property onTouchTap provided by react-tap-event-plugin as the official event listener for Material-UI components, thereby replacing familiar event listeners suchas onClick and onSubmit.</p><p>First things first is why reinvent the wheel? If onClick and onSubmit seem to work fine, then why do we needonTouchTap? Material-UI reasons that onClick and onSubmit are <em>not fast enough </em>due to a 300ms latency, which may cause certain events to not be registered or triggered in your application, especially when React was built with speed in mind.</p><p>If you’re wondering why you cannot just implement onTouchTap in Material-UI, it is because there is some setup required with onTouchTap since it is not included in the Material-UI npm package, but is rather a part of react-tap-event-plugin.</p><p>To get started with onTouchTap, you first have to run</p><pre>npm install react-tap-event-plugin</pre><p>then you require it in your highest React component,</p><pre>import injectTapEventPlugin from &#39;react-tap-event-plugin&#39;;<br></pre><pre>// both is needed for onTouchTap</pre><pre>injectTapEventPlugin();</pre><p>Now say you want to import some sort of button from Material-UI and implement that component in your UI design. Rather than maybe having &lt;forms&gt; and &lt;inputs&gt; with a type of submit and an onSubmit method on the form, you will be using &lt;Button&gt;, a Material-UI component that has a property known as onTouchTap. Whereas onClick and onSubmit methods need to take in a parameter, most commonly named as ‘e’ which stands for element, onTouchTap does not.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/878/1*4NpXiZyBBW4rFsnoTy_UVQ.png" /></figure><p>Above is an example of implementing onTouchTap with Material-UI’s RaisedButton component in a barter application written in React/React-Router. If you look at the &lt;RaisedButton/&gt; JSX component, onTouchTap will invoke addPost which makes an axios post request to my API.</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=59d59acd5cf3" width="1" height="1">',
      'dc:creator': 'Jerry Jong',
      picture: 'https://cdn-images-1.medium.com/max/1024/1*yqSYIZNfRPHeF-tCTrRrIw.png',
      guid: 'https://medium.com/p/59d59acd5cf3',
      isoDate: '2017-07-14T00:34:23.000Z' } ]
    }
  }

  componentDidMount() {
    // this.grabMediumPosts();
  }

  grabMediumPosts() {
    axios.get('/api/medium')
    .then( async (res) => {
      console.log(res.data)
      if (this.state.data == null) {
        await this.setState({
          data: res.data
        })
      }
      console.log(this.state.data)
      await this.styleMediumPosts();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  styleMediumPosts() {
    console.log('styling')
    let posts = this.state.data;
    return posts.map(post => {
      return (
        <div style={{margin: '0 auto', border: '4px solid white', width: '22%', marginLeft: '2%', display: 'inline-block'}}>
          <Card style={{backgroundColor: 'black', letterSpacing: '1px'}}>
            <CardMedia style={{overflow: 'hidden', height: '150px'}}>
              <img style={{backgroundColor: 'white'}} src={post.picture}/>
            </CardMedia>
            <CardHeader
              titleColor='white'
              subtitleColor='lightgrey'
              title={post.title.slice(0, 16) + '...'}
              titleStyle={{fontSize: '.8em'}}
              subtitleStyle={{marginTop: '1%', fontSize: '.6em'}}
              subtitle={post.pubDate.slice(0, 16)}
              actAsExpander={true}
            />
            <CardText color='white' expandable={true}>
              {ReactHtmlParser(post['content:encoded'])}
            </CardText>
          </Card>
        </div>
      )
    });
  }

  render() {
    return(
      <div style={{marginTop: '5%'}}>
        {this.styleMediumPosts()}
      </div>
    )
  }
}

export default Blog;