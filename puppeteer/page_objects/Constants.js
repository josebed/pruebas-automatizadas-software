module.exports = {
  Setup: {
    Inputs: {
      title: "blog-title",
      name: "name",
      email: "email",
      password: "password",
    },
    Links: {
      GhostAdmin: "#/dashboard/",
    },
  },
  Login: {
    Inputs: {
      Identification: "identification",
      Password: "password",
    },
  },
  CreatePost: {
    Links: {
      Posts: "ember26",
      NewPost: "#/editor/post/",
    },
    TextArea: {
      PostTitle: "ember169",
    },
    Divs: {
      Publish: "0",
    },
    Buttons: {
      Publish: "gh-btn gh-btn-black gh-btn-icon ember-view",
      PublishMenu:
        "gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view",
    },
  },
  EditPost: {
    Buttons: {
      Update:
        "gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view",
    },
  },
  DeletePost: {
    Buttons: {
      Settings: "Settings",
      DeletePost:
        "gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button",
      Delete: "gh-btn gh-btn-red gh-btn-icon ember-view",
    },
  },
};
