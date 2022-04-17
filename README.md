# Project Name: Shipments
### Author: Hans-Märten Liiu
</br>

Main Idea:
-------------

Load shipments data with AJAX from https://my.api.mockaroo.com/shipments.json?key=5e0b62d0 or Shipments file
Display data in generated table (see attachment ShipmentsTable.png as example) 
Provide a button in the table to open a panel to visualize details of single row (see attachment ShipmentsDetails.png as example) 

## Application functional details:
* You can see shipment listings
* You can sort in the shipment listing by ascending and descending
* You can remove shipment listing
* You can update shipment listing data

</br>

## What can be improved on:
* Proably make the design more beautiful, but mostly I focused on functionality.
* Currently everytime you refresh by using F5 or refresh button the application reads data again from the txt file. I solved it like this, because I don't have Database where to send the changes and then read them from there again. Currently on refresh it loads data with axios into Redux and every time you interact with website it updates Redux.

</br>

## How to boot the application:
* Open CMD, then cd into the folder where you can see src and public folder. After that you have to enter command: npm install. When npm install is finished you can launch the application with npm start.

</br>

## Images of the application
* Main Page
![Source code](pictures/Home.PNG)
* Update page
![Source code](pictures/DetailedView.PNG)
</br>


