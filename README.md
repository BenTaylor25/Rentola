# Rentola

Rentola is a simple Inventory management system.  
Frontend: React, TypeScript.  
Backend: .NET 7, C#.


## Overview
An Item has a unique name and a quantity.  
You can create an Item with a given quantity, get an Item via its unique name,
increment or decrement the quantity of an Item by a given amount, and delete an existing Item.

Item names must be between 3 and 25 characters.  
Item quantities must be between 1 and 10,000.

Decrementing an Item's quantity to 0 will result in its deletion.
