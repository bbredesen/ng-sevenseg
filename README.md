# ng-sevenseg v0.1.1

Seven segment display built as an Angular module and component. SVG markup shamelessly borrowed from http://brandonlwhite.github.io/sevenSeg.js/, with rendering adapted from jQuery to Angular.

MIT License, see included license file.

## Usage

`npm i ng-sevenseg`

In the module where you want to use seven-seg:
```
import { SevenSegModule } from 'ng-sevenseg';

@NgModule({
  imports: [
    SevenSegModule
  ]
MyModule { ... }
```

...and in your component template:
```
<seven-seg digits="3" decimalPlaces="1" value="2.1"></seven-seg>
```

* Minimal configuration, no attributes are required to render a blank display. You can, of course, bind to values in the controller with brackets (`[value]="myValue"`)
* Without a value set, the display will render "off"; an empty string will be interpreted as "0"
* `digits` indicates the total number of digits displayed, including decimal places.
Ignoring this attribute will render the display as one digit.
* `decimalPlaces` indicates the fixed number of decimal places. Behavior is undefined
if this value is greater than the number of digits.

### Styling

You can define CSS classes to change the style of the seven segment display.
However, because of the specificity in the default styling, you must define
your classes with the seven-seg element name, as shown below. There are three
attribute selectors available for specific components and conditions. (Note the
space between the class name and the selectors.)

Set values for the display as a whole:
```
seven-seg.myCssClass [display] {
  background-color: #AAA;
  fill: blue; /* Segment color */
  height: 3em;
}
```

Set values for segments that are turned on:
```
seven-seg.myCssClass [segmentOn] {
     opacity: 1;
}
```

Set values for segments that are turned off:
```
seven-seg.myCssClass [segmentOff] {
    opacity: 0; /* Turned off segments are 20% opacity by default. */
}
```

## TODO

[X] v0.0.1: Odd bug: the following element renders as 4.5 _ instead of 4.60:
`<seven-seg value="4.6" digits="3" decimalPlaces="2"></seven-seg></div>`; other
values, such as 3.6 render correctly, as does an element with only one decimal
place.

[X] v0.1.0: Allow CSS classes to customize the display.

[ ] On/off functionality

[X] Calculate segment off color from segment on color (20% intensity?) Should still
allow explicit setting of each color, so one could use (e.g.) black digits on a white background

[X] CSS class name specifications for styling

[ ] Decision on individual style pass-through

[-] Digit slant setting/specification (user can apply transform: skewX in CSS)

## History

0.1.1 - Bug fix where webkit was not redrawing SVG on attribute change

0.1.0 - Pass-through of CSS classes, lots of code cleanup

0.0.1 - Initial release
