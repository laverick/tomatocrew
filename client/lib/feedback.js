// https://github.com/spektom/bootstrap-feedback-form

Template.feedback.events({
  'submit form': function(event, template) {
    event.preventDefault();
    console.log("Feedback submitted");

    //var email = template.$('#feedback-email').val();
    var email = Meteor.user().emails[0].address;
    var body = template.$('#feedback-body').val();

    Meteor.call('sendFeedbackEmail', email, body, function() {
      $("#feedback-form").toggle("slide").find("textarea").val('');
    });
  },
  'click #feedback-tab': function(){
    $("#feedback-form").toggle("slide");
  }
});

