const singled = document.querySelector('#single');
const bulked = document.querySelector('#bulk');

function single() {
    bulked.classList.add('inactive');
    singled.classList.remove('inactive');
}
function bulk() {
    singled.classList.add('inactive');
    bulked.classList.remove('inactive');
}
function down() {
    document.getElementById("text3_0").style.display = "none";
    document.getElementById("text3_1").style.display = "none";
    document.getElementById("text3_2").style.display = "none";
    document.getElementById("text3_3").style.display = "none";
    document.getElementById("text3_4").style.display = "none";
    document.getElementById("text3_5").style.display = "none";
    document.getElementById("text3_6").style.display = "none";
    document.getElementById("text3_7").style.display = "none";
    document.getElementById("text3_8").style.display = "none";
    document.getElementById("text3_9").style.display = "none";
    document.getElementById("text3_10").style.display = "none";
    document.getElementById("text3_11").style.display = "none";
    document.getElementById("text3_12").style.display = "none";
    document.getElementById("text3_13").style.display = "none";
    document.getElementById("text3_14").style.display = "none";
    document.getElementById("text3_15").style.display = "none";
    document.getElementById("text3_16").style.display = "none";
    document.getElementById("text3_17").style.display = "none";
    document.getElementById("text3_18").style.display = "none";
    document.getElementById("text3_19").style.display = "none";
    document.getElementById("text3_20").style.display = "none";
    document.getElementById("text3_21").style.display = "none";
    document.getElementById("text3_22").style.display = "none";
    document.getElementById("text3_23").style.display = "none";
    document.getElementById("hor1").style.display = "none";
    document.getElementById("hor2").style.display = "none";
    document.getElementById("hor3").style.display = "none";
    document.getElementById("dash_1").style.height = "80px";
}
function show() {
    document.getElementById("text3_0").style.display = "";
    document.getElementById("text3_1").style.display = "";
    document.getElementById("text3_2").style.display = "";
    document.getElementById("text3_3").style.display = "";
    document.getElementById("text3_4").style.display = "";
    document.getElementById("text3_5").style.display = "";
    document.getElementById("text3_6").style.display = "";
    document.getElementById("text3_7").style.display = "";
    document.getElementById("text3_8").style.display = "";
    document.getElementById("text3_9").style.display = "";
    document.getElementById("text3_10").style.display = "";
    document.getElementById("text3_11").style.display = "";
    document.getElementById("text3_12").style.display = "";
    document.getElementById("text3_13").style.display = "";
    document.getElementById("text3_14").style.display = "";
    document.getElementById("text3_15").style.display = "";
    document.getElementById("text3_16").style.display = "";
    document.getElementById("text3_17").style.display = "";
    document.getElementById("text3_18").style.display = "";
    document.getElementById("text3_19").style.display = "";
    document.getElementById("text3_20").style.display = "";
    document.getElementById("text3_21").style.display = "";
    document.getElementById("text3_22").style.display = "";
    document.getElementById("text3_23").style.display = "";
    document.getElementById("hor1").style.display = "";
    document.getElementById("hor2").style.display = "";
    document.getElementById("hor3").style.display = "";
    document.getElementById("dash_1").style.height = "";
}

function submit() {
    var email = document.getElementById("email").value;
    console.log(email);
    ValidateEmail(email);
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            // alert("Valid email address!");
            swal("Success!!", "Correct Email address has been entered", "success", {
                button: "Ok",
            });
            var list1 = [];
            submits();

            var n = 1;
            var x = 0;

            function submits() {
                var AddRown = document.getElementById('show');
                var NewRow = AddRown.insertRow(n);

                list1[x] = document.getElementById("email").value;

                var cel1 = NewRow.insertCell(0);

                cel1.innerHTML = list1[x];

                n++;
                x++;
            }
            return true;
        }
        else {
            // alert("You have entered an invalid email address!");
            swal("Warning!!", "Incorrect Email address has been entered", "warning", {
                button: "Ok",
            });
            return false;
        }
    }
}

function submitss() {
    var email = document.getElementById("emails").value;
    console.log(email);
    ValidateEmail(email);
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            // alert("Valid email address!");
            swal("Success!!", "Correct Email address has been entered", "success", {
                button: "Ok",
            });
            var list1 = [];
            submitsss();

            var n = 1;
            var x = 0;

            function submitsss() {
                var AddRown = document.getElementById('show');
                var NewRow = AddRown.insertRow(n);

                list1[x] = document.getElementById("emails").value;

                var cel1 = NewRow.insertCell(0);

                cel1.innerHTML = list1[x];

                n++;
                x++;
            }
            return true;
        }
        else {
            // alert("You have entered an invalid email address!");
            swal("Warning!!", "Incorrect Email address has been entered", "warning", {
                button: "Ok",
            });
            return false;
        }
    }
}