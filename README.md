# Rentola

Rentola is a simple non-practical Inventory management system.  
Frontend: React, TypeScript.  
Backend: .NET 7, C#.

This is my first C# Web API, and its purpose is to give me experience
working with a full application. Some of the decisions made don't
make sense for a practical application.


## Overview
An Item has a unique name and a quantity.  
You can create an Item with a given quantity, get an Item via its unique name,
increment or decrement the quantity of an Item, and delete an existing Item.

Item names must be between 3 and 25 characters.  
Item quantities must be between 1 and 10,000.

Decrementing an Item's quantity to 0 will result in its deletion.

When you refresh the page,
all of the Items you have created will disappear from the view.
They still exist on the server however, so you can search for them.

In a real application you would probably like to be able to retreive
all Items from the server, but that would be a pretty straight-forward
change, and I think the project is more interesting when you handle
one at a time.

See `gallery.md` to see screenshots of how the application behaves.


## Run Yourself

Requirements:
- git
- dotnet CLI
- npm

### Clone the project.

`git clone https://github.com/BenTaylor25/Rentola.git`
`cd Rentola`

### Backend

from /Rentola
`cd Rentola` (Rentola/Rentola)
`dotnet run`

### Frontend

from /Rentola
`cd rentola-ui`
`npm i`
`npm run dev`

### Browser

Now open a browser and go to `localhost:5173`
