# Simplified Pug

Pug is the templating language that I like the most, but I think the way it's done is not the best. My goal here is to clean up everything and add some features that are useful. In this document I'll compile all the changes made to the project and why.

## 1. Removing everything unnecessary

At this point the project pulls 677 packages from the registry, I'll try to reduce that number as much as possible.

One of the main things that I don't like about the architecture of the project is having multiple packages by themselves, while I'm sure the devs had a good reason for this I prefer to have minimum fragmentation and have everything as integrated as possible. The first step is to turn the Pug related packages into simple modules.
