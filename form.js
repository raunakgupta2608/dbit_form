function validation()
{
        //surname
	if(document.dbitadm.surname.value=="")
        {
        	alert("Surname must be filled out");
		document.getElementByName("surname").focus();
                return false
	}

	var z=document.forms["dbitadm"]["surname"].value;

	if (! allLetter(z)) 
	{
		 alert("Surame should be all characters!!");
		 return false;
	}

	
	
	//first name	
        if(document.dbitadm.fname.value=="")
        {
                alert("Firstname must be filled out");
		document.getElementByName("fname").focus();
		return false
        }
	
	var y=document.forms["dbitadm"]["fname"].value;

`	if(!isNaN(y))
	{
		alert("First Name should be all characters");
		return false;
	}

	//father's name
        if(document.dbitadm.fatname.value=="")
        {
                alert("Father's Name must be filled out");
		document.getElementByName("fatname").focus();
                return false
        }

	var x=document.forms["dbitadm"]["fatname"].value;

`	if(!isNaN(x))
	{
		alert("Father's Name should be all characters");
		return false;
	}

	//mother's name
        if(document.dbitadm.mname.value=="")
        {
                alert("Mother's Name must be filled out");
		document.getElementByName("mname").focus();
                return false
        }

	var g=document.forms["dbitadm"]["mname"].value;

`	if(!isNaN(g))
	{
		alert("Mother's Name should be all characters");
		return false;
	}
	
	//dob
	if(document.dbitadm.dob.value=="")
	{
		alert("Please Enter Your Date Of Birth");
		document.getElementByName("dob").focus();
		return false
	}
	
	//gender
	if(document.dbitadm.gender.value=="")
	{
		alert("Please select your Gender");
		document.getElementByName("gender").focus();
		return false
	}

	//nationality
        if(document.dbitadm.nationality.value=="")
        {
                alert("Nationality must be filled out");
		document.getElementByName("nationality").focus();
                return false
        }

	//domicile
        if(document.dbitadm.dom.value=="")
        {
                alert("Domicile must be filled out");
                return false
        }

	//religion
        if(document.dbitadm.religion.value=="")
        {
                alert("Religion must be filled out");
		document.getElementByName("religion").focus();
                return false
        }

	//category
        if(document.dbitadm.cat.value=="")
        {
                alert("Category must be filled out");
                return false
        }

	//contact
        if(document.dbitadm.num.value=="")
        {
                alert("Please fill up your contact no");
		document.getElementByName("num").focus();
                return false
        }
	if(document.dbitadm.num.value.length!=10)
	{
		alert("Please Enter A Valid 10 Digit Phone/Mobile No");
		document.getElementByName("num").focus();
		return false
	}

	//email-Id
	if(document.dbitadm.email.value=="")
	{
		alert("Please Fill Up your EmailId");
		document.getElementByName("email").focus();
		return false
	}
	
	//last exam passed
        if(document.dbitadm.laexpass.value=="")
        {
                alert("Last Exam Passed must be filled out");
		document.getElementByName("laexpass").focus();
                return false
        }

	//image
        if(document.dbitadm.img.value=="")
        {
                alert("Please Upload a Photo");
		document.getElementByName("img").focus();
                return false
        }

	//textarea
         if(document.dbitadm.textarea.value=="")
        {
                alert("Please fill up your local address");
		document.getElementByName("textarea").focus();
                return false
        }
	
	//city
         if(document.dbitadm.city.value=="")
        {
                alert("City must be filled out");
		document.getElementByName("city").focus();
                return false
        }

	//pincode
         if(document.dbitadm.pincode.value=="")
        {
                alert("Please fill up your Pincode");
		document.getElementByName("pincode").focus();	
                return false
        }

	//mobno
         if(document.dbitadm.mobno.value=="")
        {
                alert("Please fill up your Contact No");
		document.getElementByName("mobno").focus();
                return false
        }
		
        
}


            function allLetter(inputtxt)
                {
                 var letters = /^[A-Za-z]+$/;
                 if(inputtxt.value.match(letters))
                   {
              	     return true;
                   }
                 else
                   {
              	     return false;
                   }
                }




