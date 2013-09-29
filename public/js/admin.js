define(['humane', 'easypiechart'], function(humane) {
  console.log('Loading admin page.');

  /**
   * Disk usage circle
   */
  $('.chart').easyPieChart({
    size: 80,
    animate: 800,
    onStep: function(value) {
      this.$el.find('span').text(~~value);
    }
  });

  /**
   * Delete user confirmation alert
   */
  $('#delete-btn').click(function() {
    var answer = confirm('Are you sure you want to delete the user?');
    var user = $(this).data('user');

    if (answer) {
      $.ajax({
        url: '/admin/users/' + user,
        type: 'DELETE',
        success: function(result) {
          console.log(result);
        }
      });
    }
  });

  /**
   * Manage quota prompt
   */
  $('#quota-btn').click(function() {
    var currentQuota = $(this).data('quota');
    var newQuota = prompt('Manage User Disk Quota (bytes):', currentQuota);
    var user = $(this).data('user');
    if (!newQuota) {
      return false;
    }
    $.ajax({
      url: '/admin/users/' + user,
      type: 'PUT',
      data: { newQuota: newQuota },
      success: function(result) {
        humane.log(result);
      }
    });
  });
});