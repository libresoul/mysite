---
title: Regex — The (Love|Hate) relationship
date: 2024-11-03 15:00:00
layout: post
lang: en
tags: [tech, regex]
cover-img: ["../images/pattern_regex-the-love-hate-relationship.webp", "Photo by [Jonny Fox](https://medium.com/@jonny.fox) on [Medium](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)"]
---

Back again sitting on my butt pillow after doing a terrible [form
validation](https://github.com/libresoul/form-validation) for one of my
assignments. I am telling it is terrible not only because it's code smelling,
it's because I wanted to show off that I know regex\
(yes, it went bad).

First of all Regular Expressions or commonly known as Regex *(reh·jeks)* is a
sequence of characters which are used for search patterns. Regex is widely
supported on modern programming languages like Python, JavaScript, Ruby and
even SQL supports it OOTB. Doesn't sound bad right? Wait for it. When it comes
to regex there are two groups. You either absolutely love regex or you want to
pull your hair seeing regex in the codebase that your frenemies wrote. Why though?

Regex can be quite complicated cause it uses shit ton of keywords and flags.
Have a look at the following.

```
^(?! )[a-zA-Z0-9]*(?:[._-](?! )[a-zA-Z0-9]+)*(?<! )$|^.{3,25}$
```

First time? :3\
Well that was a ridiculously complex pattern though there can be some\
occasions when you have to deal with long ass patterns.

Not only regex can be unbearably complex (if you suffer from skill issues),
what if you have fat fingered one of the characters or even forgot to include
one. That's actually what happened to me.

```javascript
const nameRegex = /^[A-Za-z]+(\s[a-z]+)?$/;
const emailRegex =
/^([A-Za-z])+[0-9]*(\.[A-Za-z0-9]+)*\@[A-Za-z]+\.[A-Za-z]{2,}$/;
const ageRegex = /^[0-9]{1,2}$/;
```

I Had the above lines to validate name, email and age that user inputs to the
form. You can figure out right away what was the issue is comparing what's
different in those two square brackets which is in the name pattern. Yes, it
should have been ```^[A-Za-z]+(\s[A-Za-z]+)?$``` instead of what I have written
in the last few minutes before the deadline. Means now it only accepts names
where the second name starts with a lowercase letter. 

![form-result](/images/form_result-the-love-hate-relationship.webp) 

Well now you know why. Well you may thing it's just me, wrong! XD
Russian Government, Cisco, Cloudflare, AWS and even Google were victims of fat\
fingering regex. [More on here](https://regexlicensing.org/incident/).

## How does Regex actually work

Regex operates by matching patterns in a string of words. The pattern is made
of special characters called *metacharacters*.

- `.` - Any character
- `[]` - Range of characters
- `*` - Zero or more occurrences
- `+` - One or more occurrences
- `\|` - Alternations
- `?` - Optional characters
- `\w` - alphanumeric characters
- `\W` - Non-alphanumeric characters
- `\s` - Whitespaces
- `\S` - Non-whitespaces
- `\d` - Digits

While those being the basic regular expressions, *grouping, workarounds,\
asserting* are considered as extended regular expressions. If you wanna learn
Regex with zero amount of nonsense, try [regexlearn](https://regexlearn.com). 

Apart from being complicated and error-prone, Regex have another\
problematic feature or an issue in this case known as *Greedy matching*.

![Greedy matching illustration](/images/greedy_matching_illustration_regex-the-love-hate-relationship.webp)
*Photo on [formulashq](https://formulashq.com/greedy-match-regular-expressions-regex-explained/)*

As the name implies, regex tries to matches much as possible leading to
overmatching a set of strings nonetheless the pattern.

![Greedy matching demo](/images/greedy_matching_demo_regex-the-love-hate-relationship.webp
) 

Well here there's my useless opinion about Regex, and I encourage each and
everyone of you to learn regex but don't use them unless you have to. If you
have to, make sure to test them 20 or more times before you casually push it to
production on Friday. :3

> Now the [title](#) make sense right?
