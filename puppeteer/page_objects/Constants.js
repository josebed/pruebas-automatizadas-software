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
  CreatePage: {
    Links: {
      Pages: "#/pages/",
      NewPage: "#/editor/page/",
    },
    Divs: {
      Publish: "0",
    },
    Buttons: {
      PublishMenu:
        "gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view",
    },
  },
  EditPage: {
    Buttons: {
      Update:
        "gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view",
    },
  },
  DeletePage: {
    Buttons: {
      Settings: "Settings",
      DeletePage:
        "gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button",
      Delete: "gh-btn gh-btn-red gh-btn-icon ember-view",
    },
  },
  CreateTags: {
    Links: {
      Tags: "ember29",
      NewTag: "#/tags/new/",
    },
    Buttons: {
      Save: "gh-btn gh-btn-primary gh-btn-icon ember-view",
    },
    Inputs: {
      TagName: "tag-name",
    },
  },
  EditTag: {
    Inputs: {
      TagName: "tag-name",
    },
    Buttons: {
      Save: "gh-btn gh-btn-primary gh-btn-icon ember-view",
    },
  },
  DeleteTag: {
    Buttons: {
      Delete: "gh-btn gh-btn-red gh-btn-icon",
      ConfirmDelete: "gh-btn gh-btn-red gh-btn-icon ember-view",
    },
  },
};
