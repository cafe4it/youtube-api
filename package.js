Package.describe({
  summary: "YouTube API v3 for Meteor"
});

Npm.depends({"youtube-api" : "0.2.2"});

Package.on_use(function (api, where) {
  api.add_files('youtube-api.js', ['server']);
  if (typeof api.export !== 'undefined') {
    api.export(['YoutubeApi'], ['server']);
  }
});