<!--

    <script>
      highlightCss({
        title: 'Selectors',
        showUse: false,
        code: `
        BASIC

        Selector            Description
        ===============================
        *                   Universal selector (all elements)
        div                 Tag selector (all &lt;div&gt; elements)
        .blue               Class selector (all elements with class blue)
        .blue.red           All elements with class blue and red (a type of Compound selector)
        #headline           ID selector (the element with "id" attribute set to headline)
        :pseudo-class       All elements with pseudo-class
        ::pseudo-element    Element that matches pseudo-element
        :lang(en)           Element that matches :lang declaration, for example &lt;span lang="en"&gt;
        div > p             child selector


        ATTRIBUTE

        Selector(1)         Matched element                 Selects elements...                                                                                 CSS Version
        ===================================================================================================================================================================
        [attr]              &lt;div attr&gt;                      With attribute attr                                                                                 2
        [attr='val']        &lt;div attr="val"&gt;                Where attribute attr has value val                                                                  2
        [attr~='val']       &lt;div attr="val1 val2 val3"&gt;     Where val appears in the whitespace-separated list of attr                                          2
        [attr^='val']       &lt;div attr="val1"&gt;               Where attr's value begins with val                                                                  3
        [attr$='val']       &lt;div attr="1val"&gt;               Where the attr's value ends with val                                                                3
        [attr*='val']       &lt;div attr="somevalhere"&gt;        Where attr contains val anywhere                                                                    3
        [attr|='val']       &lt;div attr="val-sth"&gt;            Where attr's value is exactly val, or starts with val and immediately followed by - (U+002D)        2


        COMBINATORS

        Selector            Description
        ===============================

        div span            Descendant selector (all &lt;span&gt;s that are descendants of a &lt;div&gt;)
        div > span          Child selector (all &lt;span&gt;s that are a direct child of a &lt;div&gt;)
        a ~ span            General Sibling selector (all &lt;span&gt;s that are siblings after an &lt;a&gt;)
        a + span            Adjacent Sibling selector (all &lt;span&gt;s that are immediately after an &lt;a&gt;)


        PSEUDO-CLASSES (Most used)

        Name                Description
        ===============================

        :first-child        Represents any element that is the first child element of its parent.
        :first-of-type      Applies when an element is the first of the selected element type inside its parent. This may or may not be the first-child.
        :last-child         Represents any element that is the last child element of its parent.
        :last-of-type       Applies when an element is the last of the selected element type inside its parent. This may or may not be the last-child.
        :nth-child          Applies when an element is the n-th element of its parent, where n can be an integer, a mathematical expression (e.g n+3) or the keywords odd or even.
        :nth-of-type        Applies when an element is the n-th element of its parent of the same element type, where n can be an integer, a mathematical expression (e.g n+3) or the keywords odd or even.
        :only-child         The :only-child CSS pseudo-class represents any element which is the only child of its parent. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.
        :lang               Applies to any element who's wrapping &lt;body&gt; element has a properly designated lang= attribute. For the pseudo-class to be valid, it must contain a valid two or three letter language code.
        :active             Applies to any element being activated (i.e. clicked) by the user.
        :hover              Applies to any element being hovered by the user's pointing device, but not activated.
        :target             Selects the current active #news element (clicked on a URL containing that anchor name)
        :checked            Applies to radio, checkbox, or option elements that are checked or toggled into an "on" state.
        :target             Selects the current active #news element (clicked on a URL containing that anchor name)
        :visited            Applies to any links which have has been visited by the user.


        CHILD PSEUDO-CLASSES

        Pseudo-selector     1 2 3 4 5 6 7 8 9 10
        ========================================
        :first-child        X
        :nth-child(3)           X
        :nth-child(n+3)         X X X X X X X X
        :nth-child(3n)          X     X     X
        :nth-child(3n+1)    X   X     X     X
        :nth-child(-n+3)    X X X
        :nth-child(odd)     X   X   X   X   X
        :nth-child(even)      X   X   X   X   X
        :last-child                           X
        :nth-last-child(3)                X
            `,
      });
    </script>

    <script>
      highlightCss({
        title: 'Backgrounds',
        showUse: false,
        code: `
                        OPTIONS

                        Value                   Description
        ================================================================================================
        background-image        Background image to use
        background-color        Background color to apply
        background-position     Background image's position
        background-size         Background image's size
        background-repeat       How to repeat background image
        background-origin       How the background is positioned (ignored when background-attachment is fixed)
        background-clip         How the background is painted relative to the content-box, border-box, or the padding-box
        background-attachment   How the background image behaves, whether it scrolls along with its containing block or has a fixed position within the viewport


        EXAMPLES

        div {
          background-color: red;
          background-color: #FFFFFF;
          background-color: #FFF;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.5);
          background-color: hsl(120, 100%, 50%);
          background-color: hsla(120, 100%, 50%, .3);

          background: linear-gradient(to left top, red, blue);
          background: linear-gradient(to left top, red, orange, yellow, green, blue, indigo, violet);

          background: radial-gradient(red, blue);
          background: radial-gradient(circle, farthest-corner at top left, red, blue);

          background: repeating-radial-gradient(red, red 10%, white 10%, white 20%);
          background: repeating-linear-gradient(-45deg, yellow, yellow 10%, black 10%, black 20% );

          background-image: url('path/to/image.png');
          background-image: url('path/to/image.png'), url('path/to/another-image.png');
          background: red url('path/to/image.png');
          background-size: xpx ypx | x% y%;
          background-repeat: no-repeat | repeat | repeat-x | repeat-y;
          background-position: left offset (px/%) right offset (px/%) | center center | left top | right bottom;
          background-position: 50% 50%;

          background-size: 50px;
          background-size: 50px auto; /* same as above */
          background-size: auto 50px;
          background-size: 50px 50px;
        }

        #mydiv {
          background-image:       url(img_1.png), /* top image */
                      url(img_2.png), /* middle image */
                      url(img_3.png); /* bottom image */

          background-position:    right bottom,
                      left top,
                      right top;

          background-repeat:      no-repeat,
                      repeat,
                      no-repeat;
        }


            `,
      });
    </script>
  </div>


-->
