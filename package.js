Package.describe({
    name: "coniel:user-profile",
    summary: "An extensible model for a users profile",
    version: "0.0.1",
    git: "https://github.com/coniel/meteor-user-profile.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use([
        "coniel:user-model@0.0.1",
        "coniel:can@0.1.0",
        "coniel:base-model@0.3.0",
        "mdg:validated-method@1.0.1",
        "didericis:callpromise-mixin@0.0.1",
        "tunifight:loggedin-mixin@0.1.0",
        "ecmascript",
        "es5-shim"
    ]);

    api.addFiles(["profile-model.js", "user-extensions.js"]);

    api.export("Profile");
});