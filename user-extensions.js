User.prototype.profile = function() {
    return Profile.collection.findOne({userId: this._id});
};