$(document).ready(function() {
  var values = {};
  var salaryArray = [];
  var salaryTotal = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      $.each($('#employeeinfo').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      })

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // add to list
      salaryTotal += Number(values.employeeSalary) / 12;
      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<p> Name: ' + empInfo.employeefirstname + ' '
      + empInfo.employeelastname + '<br>Employee ID: ' + empInfo.employeeID +
       '<br>Job Title: ' + empInfo.employeeJob + '<br>Employee Salary: '+ empInfo.employeeSalary +'</p>' +
      '<button class="employeeDestroy"> Remove Button </button>');

      $('#salaryTotal').text(salaryTotal);

      $('.person').last().data('salary', empInfo.employeeSalary);
    }

    $('#container').on('click', '.employeeDestroy', function(){
      salaryTotal -= $(this).parent().data('salary') / 12;
      $(this).parent().remove();
      $('#salaryTotal').text(salaryTotal);
    })
});
