# ng-sevenseg

Seven segment display built as an Angular module/component. SVG rendering shamelessly
borrowed from http://brandonlwhite.github.io/sevenSeg.js/, with rendering adapted
from jquery to Angular.

NOTE: Working code with basic functionality, but has not yet been built as a library. This
project will be built and uploaded to npm in the future.

## Usage

`<seven-seg digits="3" decimalPlaces="1" value="2.1"></seven-seg>`

* No attributes are required.
* Without a value set, the display will render "off"; an empty string will be interpreted as "0"
* `digits` indicates the total number of digits displayed, including decimal places.
Ignoring this attribute will render the display as one digit.
* `decimalPlaces` indicates the fixed number of decimal places. Behavior is undefined
if this value is greater than the number of digits.

## TODO

* Pass through styling, such as display size, color, slant
* On/Off functionality to turn off the display on command
* Error/edge case handling, like values that exceed the display capacity,
decimal places greater than display capacity, etc.
