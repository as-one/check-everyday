<template>
  <div class="container content">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h2 class="m0">Basics</h2>

        <h3>CSS Design Patterns</h3>
        <ul>
          <li>
            <strong><a href="https://en.bem.info/" target="_blank">BEM</a> - Block Element Modifier</strong>:
            <br />
            block__element--modifier
          </li>
        </ul>

        <h3>Block Construction Order</h3>
        <ol>
          <li><strong>html / folders</strong></li>
          <li><strong>bg-reference / base</strong></li>
          <li><strong>flexbox / positioning</strong></li>
          <li><strong>grid</strong> (fr > px > %)</li>
          <li><strong>img</strong></li>
          <li><strong>font-*</strong> (family/size/weight/style)</li>
          <li><strong>padding</strong> (-left? button?) (px)</li>
          <li><strong>margin-top / margin-left</strong> (px)</li>
          <li><strong>width / height</strong> (% > px)</li>
          <li>color / background-color</li>
        </ol>
        <a href="https://codepen.io/as-one/pen/eYdvPbZ" target="_blank">Set bg-reference</a>

        <h3>Rules Order</h3>
        <ol>
          <li><strong>Display</strong>: display, position, and float</li>
          <li><strong>Box model</strong>: width, height, margin, padding, and border</li>
          <li><strong>Background</strong></li>
          <li><strong>Typography</strong></li>
          <li>Other</li>
        </ol>

        <h3>Box Model</h3>
        <ul>
          <li><strong>margin > border > padding</strong> > content</li>
        </ul>

        <h3>Selectors</h3>
        <ul>
          <li><strong>*</strong> // universal selector (all elements)</li>
          <li><strong>div</strong> // tag selector (all &lt;div&gt; elements)</li>
          <li><strong>#headline</strong> // id</li>
          <li><strong>.blue</strong> // class blue</li>
          <li><strong>.blue.red</strong> // class blue and red</li>
          <li><strong>:hover</strong> // mouseover</li>
          <li><strong>::after</strong> // after any element. Use as a complement of it.</li>
          <li><strong>::before</strong> // before any element. Use as a complement of it.</li>
          <li><strong>div > p</strong> // child p of div</li>
          <li><strong>[attr='val']</strong> // attribute attr equal val</li>
          <li><strong>:first-child</strong></li>
          <li><strong>:last-child</strong></li>
          <li><strong>:nth-child(2)</strong> // number, odd, or even</li>
          <li><strong>:nth-of-type(2)</strong> // number, odd, or even</li>
        </ul>

        <h3>Length units</h3>
        <ul>
          <li><strong>%</strong> percentage</li>
          <li><strong>em</strong> relative to parent's font-size</li>
          <li><strong>rem</strong> relative to root's font-size (1rem == browser's font-size)</li>
          <li><strong>vw</strong> viewport width</li>
          <li><strong>vh</strong> viewport height</li>
          <li><strong>px</strong> pixels</li>
          <li><strong>fr</strong> fraction. Unit used for grid</li>
        </ul>

        <h3>Adding CSS</h3>
        <ul>
          <li>External stylesheet <strong>&lt;link rel="stylesheet" href=""> </strong></li>
          <li>Internal stylesheet <strong>&lt;style>* { }&lt;/style> </strong></li>
          <li>Import in CSS: <strong>@import { url(./folder/file.css); }</strong></li>
        </ul>

        <h3>Media queries</h3>
        <ul>
          <li><strong>@media (min-width: 480px) {}</strong> // Tablet</li>
          <li><strong>@media (min-width: 992px) {}</strong> // Desktop</li>
          <li>@media screen and (min-width: 769px) and (max-width: 992px) {} // Exceptions</li>
          <li><a href="https://codepen.io/cesarkohl/pen/PoPxweK" target="_blank">All @media</a></li>
        </ul>

        <h3>Comments</h3>
        <ul>
          <li><strong>/* Comment */</strong></li>
          <li><strong>// Comment</strong></li>
        </ul>

        <h3>Lines</h3>
        <ul>
          <li>div { display: hidden; } <strong>// one rule, one line</strong></li>
          <li>div { position: absolute; top: 0; } <strong>// over one rule, multiple lines</strong></li>
        </ul>

        <h3>Custom properties</h3>
        <ul>
          <li><strong>:root</strong> { <strong>--blue</strong>: #0A0A0A; }</li>
          <li>div { color: <strong>var(--blue)</strong>; }</li>
        </ul>

        <h3>Functions</h3>
        <ul>
          <li>width: <strong>calc(50% - 100px)</strong>;</li>
          <li>color: <strong>var(--blue)</strong>; // -- blue set in <strong>:root {}</strong></li>
          <li><strong>radial-gradient(red, orange, yellow)</strong>; // background</li>
          <li><strong>linear-gradient(0deg, red, yellow 50%, blue)</strong>; // background</li>
        </ul>

        <h3>!important</h3>
        <ul>
          <li>color: red <strong>!important</strong>; // overrides blue</li>
          <li>color: blue;</li>
        </ul>
      </div>

      <div class="col-sm-12 col-md-4">
        <h2 class="m0">Structure</h2>

        <h3 class="h4">Grid</h3>
        <div class="container container_col_two">
          <div class="col">
            <h4>Parent</h4>
            <ul>
              <li><strong>display: grid;</strong></li>
              <li><strong>grid-template-rows</strong>: 100px 200px 100px;</li>
              <li><strong>grid-template-columns</strong>: 1fr repeat(10, 99px) 1fr;</li>
              <li>grid: grid-template-rows / grid-template-columns;</li>
              <li>gap: 10px 20px;</li>
              <li>place-items: center center;</li>
            </ul>
          </div>
          <div class="col">
            <h4>Children</h4>
            <ul>
              <li><strong>grid-row</strong>: 1 / 3;</li>
              <li><strong>grid-column</strong>: 2 / 3;</li>
              <li>place-self: end end;</li>
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank"
            >CSS Tricks's Complete Guide to Grid</a
            >
          </li>
        </ul>

        <h3 class="h4">Flexbox</h3>
        <div class="container container_col_two">
          <div class="col">
            <h4>Parent</h4>
            <ul>
              <li><strong>display: flex;</strong></li>
              <li><strong>flex-direction</strong>: row | column</li>
              <li><strong>flex-wrap</strong>: nowrap | wrap; // nowrap disregard width.</li>
              <li>flex-flow: flex-direction + flex-wrap</li>
              <li><strong>justify-content</strong>:; x axis</li>
              <li><strong>align-content</strong>:; y axis</li>
              <li>align-items:; // y axis</li>
            </ul>
          </div>
          <div class="col">
            <h4>Children</h4>
            <ul>
              <li><strong>flex-grow</strong>: (number)</li>
              <li><em>flex-shrink: (number)</em></li>
              <li><em>flex-basis: auto</em></li>
              <li><em>flex: flex-grow + flex-shrink + flex-basis</em></li>
              <li><em>order: (number)</em></li>
              <li><em>align-self: Check Dev Tools's options</em></li>
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"
            >CSS Tricks's Complete Guide to Flexbox</a
            >
          </li>
        </ul>

        <h3 class="h4">Positioning</h3>
        <div class="container container_col_two">
          <div class="col">
            <h4>Parent</h4>
            <ul>
              <li><strong>position: relative</strong></li>
            </ul>
          </div>
          <div class="col">
            <h4>Children</h4>
            <ul>
              <li><strong>position: absolute</strong></li>
              <li><strong>top:</strong> (number);</li>
              <li><strong>right:</strong> (number);</li>
              <li><strong>bottom:</strong> (number);</li>
              <li><strong>left:</strong> (number);</li>
              <li><strong>z-index:</strong> (number);</li>
            </ul>
          </div>
        </div>
        <ul></ul>

        <ul>
          <li>position: <strong>fixed</strong> // fixed in the screen despite scrolling</li>
        </ul>

        <h3>Display</h3>
        <ul>
          <li>display: <strong>inline</strong>; // siblings inline are in the same line</li>
          <li>display: <strong>block</strong>; // width 100%</li>
          <li>display: <strong>none</strong>; // hides element</li>
        </ul>

        <h3>Float</h3>
        <ul>
          <li><strong>float: left | right;</strong></li>
        </ul>

        <h3>Centering</h3>
        <ul>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/PoPxwbW" target="_blank">Horizontal + vertical using Grid</a> //
            parent & child
          </li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/gOaQOZa" target="_blank">Horizontal + vertical using Flexbox</a>
            // parent & child
          </li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/wvKQvLg" target="_blank"
            >Horizontal + vertical using Position: absolute</a
            >
            // parent & child
          </li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/QWyjvpa" target="_blank">Horizontal using margin: 0 auto</a> // no
            parent
          </li>
        </ul>

        <h3>Margin</h3>
        <ul>
          <li><strong>margin: top right bottom left;</strong> // clockwise</li>
          <li>margin: 10px 100px 5px; // == 10px 100px 5px 100px</li>
          <li>margin: 20px 200px; // == 20px 200px 20px 200px</li>
        </ul>

        <h3>Padding</h3>
        <ul>
          <li><strong>padding: top right bottom left;</strong> // clockwise</li>
          <li>padding: 10px 100px 5px; // == 10px 100px 5px 100px</li>
          <li>padding: 20px 200px; // == 20px 200px 20px 200px</li>
        </ul>

        <h3>Border</h3>
        <ul>
          <li><strong>border</strong>: 1px solid black;</li>
          <li><strong>border-top</strong>: 1px solid black;</li>
          <li><strong>border-right</strong>: 1px solid black;</li>
          <li><strong>border-bottom</strong>: 1px solid black;</li>
          <li><strong>border-left</strong>: 1px solid black;</li>
          <li><strong>border-radius</strong>: 10px;</li>
          <li><strong>box-sizing: border-box;</strong> // border inside the box's dimension</li>
          <li><a href="https://codepen.io/cesarkohl/pen/qBbbKmv" target="_blank">Case: Border & outline</a></li>
        </ul>

        <h3>Opacity</h3>
        <ul>
          <li><strong>opacity</strong>: 0.5;</li>
        </ul>

        <h3>Typography</h3>
        <ul>
          <li><strong>font-style: italic;</strong></li>
          <li><strong>font-weight</strong>: bold | number from 100 to 900</li>
          <li><strong>font-size</strong>: 10px;</li>
          <li><strong>line-height</strong>: 5px; // font's container</li>
          <li>
            <strong>font-family</strong>: <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> &&
            sans-serif | serif;
          </li>
          <li><strong>color</strong>: #000000;</li>
          <li><strong>text-align</strong>: left | right | center | justify;</li>
          <li><strong>text-decoration</strong>: underline | none;</li>
          <li><strong>text-transform</strong>: uppercase | lowercase;</li>
          <li>
            <strong>text-shadow</strong>:
            <a href="https://css3gen.com/text-shadow/" target="_blank">Text Shadow tool</a> // copy & paste
          </li>
          <li><strong>letter-spacing</strong>: 2px; // space between letters</li>
        </ul>
      </div>

      <div class="col-sm-12 col-md-4">
        <h2 class="m0">Details</h2>

        <h3>Overflow</h3>
        <ul>
          <li><strong>overflow: auto</strong>; // when float is used in children apply this to the parent</li>
          <li><strong>overflow: hidden</strong>; // hide content that overpasses the element</li>
        </ul>

        <h3>Backgrounds</h3>
        <ul>
          <li><strong>background-image:</strong> url(./folder/file.jpg | png | svg);</li>
          <li><strong>background-color:</strong> blue;</li>
          <li><strong>background-position:</strong> top center;</li>
          <li><strong>background-size:</strong> 10px 20px | auto | contain | cover;</li>
          <li><strong>background-repeat: no-repeat</strong>;</li>
          <li>background-origin</li>
          <li>background-clip</li>
          <li>background-attachment</li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/xxZwqPz" target="_blank">All background's properties applied</a>
          </li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/abdvWOX" target="_blank">Case: SVG background image and color</a>
          </li>
        </ul>

        <h3>Object fit</h3>
        <ul>
          <li><strong>object-fit</strong>:; // consider in backgrounds</li>
        </ul>

        <h3>Box-shadow</h3>
        <ul>
          <li><a href="https://www.cssmatic.com/box-shadow" target="_blank">Box Shadow tool</a> // copy & paste</li>
        </ul>

        <h3>Color</h3>
        <ul>
          <li><strong>color</strong>: red;</li>
          <li><strong>border</strong>: 1px solid red;</li>
          <li><strong>box-shadow</strong>: 0 0 5px <strong>currentColor</strong>;</li>
          <li><strong>background</strong>: #000000;</li>
          <li>// #000000 == #000</li>
          <li>// #00FFCC == #0FC</li>
        </ul>

        <h3>List styles</h3>
        <ul>
          <li><strong>ul { padding: 0; }</strong> // good practice for normalization</li>
          <li><strong>ul { list-style-type: none;</strong> } // lis's dots dissapear</li>
        </ul>

        <h3>Filter</h3>
        <ul>
          <li><strong>filter: blur(</strong>10px<strong>);</strong></li>
        </ul>

        <h3>Cursor</h3>
        <ul>
          <li><strong>pointer: cursor;</strong> // use on &lt;a> or &lt;button> to show up the cursor on hover</li>
        </ul>

        <h3>Table</h3>
        <ul>
          <li><a href="https://www.w3schools.com/css/css_table.asp" target="_blank">W3Schools's Styling Tables</a></li>
        </ul>

        <h3>Transitions</h3>
        <ul>
          <li><strong>transition:</strong> {duration} {property} {timing-function}</li>
          <li><strong>transition-delay:</strong> 0.5s</li>
          <li><strong>transition-duration:</strong> 1s</li>
          <li><strong>transition-property:</strong> height</li>
          <li><strong>transition-timing-function:</strong> ease, linear, ease-(in|out|in-out), cubic bezier(n,n,n,n)</li>
        </ul>

        <ul>
          <li>
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions"
                target="_blank"
            >Mozilla's CSS Transitions Docs</a
            >
          </li>
          <li>
            <a href="https://www.w3schools.com/css/css3_transitions.asp">W3Schools' CSS Transitions Docs</a>
          </li>
          <li>
            <a href="https://codepen.io/cesarkohl/pen/ExPVWQL" target="_blank">All transition's properties applied</a>
          </li>
        </ul>

        <h3>2D transforms</h3>
        <ul>
          <li><a href="https://codepen.io/cesarkohl/pen/ExPVWep" target="_blank">Case: Menu hamburger</a></li>
        </ul>

        <h3>3D transforms</h3>
        <ul>
          <li><a href="https://3dtransforms.desandro.com/" target="_blank">DeSandro's Intro to CSS 3D</a></li>
          <li><a href="https://codepen.io/cesarkohl/pen/pogjeKw" target="_blank">Case: 3D phone rotating</a></li>
        </ul>

        <h3>Animation</h3>
      </div>
    </div>
  </div>
</template>
