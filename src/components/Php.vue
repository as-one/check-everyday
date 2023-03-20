<template>
  <div class="container content">
    <h2>Basics</h2>

    <h3>Fundamentals</h3>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h4>Console</h4>
        <pre class="pre">
echo "Hello world!";
print_r("Hello world!");
var_dump("Hello world!");
            </pre>

        <h4>Variables</h4>
        <pre class="pre">
$myVar = "My var";
define("MY_CONSTANT", "");
            </pre>

        <h4>Data Types</h4>
        <pre class="pre">
gettype() # get type
string    # "" ''
int       # 10
float     # 10.5
bool      # true | false
array     # [1, 2]
            </pre>

        <h4>Type Conversions</h4>
        <pre class="pre">
(string)    # (string) 10 = "10"
(float)     # (float) 10 = 10.0
(boolean)   # (boolean) 10 = true
(array)     # avoid it
(object)    # avoid it

intval()    # intval(1.5) = 1
floatval()  # floatval(10) = 10.0
boolval()   # boolval(0) = false
strval()    # strval(10) = "10"
str_split() # str_split('st') = ['s', 't']
            </pre>

        <h4>Static Type Analyzer</h4>
        <a class="link" target="_blank" href="https://github.com/phpstan/phpstan">PHPStan</a>
        <a class="link" target="_blank" href="https://psalm.dev/">Psalm (add types)</a>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Comparisons</h4>
        <pre class="pre">
==
&lt;=
&gt;=
!=
&&
||
            </pre>

        <h4>Conditional</h4>
        <pre class="pre">
if (1 == 2) {
} else if (1 == 3) {
} else {}

$ternary = true ? "is true" : "is false";
            </pre>

        <h4>Logical Operators</h4>
        <pre class="pre">
+
-
*
/
++ # +1
-- # -1
            </pre>

        <h4>Functions</h4>
        <pre class="pre">
function name() {}

$fn = fn($y) => $y + $z;
==
$fn = function ($x) use ($y) {
  return $x + $y;
}

# kill process
exit();
die();
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Loops</h4>

        <h5>for</h5>
        <pre class="pre">
for ($x = 0; $x &lt;= 10; $x++) {
  echo $x;
}
        </pre>

        <h5>foreach</h5>
        <pre class="pre">
foreach ([1,2,3] as $val) {
  echo $val;
}
        </pre>

        <h5>switch</h5>
        <pre>
switch ($val) {
  case 0: return "zero";
  case 1: return "one";
  default: return "default";
}
        </pre>

        <h4>Loop Compounds</h4>
        <h5>map()</h5>
        <pre class="pre">
array_map(function($number) {
    return $number * 10;
}, [1, 2, 3]); # [10, 20, 30]
            </pre>

        <h5>filter()</h5>
        <pre class="pre">
array_filter([1, 2, 3], function($number) {
    return $number > 2;
}); # [3]
        </pre>

        <h5>reduce()</h5>
        <pre class="pre">
array_reduce([1, 2, 3], function($prev, $next) {
    return $prev + $next;
}); # 6
        </pre>

        <h5>array_search() (JS indexOf)</h5>
        <pre class="pre">
array_search('a', ['a','b','c']); # 0
        </pre>
      </div>
    </div>

    <h2>Advanced</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Code Quality</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Coding Style</h4>
            <a class="link" target="_blank" href="https://www.php-fig.org/psr/psr-12/">PSR 12</a>

            <h4>Comments</h4>
            <pre class="pre">
# Single line
// Single line
/* Multiple lines */
            </pre>

            <h4>Packages</h4>
            <a class="link" target="_blank" href="https://packagist.org/">Packagist - Package Repository</a>
            <a class="link" target="_blank" href="https://getcomposer.org/">Composer - Dependency Manager</a>
          </div>
        </div>

        <h3>OOP</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Classes</h4>
            <pre class="pre">
class MoneyMachine extends stdClass {
    private $CURRENCY = "$";

    public function __construct() {
        $this->profit = 0;
    }

    public function add($money) {
        $this->profit += $money;
    }

    public function report() {
        echo "Money: {$this->CURRENCY}{$this->profit}";
    }
}

$machine = new MoneyMachine();
$machine->add(10);
$machine->report();
            </pre>
          </div>
        </div>

        <h4>Modules</h4>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
namespace App\Http\Controllers\Api;
use App\Team;
            </pre>
          </div>
        </div>

        <h4>Error Handling</h4>

        <h5>1. Create custom exception</h5>
        <pre class="pre">
class Exception implements Throwable {}
        </pre>

        <h5>2. Raise exception given condition</h5>
        <pre class="pre">
function checkNum($number) {
  if ($number > 1) {
    throw new Exception("Value must be 1 or below");
  }
  return true;
}
        </pre>

        <h5>3. Handle exception</h5>
        <pre class="pre">
try {
  checkNum(10)
} catch (Exception $e) {
  print_r($e);
} finally {
  echo "The end";
}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Types</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Array</h4>

            <h5>CRUD</h5>
            <pre class="pre">
$arr = ["one", "two"]    # C
$arr[0]                  # R # get value
array_search('', $arr)   # R # get key
array_unshift($arr,'ok') # U # add el as first
$arr[] = 'ok'            # U # add el as last
$arr[0] = "new"          # U # update value
unset($arr[0])           # D #
            </pre>

            <h5>Slicing</h5>
            <pre class="pre">
$arr = [0,1,2,3,4,5];
array_slice($arr, 2); # [2,3,4,5]
array_slice($arr, -1); # [4,5]
array_slice($arr, 0, 3); # [0,1,2]
            </pre>

            <h5>Merging</h5>
            <pre class="pre">
array_merge([0,1,2],[3,4,5]) # [0,1,2,3,4,5]
            </pre>

            <h5>Extra</h5>
            <pre class="pre">
sizeof(["one","two"]) # length: 2
in_array(1, [0,1,2])  # value exists
            </pre>

            <h4>Int / Float</h4>
            <pre class="pre">
array_sum([1,2,3]) # 6
round(1.2)         # 1
rand(0, 10)        # random number
            </pre>

            <h4>String</h4>
            <pre class="pre">
"Hello" . "World"          # Hello World
"My name is {$name}"       # f-String
trim(" string ")           # string # trimming
str_split("string")        # ['s', 't', 'r']
str_replace('r','a',"str") # sta
strtolower("UPPER")        # upper
strtoupper("lower")        # LOWER
            </pre>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Types</h3>

        <div class="row">
          <div class="col-sm-12">
            <h3>Extra </h3>

            <h4>Date</h4>
            <pre class="pre">
$now = date("Y-m-d H:i:s");
$date = date("Y-m-d h:i:sa", strtotime("10:30pm April 15 2020"));
            </pre>
            <a class="link" target="_blank" href="https://www.w3schools.com/python/python_datetime.asp">Date Format</a>

            <h4>JSON</h4>
            <pre class="pre">
json_encode(['a'=>'b'])  # "{"a":"b"}"
json_decode("{"a":"b"}") # ['a'=>'b']
            </pre>

            <h4>RegEx</h4>

            <h5>Exists</h5>
            <pre class="pre">
preg_match("ain", "The rain in Spain") # true
            </pre>

            <h5>Length</h5>
            <pre class="pre">
preg_match_all("ain", "The rain in Spain") # 2
            </pre>

            <h5>Replace</h5>
            <pre class="pre">
preg_replace("ain", "ow", "The rain in Spain")
# The row in Spow
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
