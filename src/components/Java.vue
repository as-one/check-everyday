<template>
  <div class="container content">
    <h2>Basics</h2>

    <h3>Fundamentals</h3>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h4>Console</h4>
        <pre class="pre">
System.out.println("Hello world!");
            </pre>

        <h4>Variables</h4>
        <pre class="pre">
String string = "String";
final String STRING = "String";
            </pre>

        <h4>Data Types</h4>
        <pre class="pre">
string.getClass().getName() # get type
String    # ""
int       # 10    32-bit
long      # 10    64-bit
float     # 10.5  32-bit
double    # 10.5  64-bit
boolean   # true | false
array     # int[] nums = {1, 2}
object    # class MyClass { int age }
            </pre>

        <h4>Type Conversions</h4>
        <pre class="pre">
Integer.parseInt("10")
Float.parseFloat("10.5")
Boolean.parseBooleant("true")
String.valueOf(10)
"1,2".split(",") // String[]
            </pre>

        <h4>Static Type Analyzer</h4>
        <a class="link" target="_blank" href="https://www.sonarsource.com/products/sonarqube/">Sonarqube</a>
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

ternary = true ? "is true" : "is false";
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
accessModifier returnType methodName(params) {}
private String getString(String string) { return string; }

Int add = (a, b) -> a + b;

# kill process
System.exit();
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Loops</h4>

        <h5>for</h5>
        <pre class="pre">
for (int i = 0; i &lt;= 10; i++) {
  System.out.println(i);
}
        </pre>

        <h5>foreach</h5>
        <pre class="pre">
for (int number : numbers) {
  System.out.println(number);
}
        </pre>

        <h5>switch</h5>
        <pre>
switch (int val) {
  case 0: return "zero";
  case 1: return "one";
  default: return "default";
}
        </pre>

        <h4>Loop Compounds</h4>
        <h5>Map / Hashmap</h5>
        <pre class="pre">
Map&lt;String, Integer> scores = new HashMap&lt;>();
scores.put("John", 85);
scores.put("Alice", 92);
scores.put("Bob", 78);

for (Map.Entry&lt;String, Integer> entry : scores.entrySet()) {
    String key = entry.getKey();
    int score = entry.getValue();
    System.out.println(key + " scored: " + score);
}
            </pre>

        <h5>Filter</h5>
        <pre class="pre">
List&lt;Integer> numbers = new ArrayList&lt;>();
numbers.add(10);
numbers.add(20);
numbers.add(30);

List&lt;Integer> filteredNumbers = numbers.stream()
    .filter(number -> number >= 30)
    .collect(Collectors.toList());

System.out.println("Filtered Numbers: " + filteredNumbers);
        </pre>

        <h5>reduce()</h5>
        <pre class="pre">
List&lt;Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream().mapToInt(Integer::intValue).sum();
System.out.println("Sum: " + sum); // Output: Sum: 15
        </pre>

        <h5>Search</h5>
        <pre class="pre">
int[] numbers = {2, 5, 7, 8, 10};
int searchElement = 8;
int index = Arrays.binarySearch(numbers, searchElement);

////

int[] numbers = {2, 5, 8, 10, 7};
int searchElement = 8;
List&lt;Integer> numberList = Arrays.asList(numbers);
int index = numberList.indexOf(searchElement);
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
            <a class="link" target="_blank" href="https://www.oracle.com/java/technologies/javase/codeconventions-introduction.html">Oracle Code Conventions for the Java Programming Language</a>
            <a class="link" target="_blank" href="https://google.github.io/styleguide/javaguide.html">Google Java Style Guide</a>

            <h4>Comments</h4>
            <pre class="pre">
// Single line
/* Multiple lines */
/** Javadoc */
            </pre>

            <h4>Packages</h4>
            <a class="link" target="_blank" href="https://maven.apache.org/">Maven</a>
            <a class="link" target="_blank" href="https://gradle.org/">Gradle</a>
          </div>
        </div>

        <h3>OOP</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Classes</h4>
            <pre class="pre">
public class MoneyMachine {
    private final String CURRENCY = "$";
    private int profit;

    public MoneyMachine() {
        this.profit = 0;
    }

    public void add(int money) {
        this.profit += money;
    }

    public void report() {
        System.out.println("Money: " + CURRENCY + profit);
    }

    public static void main(String[] args) {
        MoneyMachine machine = new MoneyMachine();
        machine.add(10);
        machine.report();
    }
}
            </pre>
          </div>
        </div>

        <h4>Modules</h4>
        <div class="row">
          <div class="col-sm-12">
            <a class="link" target="_blank" href="https://www.php-fig.org/psr/psr-4/">PSR-4: Autoloader</a>
            <pre class="pre">
namespace java.app.http.controllers.api;
import App.Team;
            </pre>
          </div>
        </div>

        <h4>Error Handling</h4>

        <h5>1. Create custom exception</h5>
        <pre class="pre">
public class CustomCheckedException extends Exception {
    public CustomCheckedException(String message) {
        super(message);
    }
}
        </pre>

        <h5>2. Raise exception given condition</h5>
        <pre class="pre">
public static boolean checkNum(int number) throws CheckNumException {
    if (number > 1) {
        throw new CheckNumException("Value must be 1 or below");
    }
    return true;
}
        </pre>

        <h5>3. Handle exception</h5>
        <pre class="pre">
try {
  checkNum(10);
} catch (Exception e) {
  System.out.println(e);
} finally {
  System.out.println("The end");
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
import java.util.ArrayList;
import java.util.Arrays;

ArrayList&lt;String> arr = new ArrayList&lt;>(Arrays.asList("one", "two"));

// R # get value
String value = arr.get(0);
System.out.println("Get value: " + value);

// R # get key
int key = arr.indexOf("");
System.out.println("Get key: " + key);

// U # add el as first
arr.add(0, "ok");
System.out.println("Add element as first: " + arr);

// U # add el as last
arr.add("ok");
System.out.println("Add element as last: " + arr);

// U # update value
arr.set(0, "new");
System.out.println("Updated value: " + arr);

// D #
arr.remove(0);
System.out.println("After removing element at index 0: " + arr);
            </pre>

            <h5>Slicing</h5>
            <pre class="pre">
import java.util.Arrays;

int[] arr = {0, 1, 2, 3, 4, 5};

// [2,3,4,5]
int[] result1 = Arrays.copyOfRange(arr, 2, arr.length);
System.out.println(Arrays.toString(result1));

// # [4,5]
int[] result2 = Arrays.copyOfRange(arr, arr.length - 1, arr.length);
System.out.println(Arrays.toString(result2));

// # [0,1,2]
int[] result3 = Arrays.copyOfRange(arr, 0, 3);
System.out.println(Arrays.toString(result3));
            </pre>

            <h5>Merging</h5>
            <pre class="pre">
Integer[] array1 = {1, 2, 3};
Integer[] array2 = {4, 5, 6};

List&lt;Integer> list1 = new ArrayList&lt;>(Arrays.asList(array1));
List&lt;Integer> list2 = Arrays.asList(array2);

List&lt;Integer> mergedList = new ArrayList&lt;>(list1);
mergedList.addAll(list2);
            </pre>

            <h5>Extra</h5>
            <pre class="pre">
// length
String[] arr = {"one", "two"};
int size = arr.length;

// in array
int[] arr = {0, 1, 2};
int value = 1;
List&lt;Integer> list = Arrays.asList(arr);
boolean exists = list.contains(value);
            </pre>

            <h4>Int / Float</h4>
            <pre class="pre">
// array sum # 6
int[] arr = {1, 2, 3};
int sum = 0;
for (int num : arr) {
  sum += num;
}

// round number # 1
double numToRound = 1.2;
long roundedNum = Math.round(numToRound);

// random number
Random random = new Random();
int randomNumber = random.nextInt(11);
            </pre>

            <h4>String</h4>
            <pre class="pre">
"Hello" + "World"          # Hello World
" string ".trim()          # string # trimming

// split string
String str = "string";
char[] result4 = str.toCharArray();
System.out.println(Arrays.toString(result4));

"str".replace('r','a')     # sta
"UPPER".toLowerCase()      # upper
"lower".toUpperCase()      # LOWER
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
// now
LocalDateTime now = LocalDateTime.now();
DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String formattedNow = now.format(formatter1);

// date
String inputDate = "2020-04-15 10:30pm";
DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd h:mma");
LocalDateTime date = LocalDateTime.parse(inputDate, formatter2);
DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ssa");
String formattedDate = date.format(formatter3);
            </pre>

            <h4>JSON</h4>
            <pre class="pre">
import org.json.JSONObject;

// json_encode(['a'=>'b']) # "{"a":"b"}"
JSONObject jsonObject = new JSONObject();
jsonObject.put("a", "b");
String jsonString = jsonObject.toString();

// json_decode("{\"a\":\"b\"}") # ['a'=>'b']
String jsonString = "{\"a\":\"b\"}";
JSONObject jsonObject = new JSONObject(jsonString);
String value = jsonObject.getString("a");
            </pre>

            <h4>RegEx</h4>

            <h5>Exists</h5>
            <pre class="pre">
// preg_match("ain", "The rain in Spain") # true
String inputString = "The rain in Spain";
String patternString = "ain";

Pattern pattern = Pattern.compile(patternString);
Matcher matcher = pattern.matcher(inputString);

boolean matchFound = matcher.find();
System.out.println(matchFound);
            </pre>

            <h5>Length</h5>
            <pre class="pre">
// preg_match_all("ain", "The rain in Spain") # 2
String inputString = "The rain in Spain";
String patternString = "ain";

Pattern pattern = Pattern.compile(patternString);
Matcher matcher = pattern.matcher(inputString);

int matchCount = 0;
while (matcher.find()) {
    matchCount++;
}
            </pre>

            <h5>Replace</h5>
            <pre class="pre">
// preg_replace("ain", "ow", "The rain in Spain")
String inputString = "The rain in Spain";
String patternString = "ain";
String replacementString = "ow";

Pattern pattern = Pattern.compile(patternString);
Matcher matcher = pattern.matcher(inputString);

String replacedString = matcher.replaceAll(replacementString);
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
