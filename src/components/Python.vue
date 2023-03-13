<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <h3>Fundamentals</h3>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <h4>Console</h4>
            <pre class="pre">
print("Hello world!")
name = input("Your name:")
            </pre>

            <h4>Variables</h4>
            <pre class="pre">
my_var = "My var"
MY_CONSTANT = ''
            </pre>

            <h4>Data Types</h4>
            <pre class="pre">
type()  # get type
string  # "" ''
int     # 10
float   # 10.5
bool    # True || False
list    # [1, 2] ordered, changeable, dupli
dict    # {'k1': 1} ordered, changeable, no dupli
tuple   # (1, 2) ordered, unchangeable, dupli
set     # {1, 2} unordered, unchangeable, no dupli
bytes   # b'string'
            </pre>

            <h4>Type Conversions</h4>
            <pre class="pre">
int()   # int(1.5) = 1
float() # float(10) = 10.0
bool()  # bool(10) = True # bool(0) = False
str()   # str(10) = '10'
list()  # list('str') = ['s', 't', 'r']
set()   # set('str') = {'s', 't', 'r'}
tuple() # tuple('str') = ('s', 't', 'r')
# can't convert to dict
            </pre>

            <h4>Static Type Analyzer</h4>
            <a style="display: block;" target="_blank" href="https://mypy-lang.org/">MyPy</a>
            <pre class="pre">
a: int = 10
def fib(n: int) -> Iterator[int]:
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Comparisons</h4>
            <pre class="pre">
==
&lt;=
&gt;=
!=
and
or
            </pre>

            <h4>Conditional</h4>
            <pre class="pre">
if 1 == 2:
elif 1 == 3:
else:

ternary = "is true" if True else "is false"
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
def name():
  pass

x = lambda a : a + 10 # x(5) = 15 # arrow fn

exit() # kill process
            </pre>

            <h4>*args **kwargs</h4>
            <pre class="pre">
# args   for list
# kwargs for dict

my_args = ["one", "two"]
my_kwargs = {"k1":"v1","k2":"v2"}

def args_kwargs(*args, **kwargs):
    print(args[0])
    print(kwargs.values())

args_kwargs(*my_args, **my_kwargs)
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Loops</h4>

            <h5>for..in</h5>
            <pre class="pre">
for n in range(3):
  print(n) # 0,1,2
            </pre>

            <h5>switch</h5>
            <pre>
{0:"zero", 1:"one"}.get(val, "default")
            </pre>

            <h4>Loop Arrays</h4>
            <h5>map()</h5>
            <pre class="pre">
numbers = [1, 2, 3, 4, 5]
def square(n):
    return n * 2
squared = map(square, numbers)
squared = map(lambda n: n * 2, numbers)
list(squared) # [2, 4, 6, 8, 10]
            </pre>

            <h5>filter()</h5>
            <pre class="pre">
numbers = [1, 2, 3, 4, 5]
filtered = []
def myFunc(x):
    if x == 3:
        return False
    return True
filtered = filter(myFunc, numbers)
filtered = filter(lambda x: False if x == 3 else True, numbers)
list(filtered) # [1,2,4,5]
            </pre>

            <h5>reduce()</h5>
            <pre>
from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = 0
def myFunc(prev, next):
    return prev + next
total = reduce(myFunc, numbers)
total = reduce(lambda x, y: x + y, numbers)
total # 15
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>Advanced</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Code Quality</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Coding Style</h4>
            <a style="display: block;" target="_blank" href="https://pep8.org/">PEP 8</a>

            <h4>Comments</h4>
            <pre class="pre">
# Single and multiple lines
            </pre>

            <h4>Packages</h4>
            <a style="display: block;" target="_blank" href="https://pypi.org/">PyPi - Package Index</a>
            <a style="display: block;" target="_blank" href="https://pypi.org/project/pip/">pip - Package Manager</a>
          </div>
        </div>

        <h3>OOP</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Classes</h4>
            <pre class="pre">
class MoneyMachine:
    CURRENCY = "$"

    def __init__(self):
        self.profit = 0

    def add(self, money):
        """Add to profit"""
        self.profit += money

    def report(self):
        """Prints the current profit"""
        print(f"Money: {self.CURRENCY}{self.profit}")

machine = MoneyMachine()
machine.add(10)
machine.report() # Money: $10
            </pre>
          </div>
        </div>

        <h4>Modules</h4>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
# export is default

import math             # import all # math.pi()
from math import *      # import all # pi()
from math import pi, m2 # import some # pi()

import math as m        # import alias # m.pi()
            </pre>
          </div>
        </div>

        <h4>Error Handling</h4>

        <h5>1. Create custom exception</h5>
        <pre class="pre">
class MyCustomException(Exception):
    """My Custom Exception"""
        </pre>

        <h5>2. Raise exception given condition</h5>
        <pre class="pre">
def my_function(x):
  if not type(x) is int:
    raise MyCustomException("Only integers")
        </pre>

        <h5>3. Handle exception</h5>
        <pre class="pre">
try:
  my_function("str")
except MyCustomException as e:
  print(str(e))
finally:
  print("The end")
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Types</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>List</h4>

            <h5>CRUD</h5>
            <pre class="pre">
list = ["one", "two"] # C
list[0]               # R # get value
list.index('one')     # R # get key
list.insert(0, 'ok')  # U # add el as first
list.append('ok')     # U # add el as last
list[0] = "new"       # U # update value
list.remove('one')    # D #
list.pop(0)           # D # list = ['two']
            </pre>

            <h5>Slicing</h5>
            <pre class="pre">
list2 = [0,1,2,3,4,5]
list2[2:]             # [2,3,4,5]
list2[:4]             # [0,1,2,3]
list2[::2]            # [0,2,4]
            </pre>

            <h5>Merging</h5>
            <pre class="pre">
list.extend(['three'])# ['one','two','three']
list += ['three']
            </pre>

            <h5>Extra</h5>
            <pre class="pre">
len(["one","two"])    # length: 2
list.count('one')     # 1
l2 = list.copy()
list.clear()          # []
list.sort()
list.reverse()
if 'one' in list:     # value exists
            </pre>

            <h5>List Comprehension</h5>
            <pre class="pre">
fruits = ["apple", "banana", "cherry"]
newlist = []

# this:
for x in fruits:
  if "a" in x:
    newlist.append(x)

# is the same as:
newlist = [x for x in fruits if "a" in x]
            </pre>

            <h4>Int / Float</h4>
            <pre class="pre">
sum([1,2,3])           # 6
round(1.2)             # 1
random.randint(0, 10)  # random number
            </pre>

            <h4>String</h4>
            <pre class="pre">
"Hello" + "World"      # Hello World
f"My name is {name}"   # f-String
{:.2f}".format(10)     # 10.00
"string"[2:5]          # rin
" string ".strip()     # string # trimming
"string".split('r')    # ['str','ing']
"str".split()          # ['s', 't', 'r']
"str".replace('r','a') # sta
"UPPER".lower()        # upper
"lower".upper()        # LOWER
            </pre>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Types</h3>

        <div class="row">
          <div class="col-sm-12">
            <h4>Dict</h4>

            <h5>CRUD</h5>
            <pre class="pre">
dict = {"k1": "v1"}      # C
dict['k1']               # R # get value
dict.get('k1')           # R # get value
dict.values()            # R # get all values
dict.keys()              # R # get all keys
dict.update({"k2":"v2"}) # U # add item
dict.update({"k1":"11"}) # U # update value
dict.pop("k1")           # D # dict = {"k2:"v2"}
dict.popitem()           # D # removes last item
            </pre>

            <h5>Slicing</h5>
            <pre class="pre">
# Slicing
# not possible
            </pre>

            <h5>Merging</h5>
            <pre class="pre">
dict.update({"k3":"v3"})
            </pre>

            <h5>Extra</h5>
            <pre class="pre">
len(dict)                 # length: 2
d2 = dict.copy()
dict.clear()              # {}
if 'k1' in dict:          # key exists
if 'v1' in dict.values(): # value exists
            </pre>

            <h3>Extra </h3>

            <h4>Date</h4>
            <pre class="pre">
import datetime
now = datetime.datetime.now()
x = datetime.datetime(2010, 1, 30)
x.strftime("%B") # January
            </pre>
            <a style="display: block;" target="_blank" href="https://www.w3schools.com/python/python_datetime.asp">Date Format</a>

            <h4>JSON</h4>
            <pre class="pre">
import json
my_json = json.loads('{"k1": "one"}')
my_json['k1'] # one
            </pre>

            <h4>RegEx</h4>

            <h5>Exists</h5>
            <pre class="pre">
import re
search = re.search("ain", "The rain in Spain")
bool(search) # True
            </pre>

            <h5>Length</h5>
            <pre class="pre">
import re
all = re.findall("ain", "The rain in Spain")
len(list(all)) # 2
            </pre>

            <h5>Replace</h5>
            <pre class="pre">
import re
sub = re.sub("ain", "ow", "The rain in Spain")
sub # The row in Spow
            </pre>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
