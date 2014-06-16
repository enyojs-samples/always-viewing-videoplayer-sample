Sample App: Always Viewing VideoPlayer
=========

This is an application template sample for showing long form video.  Content providers are expected to return an array of video categories from a Web service.  See ***mock/data.json*** for an example.

Without customization, this application is best viewed on large screens, such as a desktop browser or LG webOS Smart TV.

## Quick-Start

### Changing the Default Panel
Sample.AlwaysViewingVideo.Panel is defined in ***source/views/custom/Panel.js***.

### Customizing
#### Your Data Collection
Set the URL of the Sample.AlwaysViewingVideo.CategoryCollection found in ***source/apps.js***.  Modify its *parse()* method to match your what your back-end outputs in ***source/data/data.js***.  Unchanged, this kind is essentially a "Collection of Collections" built from mock data.

#### Your Data Models
For the video models, look in ***source/data/data.js*** and change the *parse()* method to fit the data that returns from your web service.  Be sure to read the comments for what properties the template expects.

#### Your List Items
The category and video list items are independent from one another and can be modified to suit the application's needs.  The template/default items are defined in ***source/views/custom/CategoryListItem.js*** and ***source/views/custom/VideoListItem.js***.  Various list item styles are in ***source/style/main.less***.
