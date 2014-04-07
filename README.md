Sample App: Always Viewing VideoPlayer
=========

This is an application template sample for showing long form video.  Content providers are expected to return an array of video categories from a Web service.  See ***mock/data.json*** for an example.

Without customization, this application is best viewed on large screens, such as a desktop browser or LG webOS Smart TV.

## Quick-Start

### Changing the Default Panel
Sample.AlwaysViewingVideo.Panel is defined in ***source/views/custom/Panel.js***.

### Using Mock Data
Set the **mockData** property of the application object to *true* or *false*.

### Customizing
#### Your Web Service
Set the URL of your Web service in the declaration found in ***source/apps.js***.  Specify any query parameters in its *populateCategories()* method.

The *processData()* method handles re-structuring the initial Web service response into the "Collection of Collections" data structure around which the application template is designed.

#### Your Data
For the video models, look in ***source/data/data.js*** and change the *parse()* method to fit the data that returns from your web service.  Be sure to read the comments for what properties the template expects.

#### Your List Items
The category and video list items are independent from one another and can be modified to suit the application's needs.  The template/default items are defined in ***source/views/custom/CategoryListItem.js*** and ***source/views/custom/VideoListItem.js***.  Various list item styles are in ***source/style/main.less***.
