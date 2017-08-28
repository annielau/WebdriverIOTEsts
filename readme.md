WebDriverIOTests
by Ana Milesi

Steps to run the tests locally: 
1- Clone or download the repository from https://github.com/annielau/WebdriverIOTEsts
2- Place it C:/
3- Start Selenium selenium-standalone start # start selenium
4- Open a cmd, go to C:/WebdriverIOTEsts, enter npm test.
5- It should open 2 Chrome browsers and run the tests.

Some issues that I had to deal with:
1- I spent a few time in order to learn how WebdriverUI works. But It was no too much.
2- Firstly I tried to use Cucumber framework because I'm more familiarized than with Mocha.
But I had a lot of issues setting my enviroment (issues with Java, node-gyp). I spent a few time trying to do it works but I couldn't so I decided to do it with Mocha.
3- I also had a few issues with timeouts, wait to load controls, etc
4- I couldn't implement a Custom Report, I had issues trying to implement it. So I decided to leave it and use Spec reporter.

Another thing, I found a WebdriverUI bug :)
A typo in "depcrecated" word in the following warning:
WARNING: the "keys" command will be depcrecated soon. Please use a different command in order to avoid failures in your test after updating WebdriverIO.