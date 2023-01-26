<template>
  <div class="container">
    <h1>HTML</h1>

    <h2>Basics</h2>

    <h3>Doctype</h3>
    <div class="row">
      <div class="col-sm-12">
        <div class="pre">&lt;!DOCTYPE html></div>
      </div>
    </div>

    <h3>Headings</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;h1>Heading 1&lt;/h1>
&lt;h2>Heading 2&lt;/h2>
&lt;h3>Heading 3&lt;/h3>
&lt;h4>Heading 4&lt;/h4>
&lt;h5>Heading 5&lt;/h5>
&lt;h6>Heading 6&lt;/h6>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <h1 class="color_blue100">Heading 1</h1>
        <h2 class="color_blue100">Heading 2</h2>
        <h3 class="color_blue100">Heading 3</h3>
        <h4 class="color_blue100">Heading 4</h4>
        <h5 class="color_blue100">Heading 5</h5>
        <h6 class="color_blue100">Heading 6</h6>
      </div>
    </div>

    <h3>Paragraph</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">&lt;p>This is a paragraph&lt;/p></pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <p>This is a paragraph</p>
      </div>
    </div>

    <h3>Text Formatting</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;p>There is a &lt;strong>Bold text here&lt;/strong> here&lt;/p>
&lt;p>There is a &lt;b>Bold text here&lt;/b> here&lt;/p>
&lt;p>There is a &lt;em>Italicized text here&lt;/em> here&lt;/p>
&lt;p>There is a &lt;i>Italicized text here&lt;/i> here&lt;/p>
&lt;p>There is a &lt;abbr title="Hypertext Markup Language">HTML!&lt;/abbr> here&lt;/p>
&lt;p>There is a &lt;ins>New Text&lt;/ins> here&lt;/p>
&lt;p>There is a &lt;del>Deleted Text&lt;/del> here&lt;/p>
&lt;p>There is a &lt;s>Struck-through text&lt;/s> here&lt;/p>
&lt;p>There is a &lt;sup>Superscript text&lt;/sup> here&lt;/p>
&lt;p>There is a &lt;sub>Subscript text&lt;/sub> here&lt;/p>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <p>There is a <strong>Bold text here</strong> here</p>
        <p>There is a <b>Bold text here</b> here</p>
        <p>There is a <em>Italicized text here</em> here</p>
        <p>There is a <i>Italicized text here</i> here</p>
        <p>There is a <abbr title="Hypertext Markup Language">HTML!</abbr> here</p>
        <p>There is a <ins>New Text</ins> here</p>
        <p>There is a <del>Deleted Text</del> here</p>
        <p>There is a <s>Struck-through text</s> here</p>
        <p>There is a <sup>Superscript text</sup> here</p>
        <p>There is a <sub>Subscript text</sub> here</p>
      </div>
    </div>

    <h3>Anchors and Hyperlinks</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;a href="http://www.example.com">Link to example.com&lt;/lt;a>
&lt;a href="#heading4">Go to Heading 4&lt;/a> &lt;h4 id="heading4">Heading 4&lt;/h4>
&lt;a href="/about">About&lt;/a>
&lt;a href="tel:112233445566">Call Us&lt;/a>
&lt;a href="http://www.example.com" target="_blank">Open in new tab&lt;/a>
&lt;a href="#!" onclick="alert('Alert!')">Run JavaScript function&lt;/a>
&lt;a href="mailto:example@example.com">Send email&lt;/a>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <a href="http://www.example.com" class="color_blue100">Link to example.com</a>
        <br />
        <a href="#heading4" class="color_blue100">Go to Heading 4</a>
        <h4 style="display: inline;" id="heading4" class="color_blue100">Heading 4</h4>
        <br />
        <a href="/about" class="color_blue100">About</a>
        <br />
        <a href="tel:112233445566" class="color_blue100">Call Us</a>
        <br />
        <a href="http://www.example.com" target="_blank" class="color_blue100">Open in new tab</a>
        <br />
        <a href="#!" onclick="alert('Alert!')" class="color_blue100">Run JavaScript function</a>
        <br />
        <a href="mailto:example@example.com" class="color_blue100">Send email</a>
      </div>
    </div>

    <h3>Lists</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;ol>
  &lt;li>Item&lt;/li>
  &lt;li>Another item&lt;/li>
  &lt;li>Yet another item&lt;/li>
&lt;/ol>

&lt;ul>
  &lt;li>Item&lt;/li>
  &lt;li>Another item&lt;/li>
  &lt;li>Yet another item&lt;/li>
&lt;/ul>

&lt;ol>
  &lt;li>Item&lt;/li>
  &lt;li>Another item&lt;/li>
  &lt;li>Yet another item&lt;/li>
  &lt;li>
    &lt;ul>
      &lt;li>Item&lt;/li>
      &lt;li>Another item&lt;/li>
      &lt;li>Yet another item&lt;/li>
    &lt;/ul>
  &lt;/li>
&lt;/ol>

&lt;dl>
  &lt;dt>Name 1&lt;/dt>
  &lt;dd>Value for 1&lt;/dd>
  &lt;dt>Name 2&lt;/dt>
  &lt;dd>Value for 2&lt;/dd>
&lt;/dl>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <ol>
          <li>Item</li>
          <li>Another item</li>
          <li>Yet another item</li>
        </ol>
        <ul>
          <li>Item</li>
          <li>Another item</li>
          <li>Yet another item</li>
        </ul>
        <ol>
          <li>Item</li>
          <li>Another item</li>
          <li>Yet another item</li>
          <li>
            <ul>
              <li>Item</li>
              <li>Another item</li>
              <li>Yet another item</li>
            </ul>
          </li>
        </ol>
        <dl>
          <dt>Name 1</dt>
          <dd>Value for 1</dd>
          <dt>Name 2</dt>
          <dd>Value for 2</dd>
        </dl>
      </div>
    </div>

    <h3>Table</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;table>
  &lt;caption>Table Title&lt;/caption>
  &lt;thead>
    &lt;tr>
      &lt;th>A&lt;/th>
      &lt;th>B&lt;/th>
      &lt;th>C&lt;/th>
      &lt;th>D&lt;/th>
    &lt;/tr>
  &lt;/thead>
  &lt;tbody>
  &lt;tr>
    &lt;td>A1&lt;/td>
    &lt;td>B1&lt;/td>
    &lt;td>C1&lt;/td>
    &lt;td>D1&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>A2&lt;/td>
    &lt;td>B2&lt;/td>
    &lt;td>C2&lt;/td>
    &lt;td>D2&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>A3&lt;/td>
    &lt;td>B3&lt;/td>
    &lt;td>C3&lt;/td>
    &lt;td>D3&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>A4&lt;/td>
    &lt;td colspan="3">B4&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td rowspan="2">A5&lt;/td>
    &lt;td>B5&lt;/td>
    &lt;td>C5&lt;/td>
    &lt;td>D5&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>B6&lt;/td>
    &lt;td>C6&lt;/td>
    &lt;td>D6&lt;/td>
  &lt;/tr>
  &lt;/tbody>
  &lt;tfoot>
    &lt;tr>
      &lt;td>AF&lt;/td>
      &lt;td>BF&lt;/td>
      &lt;td>CF&lt;/td>
      &lt;td>DF&lt;/td>
    &lt;/tr>
  &lt;/tfoot>
&lt;/table>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <table>
          <caption>
            Table Title
          </caption>
          <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>A1</td>
            <td>B1</td>
            <td>C1</td>
            <td>D1</td>
          </tr>
          <tr>
            <td>A2</td>
            <td>B2</td>
            <td>C2</td>
            <td>D2</td>
          </tr>
          <tr>
            <td>A3</td>
            <td>B3</td>
            <td>C3</td>
            <td>D3</td>
          </tr>
          <tr>
            <td>A4</td>
            <td colspan="3">B4</td>
          </tr>
          <tr>
            <td rowspan="2">A5</td>
            <td>B5</td>
            <td>C5</td>
            <td>D5</td>
          </tr>
          <tr>
            <td>B6</td>
            <td>C6</td>
            <td>D6</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>AF</td>
            <td>BF</td>
            <td>CF</td>
            <td>DF</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <h3>Comments</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">&lt;!-- I'm an HTML comment --></pre>
      </div>
    </div>

    <h3>Classes and IDs</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;div class="example-class"&gt;&lt;/div&gt;
&lt;div id="example-id"&gt;&lt;/div&gt;
&lt;style&gt;
.example-class {}
#example-id {}
&lt;/style>
        </pre>
      </div>
    </div>

    <h3>Linking Resources</h3>
    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
JavaScript:   &lt;script src="example.min.js"&gt;&lt;script&gt;
CSS:          &lt;link rel="stylesheet" href="example.css"&gt;
Favicon:      &lt;link rel="icon" type="image/png" href="/favicon.png"&gt;
Favicon:      &lt;link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"&gt;
CSS to print: &lt;link rel="stylesheet" href="test.css" media="print"&gt;
RSS:          &lt;link rel="alternate" type="application/rss+xml" href="http://example.com/feed.xml" /&gt;
        </pre>
      </div>
    </div>

    <h3>Include JavaScript code in HTML</h3>
    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
&lt;script src="example.js"&gt;&lt;/script&gt;
&lt;script&gt;
// JavaScript code
&lt;/script&gt;
&lt;noscript&gt;This browser does not support Javascript.&lt;/noscript&gt;
        </pre>
      </div>
    </div>

    <h3>Using HTML with CSS</h3>
    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="general.css"&gt;
&lt;link rel="stylesheet" type="text/css" href="specific.css"&gt;
&lt;style type="text/css"&gt;
* {
margin: 0;
padding: 0;
border-box: box-sizing;
}
body {
background-color: gray;
}
.specific {
background-color: red;
}
&lt;/style&gt;
&lt;/head&gt;
        </pre>
      </div>
    </div>

    <h3>Images</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;img src="http://lorempixel.com/200/200" alt="Hello">
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <img src="http://lorempixel.com/200/200" alt="Hello" />
      </div>
    </div>

    <h3>Input</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;label>Type: text&lt;/label>
&lt;input type="text">

&lt;label>Type: checkbox&lt;/label>
&lt;input type="checkbox">

&lt;label>Type: radio&lt;/label>
&lt;input type="radio">

&lt;label>Type: checkbox&lt;/label>
&lt;input type="checkbox" checked>

&lt;label>Type: radio&lt;/label>
&lt;input type="radio" checked>

&lt;label>Type: color&lt;/label>
&lt;input type="color">

&lt;label>Type: password&lt;/label>
&lt;input type="password">

&lt;label>Type: file&lt;/label>
&lt;input type="file">

&lt;label>Type: button&lt;/label>
&lt;input type="button" value="Button">

&lt;label>Type: submit&lt;/label>
&lt;input type="submit" value="Submit">

&lt;label>Type: reset&lt;/label>
&lt;input type="reset" value="Reset">

&lt;label>Type: hidden&lt;/label>
&lt;input type="hidden">

&lt;label>Type: tel&lt;/label>
&lt;input type="tel" value="+15544332211">

&lt;label>Type: checkbox&lt;/label>
&lt;input type="checkbox">

&lt;label>Type: email&lt;/label>
&lt;input type="email">

&lt;label>Type: number&lt;/label>
&lt;input type="number">

&lt;label>Type: range&lt;/label>
&lt;input type="range" min="0" max="20" step="2">

&lt;label>Type: search&lt;/label>
&lt;input type="search">

&lt;label>Type: image&lt;/label>
&lt;input type="image">

&lt;label>Type: week&lt;/label>
&lt;input type="week">

&lt;label>Type: url&lt;/label>
&lt;input type="url">

&lt;label>Type: datetime&lt;/label>
&lt;input type="datetime-local">

&lt;label>Type: month&lt;/label>
&lt;input type="month">

&lt;label>Type: time&lt;/label>
&lt;input type="time">

&lt;label>Type: date&lt;/label>
&lt;input type="date">

&lt;input id="red" type="text">
&lt;label for="red">Red&lt;/label>

&lt;label>
  Blue
  &lt;input id="red" type="text">
&lt;/label>

&lt;fieldset>
  &lt;legend>Theme Color&lt;/legend>
  &lt;label for="color">Define the color&lt;/label>
  &lt;input id="color" type="text">
&lt;/fieldset>

&lt;h4>Validation&lt;/h4>
&lt;input type="text" required>

&lt;input type="text" minlength="5" maxlength="10">

&lt;input type="text" pattern="\d*">
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <label>Type: text</label>
        <input type="text" />
        <br />
        <label>Type: checkbox</label>
        <input type="checkbox" />
        <br />
        <label>Type: radio</label>
        <input type="radio" />
        <br />
        <label>Type: checkbox</label>
        <input type="checkbox" checked />
        <br />
        <label>Type: radio</label>
        <input type="radio" checked />
        <br />
        <label>Type: color</label>
        <input type="color" />
        <br />
        <label>Type: password</label>
        <input type="password" />
        <br />
        <label>Type: file</label>
        <input type="file" />
        <br />
        <label>Type: button</label>
        <input type="button" value="Button" />
        <br />
        <label>Type: submit</label>
        <input type="submit" value="Submit" />
        <br />
        <label>Type: reset</label>
        <input type="reset" value="Reset" />
        <br />
        <label>Type: hidden</label>
        <input type="hidden" />
        <br />
        <label>Type: tel</label>
        <input type="tel" value="+15544332211" />
        <br />
        <label>Type: checkbox</label>
        <input type="checkbox" />
        <br />
        <label>Type: email</label>
        <input type="email" />
        <br />
        <label>Type: number</label>
        <input type="number" />
        <br />
        <label>Type: range</label>
        <input type="range" min="0" max="20" step="2" />
        <br />
        <label>Type: search</label>
        <input type="search" />
        <br />
        <label>Type: image</label>
        <input type="image" />
        <br />
        <label>Type: week</label>
        <input type="week" />
        <br />
        <label>Type: url</label>
        <input type="url" />
        <br />
        <label>Type: datetime</label>
        <input type="datetime-local" />
        <br />
        <label>Type: month</label>
        <input type="month" />
        <br />
        <label>Type: time</label>
        <input type="time" />
        <br />
        <label>Type: date</label>
        <input type="date" />
        <br />

        <input id="red" type="text" />
        <label for="red">Red</label>
        <br />
        <label>
          Blue
          <input id="red" type="text" />
        </label>
        <br />
        <fieldset>
          <legend>Theme Color</legend>
          <label for="color">Define the color</label>
          <input id="color" type="text" />
        </fieldset>

        <h4>Validation</h4>
        <input type="text" required />
        <br />
        <input type="text" minlength="5" maxlength="10" />
        <br />
        <input type="text" pattern="\d*" />
        <br />
      </div>
    </div>

    <h3>Forms</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;form action="upload.php" method="get">&lt;/&lt;form>

&lt;form action="upload.php" method="post">&lt;/form>

&lt;form method="post" enctype="multipart/form-data" action="upload.php">
  &lt;input type="file" name="pic" />
  &lt;input type="submit" value="Upload" />
&lt;/form>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <form action="upload.php" method="get"></form>

        <form action="upload.php" method="post"></form>

        <form method="post" enctype="multipart/form-data" action="upload.php">
          <input type="file" name="pic" />
          <input type="submit" value="Upload" />
        </form>
      </div>
    </div>

    <h3>Div</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;div>Not nested&lt;/&lt;div>
&lt;div class="outer-div">
  &lt;div class="inner-div">
    &lt;p>This is a paragraph&lt;/p>
  &lt;/div>
  &lt;div class="inner-div">
    &lt;p>This is another paragraph&lt;/p>
  &lt;/div>
&lt;/div>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <div>Not nested</div>
        <div class="outer-div">
          <div class="inner-div">
            <p>This is a paragraph</p>
          </div>
          <div class="inner-div">
            <p>This is another paragraph</p>
          </div>
        </div>
      </div>
    </div>

    <h3>Sectioning</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;nav>
  &lt;a href="#">Link 1&lt;/a>
  &lt;a href="#">Link 2&lt;/a>
  &lt;a href="#">Link 3&lt;/a>
&lt;/nav>

&lt;header>&lt;/header>
&lt;section>&lt;/section>
&lt;footer>&lt;/footer>
&lt;article>&lt;/article>
&lt;main>&lt;/main>

&lt;section>
  &lt;article>&lt;/article>
&lt;/section>
&lt;article>
  &lt;header>&lt;/header>
  &lt;section>&lt;/section>
  &lt;footer>&lt;/footer>
&lt;/article>
        </pre>
      </div>
    </div>

    <h3>Navigation Bars</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;nav>
  &lt;a href="#">Link 1&lt;/a>
  &lt;a href="#">Link 2&lt;/a>
  &lt;a href="#">Link 3&lt;/a>
&lt;/nav>

&lt;ul>
  &lt;li>&lt;a href="#">Link 1&lt;/a>&lt;/li>
  &lt;li>&lt;a href="#">Link 2&lt;/a>&lt;/li>
  &lt;li>&lt;a href="#">Link 3&lt;/a>&lt;/li>
&lt;/ul>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <nav>
          <a href="#" class="color_blue100">Link 1</a>
          <a href="#" class="color_blue100">Link 2</a>
          <a href="#" class="color_blue100">Link 3</a>
        </nav>

        <ul>
          <li><a href="#" class="color_blue100">Link 1</a></li>
          <li><a href="#" class="color_blue100">Link 2</a></li>
          <li><a href="#" class="color_blue100">Link 3</a></li>
        </ul>
      </div>
    </div>

    <h3>Label</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;label>
  &lt;input type="checkbox" name="Cats">
  I like cats
&lt;/&lt;label>

&lt;input id="cats" type="checkbox" name="Cats">
&lt;label for="cats">I like cats&lt;/label>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <label>
          <input type="checkbox" name="Cats">
          I like cats
        </label>

        <input id="cats" type="checkbox" name="Cats">
        <label for="cats">I like cats</label>
      </div>
    </div>

    <h3>Void Elements</h3>
    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
&lt;area>
&lt;base>
&lt;br>
&lt;col&gt;
&lt;hr>
&lt;img>
&lt;input>
&lt;link>
&lt;meta>
&lt;param>
        </pre>
      </div>
    </div>

    <h3></h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;audio controls>
  &lt;source src="file.mp3" type="audio/mp3">
  Your browser does not support this element.
&lt;/&lt;audio>

&lt;video controls>
  &lt;source src="file.mp4" type="video/mp4">
  Your browser does not support this element.
&lt;/video>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <audio controls>
          <source src="" type="audio/mp3">
          Your browser does not support this element.
        </audio>

        <video controls>
          <source src="" type="video/mp4">
          Your browser does not support this element.
        </video>
      </div>
    </div>

    <h3></h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
          &lt;progress value="20" max="100">&lt;/progress>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <progress value="20" max="100"></progress>
      </div>
    </div>

    <h3>Selection Menu Controls</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;select name="one">
  &lt;option value="">&lt;/option>
  &lt;option value="1">One&lt;/option>
  &lt;option value="2">Two&lt;/option>
  &lt;option value="3">Three&lt;/option>
&lt;/select>

&lt;select name="two">
  &lt;option value="" label="">
  &lt;option value="1" label="One">
  &lt;option value="2" label="Two">
  &lt;option value="3" label="Three">
&lt;/select>

&lt;select name="three" multiple>
  &lt;option value="">&lt;/option>
  &lt;option value="1">One&lt;/option>
  &lt;option value="2">Two&lt;/option>
  &lt;option value="3">Three&lt;/option>
&lt;/select>

&lt;select name="four" multiple>
  &lt;option value="">&lt;/option>
  &lt;option value="1" selected>One&lt;/option>
  &lt;option value="2">Two&lt;/option>
  &lt;option value="3">Three&lt;/option>
&lt;/select>

&lt;input list="Languages">
&lt;datalist id="Languages">
  &lt;option value="PHP">
  &lt;option value="Perl">
  &lt;option value="Python">
  &lt;option value="Ruby">
  &lt;option value="C+">
&lt;/datalist>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <select name="one">
          <option value=""></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select name="two">
          <option value="" label="" />
          <option value="1" label="One" />
          <option value="2" label="Two" />
          <option value="3" label="Three" />
        </select>

        <select name="three" multiple>
          <option value=""></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select name="four" multiple>
          <option value=""></option>
          <option value="1" selected>One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <input list="Languages">
        <datalist id="Languages">
          <option value="PHP" />
          <option value="Perl" />
          <option value="Python" />
          <option value="Ruby" />
          <option value="C+" />
        </datalist>
      </div>
    </div>

    <h3>Embed</h3>
    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
&lt;embed type="video/mp4" src="video.mp4" width="640" height="480">
        </pre>
      </div>
    </div>

    <h3>Iframe</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;iframe src="base.html">&lt;/&lt;iframe>
&lt;iframe src="http://www.example.com">&lt;/iframe>
&lt;iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/suUsDNq4WtM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
&lt;/iframe>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <iframe src=""></iframe>
        <iframe src="http://www.example.com"></iframe>
        <iframe width="360" height="115" src="https://www.youtube.com/embed/suUsDNq4WtM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <h3>SVG</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pre class="pre">
&lt;svg
  style="width: 100px; height: 100px;"
  class="attention"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 1000 1000">
    &lt;path
    id="attention"
    d="large code here" />
&lt;/svg>
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <svg style="width: 100px; height: 100px;" class="attention" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" > <path id="attention" d="m571,767l0,-106q0,-8,-5,-13t-12,-5l-108,0q-7,0,-12,5t-5,13l0,106q0,8,5,13t12,6l108,0q7,0,12,-6t5 ,-13Zm-1,-208l10,-257q0,-6,-5,-10q-7,-6,-14,-6l-122,0q-7,0,-14,6q-5,4,-5,12l9,255q0,5,6,9t13,3l103, 0q8,0,13,-3t6,-9Zm-7,-522l428,786q20,35,-1,70q-10,17,-26,26t-35,10l-858,0q-18,0,-35,-10t-26,-26q-21 ,-35,-1,-70l429,-786q9,-17,26,-27t36,-10t36,10t27,27Z" /></svg>
      </div>
    </div>
  </div>
</template>
