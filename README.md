video-watching-App walkthrough : https://www.awesomescreenshot.com/video/5662877?key=3b6599cf8da13fd9910d2ba10a7795b6

Video-Watching-App Demo URL : https://multi-media-player285.web.app/

Video-Watching-App(YouTube Clone) is a React app, where the user can accesss and watch any Youtube videos of any Youtube channel. Here the user first need to login using gmail account to access the app. 

Here user can watch whatever video he likes. Videos are categorized based on interest. Here user can search for youtube channels , can view the vidoeList and watch those videos.

 User can exit the app by clicking on log-out button on the side-bar. 

it's build using : 

* Front-end : react-js, react-router-dom. redux-devtools-extension, react-infinite-scroll-component, react-loading-skeleton, react-show-more-text
* styling is done using packages : Sass, bootstrap and react-bootstrap. Icons are got through react-icons package.
* Gmail authentication is done using firebase auth. 
* Firebase database is used to store user's authentication details : name & email. 
* Data for youtube clone built is got through Youtube API V3 (https://developers.google.com/youtube/v3/docs) through API links. It is accessed through axios package. 
* lazy-loading is done using packages : react-lazy-load-image-component, react-loading-skeleton.
* axios calls are made both to get data and post comments on the videos. 

It's main features : 

1. User authentication via Gmail using firebase auth using firebase package. 
2. Once logged in, user is directed to home page, where the vidoes with most likes are shown. 
3. Lazy loading the contents on render & re-rendering. Bank black space is shown on video thumbnails areas if data not available for those videos. 
4. User can then click on horizontal scroll-able categories buttons, to show filtered videos based on button names.
5. User can click on any of the videos and can watch it. User can see description of the video in the description section. 
6. User can also see top 15 comments in the comment section. User can also comment on videos, which will appear after 2 seconds.
7. In the same above screen, user can see related videos on the right side and can also watch it. 
8. In the search bar, user can search for desired Youtube channel. And can then click on that channel to view list of all the videos of that channel (shown in app walkthrough).
9. Sign-out is done using firebase auth functionality (auth.signOut())
