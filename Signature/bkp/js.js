function validform() {

        var a = document.forms["my-form"]["full_name"].value;
        var b = document.forms["my-form"]["user_designation"].value;
        var c = document.forms["my-form"]["tel_number"].value;
        var d = document.forms["my-form"]["desk_number"].value;
        var e = document.forms["my-form"]["mobile_number"].value;
		var f = document.forms["my-form"]["email_address"].value;
		var g = document.forms["my-form"]["address"].value;
		var loc=document.forms["my-form"]["location"].options[document.forms["my-form"]["location"].selectedIndex].value;

        if (a==null || a=="")
        {
            alert("Please Enter Your Full Name");
            return false;
        }else if (b==null || b=="")
        {
            alert("Please Enter Your Designation");
            return false;
        }else if (c==null || c=="")
        {
            alert("Please Enter Your Telephone Number");
            return false;
        }else if (d==null || d=="")
        {
            alert("Please Enter Your Desk Number");
            return false;
        }else if (e==null || e=="")
        {
            alert("Please Enter Your Mobile Number");
            return false;
        }
		else if (f==null || f=="")
        {
            alert("Please Enter Your E-Mail Address");
            return false;
        }
		else if(loc=="2" && (g==null || g==""))
		{
		    alert("Please Enter Your Office Address");
            return false; 	  
			
		}

    }// JavaScript Document