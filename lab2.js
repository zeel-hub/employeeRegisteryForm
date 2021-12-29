/*
    Assignment by: Zeel K Patel, 000824838
    I, Zeel Patel, student number 000824838, certify that this material is my original work. No other person's work has been used without due acknowledgment and I have not made my work available to anyone else.
*/
$(document).ready(function () {

    // to verify user input in runtime
    $('#name').keyup(function () {
        let username = $('#name').val()
        if (username == '') {
            $('#name').removeClass().addClass('form-control')
            $('#name-feedback').removeClass().html('')
        }
        // sending post request to php file for backend verification.
        $.post('lab-a.php', { name: username }, function (name) 
        {
            switch(name) {
                case '1':
                    $('#name').removeClass().addClass('form-control is-invalid')
                    $('#name-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Employee name must be between 5-20 characters in length.')
                    $('#button').prop('disabled', true)
                    break
                case '2':
                    $('#name').removeClass().addClass('form-control is-invalid')
                    $('#name-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Employee name must be between 5-20 characters in length.')
                    $('#button').prop('disabled', true)
                    break
                case '3':
                    $('#name').removeClass().addClass('form-control is-invalid')
                    $('#name-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html("Employee name cannot contain digits.")
                    $('#button').prop('disabled', true)
                    break
                case '4':
                    console.log("HELLOOOO")
                    $('#name').removeClass().addClass('form-control')
                    $('#name-feedback').removeClass()
                    $('#button').prop('disabled', true)
                    break
                case '5':
                    $('#name').removeClass().addClass('form-control is-valid')
                    $('#button').prop('disabled', false)
                    break
                default:
            }
        })
    })

    // to verify user input in runtime
    $('#employeeId').keyup(function () {
        let employee = $('#employeeId').val()
        if (employee == '') {
            $('#employeeId').removeClass().addClass('form-control')
            $('#employeeId-feedback').removeClass().html('')
        }
        // sending post request to php file for backend verification.
        $.post('lab-b.php', { employeeId: employee}, function (employeeId) 
        {
            switch(employeeId) {
                case '1':
                    $('#employeeId').removeClass().addClass('form-control is-invalid')
                    $('#employeeId-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Employee ID must be 9 digits in length.')
                    $('#button').prop('disabled', true)
                    break
                case '2':
                    $('#employeeId').removeClass().addClass('form-control is-invalid')
                    $('#employeeId-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Employee ID must only contain digits.')
                    $('#button').prop('disabled', true)
                    break
                case '3':
                $('#employeeId').removeClass().addClass('form-control is-invalid')
                $('#employeeId-feedback')
                    .removeClass()
                    .addClass('invalid-feedback')
                    .html('Employee ID must only contain digits.')
                $('#button').prop('disabled', true)
                break
                case '4':
                    $('#employeeId').removeClass().addClass('form-control is-valid')
                    $('#button').prop('disabled', false)
                    break
                default:
            }
        })
    })

    // to verify user input in runtime
    $('#department').keyup(function () {
        let dept = $('#department').val()
        if (dept == '') {
            $('#department').removeClass().addClass('form-control')
            $('#department-feedback').removeClass().html('')
        }
        // sending post request to php file for backend verification.
        $.post('lab-c.php', { department: dept}, function (department) 
        {
            switch(department) {
                case '1':
                    $('#department').removeClass().addClass('form-control is-invalid')
                    $('#department-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Advertising is not a valid department.')
                    $('#bonus').val('').prop('readonly', true)
                    $('#button').prop('disabled', true)
                    break
                case '2':
                    $('#bonus').prop('readonly', false)
                    $('#button').prop('disabled', false)
                    $('#bonus').removeClass().addClass('form-control')
                    $('#bonus-feedback').removeClass().html('')
                    break
                case '3':
                    $('#department').removeClass().addClass('form-control is-valid')
                    $('#bonus').val('').prop('readonly', true)
                    $('#button').prop('disabled', false)
                    $('#bonus').removeClass().addClass('form-control')
                    $('#bonus-feedback').removeClass().html('')
                    break
                default:
            }
        })
    })

    // to verify user input in runtime
    $('#bonus').keyup(function () {
        let b = $('#bonus').val()
        if (b == '') {
            $('#bonus').removeClass().addClass('form-control')
            $('#bonus-feedback').removeClass().html('')
        }
        // sending post request to php file for backend verification.
        $.post('lab-d.php', { bonus: b}, function (bonus) 
        {
            switch(bonus) {
                case '1':
                    $('#bonus').removeClass().addClass('form-control is-invalid')
                    $('#bonus-feedback')
                        .removeClass()
                        .addClass('invalid-feedback')
                        .html('Bonus must only contain digits.')
                    $('#button').prop('disabled', true)
                    break
                case '2':
                    $('#bonus').removeClass().addClass('form-control is-valid')
                    $('#button').prop('disabled', false)
                    break
                default:
            }
        })
    })

    // submit button click
    $("#button").click(function() {
        // retrieving values from the form 
        let username = $('#name').val()
        let employee = $('#employeeId').val()
        let dept = $('#department').val()
        let bonus = $('#bonus').val()

        if (bonus == '') {
            bonus = "N/A"
        }

        let t = ""
        // checking if any input is null or not
        if (username != '' && employee != '' && dept != '') {
            console.log(username)

            if (dept == "Sales") {
                t += "<tr class='table-info'><td>" + username + "</td>"
                t += "<td>" + employee + "</td>"
                t += "<td>" + dept + "</td>"
                t += "<td>" + bonus + "</td></tr>"
                tableBody = $("table tbody")
                tableBody.append(t)
            } else if (dept == "HR") {
                t += "<tr class='table-warning'><td>" + username + "</td>"
                t += "<td>" + employee + "</td>"
                t += "<td>" + dept + "</td>"
                t += "<td>" + bonus + "</td></tr>"
                tableBody = $("table tbody")
                tableBody.append(t)
            } else {
                t += "<tr><td>" + username + "</td>"
                t += "<td>" + employee + "</td>"
                t += "<td>" + dept + "</td>"
                t += "<td>" + bonus + "</td></tr>"
                tableBody = $("table tbody")
                tableBody.append(t)
            }
        }
        
        // to set the form back to its original state
        $('#name').removeClass().addClass('form-control')
        $('#name-feedback').removeClass().html('')
        $('#employeeId').removeClass().addClass('form-control')
        $('#employeeId-feedback').removeClass().html('')
        $('#department').removeClass().addClass('form-control')
        $('#department-feedback').removeClass().html('')
        $('#bonus').removeClass().addClass('form-control')
        $('#bonus-feedback').removeClass().html('')
        $('#bonus').val('').prop('readonly', true)
        $('input[type=text]').each(function() {
            $(this).val('')
        })
        $('input[type=number]').each(function() {
            $(this).val('')
        })
    })
})