Lifeboat
=========

This is an application template for long form video.  Currently, content providers (CPs) are expected to return an array of video categories from a Web service.  See ***source/mock/data.json*** for an example.

## Quick-Start

### Changing Application Information
In ***appinfo.json*** you must change the **id** property to a unique value.  Convention holds with reverse domain name notation.

### Changing the Default Panel
Lifeboat.Panel is defined in ***source/views/custom/Panel.js***.

### Using Mock Data
Specify in ***source/start.js*** or otherwise set the **mockData** property of the application object to *true* or *false*.

### Customizing
#### Your Web Service
Set the URL of your Web service in the declaration found in ***source/app/apps.js***.  Specify any query parameters in its *populateCategories()* method.

The *processData()* method handles re-structuring the initial Web service response into the "Collection of Collections" data structure around which the application template is designed.

#### Your Data
For the video models, look in ***source/models/models.js*** and change the *parse()* method to fit the data that returns from your web service.  Be sure to read the comments for what properties the template expects.

#### Your List Items
The category and video list items are independent from one another and can be modified to suit the CP's needs.  The template/default items are defined in ***source/views/custom/CategoryListItem.js*** and ***source/views/custom/VideoListItem.js***.  Various list item styles are in ***source/style/main.css***.
