# https://devjavu.space/post/using-web-workers-vue-applications/
Countdown timer is a long-running process.
We’ll delegate it to our web worker 
    and trigger a method on our main thread to fetch a random dog image from API 
    when our counter value is divisible by 10. 