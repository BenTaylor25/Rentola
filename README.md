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
- dotnet CLI (.NET 7)
- npm
- node 16+

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


## Project Structure

In the root of the project we have 5 folders:
- `Docs`
  - Markdown files describing each of the API endpoints.
- `Rentola`
  - Backend C# project.
- `rentola-ui`
  - Frontend React+TypeScript project
- `Rentola.Contract`
  - Describes external request and response bodies.
    - I don't think this is really required.
- `Test`
  - Holds files for testing the Backend.
    - Used with
    <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">REST CLient</a>
    VSCode Extension.

### Rentola

- `Rentola`
  - `Controllers`
    - For API routes
    - `ItemController.cs`
      - Item API routes.
    - `RentolaControllaBase.cs`
      - Base class; handles error codes.
  - `Models`
    - `Item.cs`
      - Handles the creation of Item objects.
  - `ServiceErrors`
    - `Errors.Item.cs`
      - Holds error messages for service failures.
  - `Services`
    - Services hold business logic.
    - `Items`
      - `IItemService.cs`
        - Interface for Item services - allows different implementations of the same idea.
      - `ItemService.cs`
        - Item business logic.

### rentola-ui

- `rentola-ui`
  - `src`
    - `components`
      - `base`
        - Components shared across all pages like navbar, footer, etc.
        - `RentolaNav .tsx/.scss`
      - `NewItem`
        - Collection of components that regard creation of a new Item.
        - `NewItemButton .tsx/.scss`
        - `NewItemForm .tsx/.scss`
        - `NewItemModal .tsx/.scss`
      - `ErrorList .tsx/.scss`
      - `Item .tsx/.scss`
      - `ItemsContainer .tsx/.scss`
      - `SearchBar .tsx/.scss`
    - `App .tsx/.scss`
    - `errorMessages.ts`
    - `main.tsx / index.scss`
    - `routes.ts`


## Name

The name Rentola comes from a character in Mass Effect.

<a href="https://masseffect.fandom.com/wiki/Rentola">Commander Rentola</a>
is a merchant that you meet in a very important mission in the first game.
