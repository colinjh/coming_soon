$(document).ready(function() {
  
}

function postToGoogle() {
            var field3 = $('#feed').val();

            $.ajax({
            url: "https://docs.google.com/forms/d/[key]/formResponse",
            data: {"entry.347455363": field3},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    //Success message
                },
                200: function() {
                    //Success Message
                }
            }
        });
        }
