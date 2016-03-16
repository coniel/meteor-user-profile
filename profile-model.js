/**
 * Represents a Profile
 * @class Profile
 * @param {Object} document An object representing a users profile usually a Mongo document
 */
Profile = BaseModel.extendAndSetupCollection("profiles");

Profile.methods({
    user: function () {
        return Meteor.users.findOne({_id: this.userId});
    },
    /**
     * @summary The first and last name of the profile
     * @method fullName
     * @memberOf User
     * @returns {String} The first and last name of the profile
     */
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    /**
     * @summary The initials of the personal name of the user account
     * @method initials
     * @memberOf User
     * @params {Boolean} firstNameOnly Return the first name initials only
     * @returns {String} A name representation of the user account
     */
    initials: function (firstNameOnly) {

        if (!this.firstName)
            return "";

        var initials = this.firstName.split(' ').map(function (s) { return s.charAt(0); }).join('');

        if (!firstNameOnly) {
            initials += this.lastName.split(' ').map(function (s) { return s.charAt(0); }).join('');
        }

        return initials;
    }
});

//attach or append
Profile.appendSchema({
    "userId": {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function () {
            if (!this.value && this.isInsert) {
                return this.userId;
            }
        },
        index: 1,
        unique: true,
        denyUpdate: true
    }
});