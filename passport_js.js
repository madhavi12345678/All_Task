function check()
{

var radio1 = document.getElementById('radio-1');
var radio2 = document.getElementById('radio-2');

if(radio1.checked == true)
   {
    document.getElementById('radio-3').disabled = true;
    document.getElementById('radio-4').disabled = true;
    document.getElementById('radio-5').disabled = true;
    document.getElementById('radio-6').disabled = true;
    document.getElementById('radio-7').disabled = true;
    document.getElementById('radio-8').disabled = true;
    document.getElementById('check-1').disabled = true;
    document.getElementById('check-2').disabled = true;
    document.getElementById('check-3').disabled = true;
    document.getElementById('check-4').disabled = true;
    document.getElementById('check-5').disabled = true;
    document.getElementById('check-6').disabled = true;
    document.getElementById('check-7').disabled = true;
    document.getElementById('check-8').disabled = true;
    document.getElementById('check-9').disabled = true;
    document.getElementById('field_1_3').disabled = true;
    document.getElementById('field_6_1_1').disabled = true;
    document.getElementById('field_6_1_2').disabled = true;
    document.getElementById('field_6_1_3').disabled = true;
    document.getElementById('field_6_1_4').disabled = true;
    document.getElementById('field_6_2_1').disabled = true;
    document.getElementById('field_6_2_2').disabled = true;
    document.getElementById('field_6_2_3').disabled = true;
    document.getElementById('radio-52').disabled = true;
    document.getElementById('radio-53').disabled = true;
   }
   if(radio2.checked == true){
    document.getElementById('radio-3').disabled = false;
    document.getElementById('radio-4').disabled = false;
    document.getElementById('radio-5').disabled = false;
    document.getElementById('radio-6').disabled = false;
    document.getElementById('radio-7').disabled = false;
    document.getElementById('radio-8').disabled = false;
    document.getElementById('check-1').disabled = true;
    document.getElementById('check-2').disabled = true;
    document.getElementById('check-3').disabled = true;
    document.getElementById('check-4').disabled = true;
    document.getElementById('check-5').disabled = true;
    document.getElementById('check-6').disabled = true;
    document.getElementById('check-7').disabled = true;
    document.getElementById('check-8').disabled = true;
    document.getElementById('check-9').disabled = true;
    document.getElementById('field_1_3').disabled = true;
    document.getElementById('field_6_1_1').disabled = false;
    document.getElementById('field_6_1_2').disabled = false;
    document.getElementById('field_6_1_3').disabled = false;
    document.getElementById('field_6_1_4').disabled = false;
    document.getElementById('field_6_2_1').disabled = false;
    document.getElementById('field_6_2_2').disabled = false;
    document.getElementById('field_6_2_3').disabled = false;
    document.getElementById('radio-52').disabled = false;
    document.getElementById('radio-53').disabled = false;

    if(document.getElementById('radio-7').checked == true)
    {
    document.getElementById('check-1').disabled = false;
    document.getElementById('check-2').disabled = false;
    document.getElementById('check-3').disabled = false;
    document.getElementById('check-4').disabled = false;
    document.getElementById('check-5').disabled = false;
    document.getElementById('check-6').disabled = false;
    document.getElementById('check-7').disabled = false;
    document.getElementById('check-8').disabled = false;
    document.getElementById('check-9').disabled = false;
    document.getElementById('field_1_3').disabled = true;

    if(document.getElementById('check-9').checked)
    {
        document.getElementById('field_1_3').disabled = false;
    }
    else{
        document.getElementById('field_1_3').disabled = true;
    }
    }
    else{
    document.getElementById('check-1').disabled = true;
    document.getElementById('check-2').disabled = true;
    document.getElementById('check-3').disabled = true;
    document.getElementById('check-4').disabled = true;
    document.getElementById('check-5').disabled = true;
    document.getElementById('check-6').disabled = true;
    document.getElementById('check-7').disabled = true;
    document.getElementById('check-8').disabled = true;
    document.getElementById('check-9').disabled = true;
    document.getElementById('field_1_3').disabled = true;
    }

    if(document.getElementById('radio-52').checked == true)
    {
    document.getElementById('field_6_2_1').disabled = false;
    document.getElementById('field_6_2_2').disabled = false;
    document.getElementById('field_6_2_3').disabled = false;
    }
    if(document.getElementById('radio-53').checked == true)
    {
    document.getElementById('field_6_2_1').disabled = true;
    document.getElementById('field_6_2_2').disabled = true;
    document.getElementById('field_6_2_3').disabled = true;
    }
   }

if(document.getElementById('radio-31').checked == true)
{
    document.getElementById('field_2_12').disabled = false;
}  
else if(document.getElementById('radio-32').checked == true)
{
    document.getElementById('field_2_12').disabled = false;
} 
else if(document.getElementById('radio-30').checked == true)
{
    document.getElementById('field_2_12').disabled = false;
} 
else{
    document.getElementById('field_2_12').disabled = true;
}

if(document.getElementById('radio-india').checked == true)
{
    document.getElementById('field_2_5').disabled = false;
    document.getElementById('field_2_5_1').disabled = false;
    document.getElementById('field_2_5_2').disabled = false;
    document.getElementById('field_2_5_3').disabled = true;
}
if(document.getElementById('radio-outside').checked == true){
    document.getElementById('field_2_5').disabled = true;
    document.getElementById('field_2_5_1').disabled = true;
    document.getElementById('field_2_5_2').disabled = true;
    document.getElementById('field_2_5_3').disabled = false;
}

if(document.getElementById('radio-50').checked == true)
{
    document.getElementById('field_5_1').disabled = true;
    document.getElementById('field_5_2').disabled = true;
    document.getElementById('field_5_3').disabled = true;
    document.getElementById('field_5_4').disabled = true;
}
if(document.getElementById('radio-51').checked == true)
{
    document.getElementById('field_5_1').disabled = false;
    document.getElementById('field_5_2').disabled = false;
    document.getElementById('field_5_3').disabled = false;
    document.getElementById('field_5_4').disabled = false;
}

}

   
function validation(){
   var is_valid = false;
   var a_field = document.getElementById('a_field').value;
   var box_1 = document.getElementById('box_1').value;
   var box_2 = document.getElementById('box_2').value;
   var radio1 = document.getElementById('radio-1').value;
   var radio2 = document.getElementById('radio-2').value;
   var field_1_3 = document.getElementById('field_1_3').value;
   var field_2_1 = document.getElementById('field_2_1').value;
   var field_2_1_1 = document.getElementById('field_2_1_1').value;
   var field_2_4 = document.getElementById('field_2_4').value;
   var field_2_5 = document.getElementById('field_2_5').value;
   var field_2_5_1 = document.getElementById('field_2_5_1').value;
   var field_2_5_2 = document.getElementById('field_2_5_2').value;
   var field_2_5_3 = document.getElementById('field_2_5_3').value;
   var field_2_9 = document.getElementById('field_2_9').value;
   var field_2_10 = document.getElementById('field_2_10').value;
   var field_2_12 = document.getElementById('field_2_12').value;
   var field_2_16 = document.getElementById('field_2_16').value;
   var field_2_17 = document.getElementById('field_2_17').value;
   var field_3_1 = document.getElementById('field_3_1').value;
   var field_3_1_1 = document.getElementById('field_3_1_1').value;
   var field_3_2 = document.getElementById('field_3_2').value;
   var field_3_2_1 = document.getElementById('field_3_2_1').value;
   var field_3_3 = document.getElementById('field_3_3').value;
   var field_3_3_1 = document.getElementById('field_3_3_1').value;
   var field_3_4 = document.getElementById('field_3_4').value;
   var field_3_4_1 = document.getElementById('field_3_4_1').value;
   var field_3_5_1 = document.getElementById('field_3_5_1').value;
   var field_3_5_2 = document.getElementById('field_3_5_2').value;
   var field_3_5_3 = document.getElementById('field_3_5_3').value;
   var field_3_5_4 = document.getElementById('field_3_5_4').value;
   var field_4_1_1 = document.getElementById('field_4_1_1').value;
   var field_4_1_2 = document.getElementById('field_4_1_2').value;
   var field_4_1_3 = document.getElementById('field_4_1_3').value;
   var field_4_1_4 = document.getElementById('field_4_1_4').value;
   var field_4_1_5 = document.getElementById('field_4_1_5').value;
   var field_4_1_6 = document.getElementById('field_4_1_6').value;
   var field_4_1_7 = document.getElementById('field_4_1_7').value;
   var field_4_1_8 = document.getElementById('field_4_1_8').value;
   var field_4_1_9 = document.getElementById('field_4_1_9').value;
   var field_5_1 = document.getElementById('field_5_1').value;
   var field_5_2 = document.getElementById('field_5_2').value;
   var field_5_3 = document.getElementById('field_5_3').value;
   var field_5_4 = document.getElementById('field_5_4').value;
   var field_6_1_1 = document.getElementById('field_6_1_1').value;
   var field_6_1_2_date = document.getElementById('field_6_1_2').value;
   var field_6_1_3_date = document.getElementById('field_6_1_3').value;
   var field_6_1_2 = new Date( document.getElementById('field_6_1_2').value);
   var field_6_1_3 = new Date( document.getElementById('field_6_1_3').value);
   var field_6_1_4 = document.getElementById('field_6_1_4').value;
   var field_6_2_1 = document.getElementById('field_6_2_1').value;
   var field_6_2_2 = document.getElementById('field_6_2_2').value;
   var field_6_2_3 = document.getElementById('field_6_2_3').value;
   var field_8_1 = document.getElementById('field_8_1').value;
   var field_8_2_1 = document.getElementById('field_8_2_1').value;
   var field_8_2_2_date = document.getElementById('field_8_2_2').value;
   var field_8_2_3_date = document.getElementById('field_8_2_3').value;
   var field_8_2_2 = new Date( document.getElementById('field_8_2_2').value);
   var field_8_2_3 = new Date( document.getElementById('field_8_2_3').value);
   var field_8_2_4 = document.getElementById('field_8_2_4').value;
   var field_8_2_5 = document.getElementById('field_8_2_5').value;
   var field_10_1 = document.getElementById('field_10_1').value;
   var field_10_2 = document.getElementById('field_10_2').value;
   var field_10_3 = document.getElementById('field_10_3').value;
   var radio_30 = document.getElementById('radio-30');
   var radio_31 = document.getElementById('radio-31');
   var radio_32 = document.getElementById('radio-32');
   
   if(document.querySelector('input[name="p"]:checked') == null){
        document.getElementById('1.1 radio').innerHTML="1.1  please choose any one option for applying";
        is_valid=false;}
   else{document.getElementById('1.1 radio').innerHTML="";
        if(document.getElementById('radio-2').checked == true){

                if(field_6_1_1 == ""){
                document.getElementById('6.1_passport').innerHTML="6.1  please enter passport number , field can't be Empty";
                is_valid=false;}
                else if(field_6_1_1.length < 8 || field_6_1_1.length > 8){
                document.getElementById('6.1_passport').innerHTML="6.1  passport number : please Enter 8 digit number only";
                is_valid=false;}
                else if (!field_6_1_1.match(/^[0-9A-Za-z]*$/)) {
                document.getElementById('6.1_passport').innerHTML = "6.1  passport number : special characters are not allow";
                is_valid = false;}
                else if (!field_6_1_1.match(/^[0-9A-Z]*$/)) {
                document.getElementById('6.1_passport').innerHTML = "6.1  passport number : allow capital latters only";
                is_valid = false;}
                else if (field_6_1_1.match(/^[0-9]*$/)) {
                document.getElementById('6.1_passport').innerHTML = "6.1  passport number : only numericals are not allow";
                is_valid = false;}
                else if (field_6_1_1.match(/^[A-Z]*$/)) {
                document.getElementById('6.1_passport').innerHTML = "6.1  passport number : only alphabets are not allow";
                is_valid = false;}
                else{document.getElementById('6.1_passport').innerHTML="";}


                if(field_6_1_2_date == ""){
                document.getElementById('6.1_issue-date').innerHTML="6.1  please enter date of issue";
                is_valid=false;}
                else if(field_6_1_2 > Date.now()){
                document.getElementById('6.1_issue-date').innerHTML="6.1  issue date must be less than current date";
                is_valid=false;} 
                else{document.getElementById('6.1_issue-date').innerHTML="";}


                if(field_6_1_3_date == ""){
                document.getElementById('6.1_expiry-date').innerHTML="6.1  please enter date of expiry";
                is_valid=false;}
                else if(field_6_1_3 < field_6_1_2){
                document.getElementById('6.1_expiry-date').innerHTML="6.1  expiry date must be greater than issue date";
                is_valid=false;}
                else{document.getElementById('6.1_expiry-date').innerHTML="";}


                if(field_6_1_4 == ""){
                document.getElementById('6.1_place').innerHTML="6.1  please enter place of birth , field can't be Empty";
                is_valid=false;}
                else if (!field_6_1_4.match(/^[0-9A-Za-z]*$/)) {
                document.getElementById('6.1_place').innerHTML = "6.1  place of birth : special characters are not allow";
                is_valid = false;}
                else if (!field_6_1_4.match(/^[A-Za-z]*$/)) {
                document.getElementById('6.1_place').innerHTML = "6.1  place of birth : please enter alphabetic latters only";
                is_valid = false;}
                else{document.getElementById('6.1_place').innerHTML="";}


                if(document.querySelector('input[name="answer"]:checked') == null){
                    document.getElementById('6.2 radio').innerHTML="6.2  Have you ever applied for passport, but not issued? select yes or no.";
                    is_valid=false;}
                else{document.getElementById('6.2 radio').innerHTML="";
                    if(document.getElementById('radio-52').checked == true){
                        if(field_6_2_1 == ""){
                        document.getElementById('6.2_file-no').innerHTML="6.2  please enter file number , field can't be empty";
                        is_valid=false;}
                        else if(field_6_2_1.length < 12 || field_6_2_1.length > 12){
                        document.getElementById('6.2_file-no').innerHTML="6.2 file number: please Enter 12 digit number only";
                        is_valid=false;}
                        else if (!field_6_2_1.match(/^[0-9A-Za-z]*$/)) {
                        document.getElementById('6.2_file-no').innerHTML = "6.2 file number: special characters are not allowing";
                        is_valid = false;}
                        else if (!field_6_2_1.match(/^[0-9A-Z]*$/)) {
                        document.getElementById('6.2_file-no').innerHTML = "6.2 file number: allow capital latters only";
                        is_valid = false;}
                        else if (!field_6_2_1.match(/[A-Z][A-Z][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]/)) {
                        document.getElementById('6.2_file-no').innerHTML = "6.2 file number: first two digits must be starting from alphabet letters only";
                        is_valid = false;}
                        else{document.getElementById('6.2_file-no').innerHTML="";}


                        if(field_6_2_2 == ""){
                        document.getElementById('6.2_month').innerHTML="6.2  please select month and year of applying";
                        is_valid=false;}
                        else{document.getElementById('6.2_month').innerHTML="";}


                        if(field_6_2_3 == ""){
                        document.getElementById('6.2_name').innerHTML="6.2  please enter name , field can't be empty";
                        is_valid=false;}
                        else if (!field_6_2_3.match(/^[0-9A-Za-z\s]*$/)) {
                        document.getElementById('6.2_name').innerHTML = "6.2  name : special characters are not allow";
                        is_valid = false;}
                        else if (!field_6_2_3.match(/^[A-Za-z\s]*$/)) {
                        document.getElementById('6.2_name').innerHTML = "6.2  name : please enter alphabetic latters only";
                        is_valid = false;}
                        else{document.getElementById('6.2_name').innerHTML="";}
            
                        is_valid=false;}
                    else{document.getElementById('6.2_file-no').innerHTML="";
                        document.getElementById('6.2_month').innerHTML="";
                        document.getElementById('6.2_name').innerHTML="";}}

            if(document.querySelector('input[name="q"]:checked') == null){
                document.getElementById('1.2 radio').innerHTML="1.2  if re-issue of passport , please select any one option";
                is_valid=false;}
            else{document.getElementById('1.2 radio').innerHTML="";

                if(document.getElementById('radio-7').checked == true){
                    if(document.querySelector('input[name="cc--"]:checked') == null){
                        document.getElementById('1.3 checkbox--').innerHTML="1.3 if Change in Existing Personal Particulars , please specify atleast one reason";
                        is_valid=false;}
                    else{document.getElementById('1.3 checkbox--').innerHTML="";
                        if(document.getElementById('check-9').checked == true){
                            if(field_1_3 == ""){
                            document.getElementById('1.3_reason_box').innerHTML="1.3  If you select others , please specify the reason ";
                            is_valid=false;}
                            else if (!field_1_3.match(/^[0-9A-Za-z\s]*$/)) {
                            document.getElementById('1.3_reason_box').innerHTML = "1.3 reason : special characters are not allowed";
                            is_valid = false;}
                            else if (!field_1_3.match(/^[A-Za-z\s]*$/)) {
                            document.getElementById('1.3_reason_box').innerHTML = "1.3 reason : numerics are not allow. applicant name should contain alphabetic latters only";
                            is_valid = false;}
                            else{document.getElementById('1.3_reason_box').innerHTML="";}
                        is_valid=false;}
                        else{document.getElementById('1.3_reason_box').innerHTML="";}}
                is_valid=false;}
                else{document.getElementById('1.3 checkbox--').innerHTML="";}
                }
        is_valid=false;}
        else{document.getElementById('1.2 radio').innerHTML="";}}


    if(document.querySelector('input[name="o"]:checked') == null){
        document.getElementById('1.4 radio').innerHTML="1.4  please select type of application";
        is_valid=false;}
    else{document.getElementById('1.4 radio').innerHTML="";}


    if(document.querySelector('input[name="nn"]:checked') == null){
        document.getElementById('1.5 radio').innerHTML="1.5  please select Type of Passport Booklet";
        is_valid=false;}
    else{document.getElementById('1.5 radio').innerHTML="";}


    if(document.querySelector('input[name="mm"]:checked') == null){
        document.getElementById('1.6 radio').innerHTML="1.6  please select validity required";
        is_valid=false;}
    else{document.getElementById('1.6 radio').innerHTML="";}

    
    if(document.querySelector('input[name="kk"]:checked') == null){
        document.getElementById('2.2 radio').innerHTML="2.2  Are you known by any other names ? select yes or no";
        is_valid=false;}
    else{document.getElementById('2.2 radio').innerHTML="";}


    if(document.querySelector('input[name="ll"]:checked') == null){
        document.getElementById('2.3 radio').innerHTML="2.3  Have you ever changed your name ? select yes or no";
        is_valid=false;}
    else{document.getElementById('2.3 radio').innerHTML="";}


    if(document.querySelector('input[name="hh"]:checked') == null){
        document.getElementById('2.6 radio').innerHTML="2.6  please select gender";
        is_valid=false;}
    else{document.getElementById('2.6 radio').innerHTML="";}


    if(document.querySelector('input[name="ff"]:checked') == null){
        document.getElementById('2.7 radio').innerHTML="2.7  please select marital status";
        is_valid=false;}
    else{document.getElementById('2.7 radio').innerHTML="";}


    if(document.querySelector('input[name="gg"]:checked') == null){
        document.getElementById('2.8 radio').innerHTML="2.8  please select Citizenship of India";
        is_valid=false;}
    else{document.getElementById('2.8 radio').innerHTML="";}


    if(document.querySelector('input[name="bb"]:checked') == null){
        document.getElementById('2.13 radio').innerHTML="2.13  Is either of your parent (in case of minor)/ spouse, a government servant ? select yes or no";
        is_valid=false;}
    else{document.getElementById('2.13 radio').innerHTML="";}


    if(document.querySelector('input[name="cc"]:checked') == null){
        document.getElementById('2.14 radio').innerHTML="2.14  choose your Educational Qualification";
        is_valid=false;}
    else{document.getElementById('2.14 radio').innerHTML="";}


    if(document.querySelector('input[name="aa"]:checked') == null){
        document.getElementById('2.15 radio').innerHTML="2.15  Are you eligible for Non-ECR category? select yes or no.";
        is_valid=false;}
    else{document.getElementById('2.15 radio').innerHTML="";}


    if(document.querySelector('input[name="1"]:checked') == null){
        document.getElementById('7.1.1 radio').innerHTML="7.1.1 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.1.1 radio').innerHTML="";}


    if(document.querySelector('input[name="2"]:checked') == null){
        document.getElementById('7.1.2 radio').innerHTML="7.1.2 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.1.2 radio').innerHTML="";}


    if(document.querySelector('input[name="3"]:checked') == null){
        document.getElementById('7.1.3 radio').innerHTML="7.1.3 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.1.3 radio').innerHTML="";}


    if(document.querySelector('input[name="4"]:checked') == null){
        document.getElementById('7.1.4 radio').innerHTML="7.1.4 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.1.4 radio').innerHTML="";}


    if(document.querySelector('input[name="5"]:checked') == null){
        document.getElementById('7.2.1 radio').innerHTML="7.2.1 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.2.1 radio').innerHTML="";}


    if(document.querySelector('input[name="6"]:checked') == null){
        document.getElementById('7.3.1 radio').innerHTML="7.3.1 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.3.1 radio').innerHTML="";}


    if(document.querySelector('input[name="7"]:checked') == null){
        document.getElementById('7.3.2 radio').innerHTML="7.3.2 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.3.2 radio').innerHTML="";}
    
    
    if(document.querySelector('input[name="8"]:checked') == null){
        document.getElementById('7.3.3 radio').innerHTML="7.3.3 select yes or no.";
        is_valid=false;}
    else{document.getElementById('7.3.3 radio').innerHTML="";}


    if(a_field==""){
        document.getElementById('file_field').innerHTML="File number can't be Empty";
        is_valid=false; }
    else if(a_field.length < 12){
        document.getElementById('file_field').innerHTML="file number  : please Enter 12 digit number only";
        is_valid=false;}
    else if (!a_field.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('file_field').innerHTML = "file number  : special characters are not allowing";
        is_valid = false;}
    else if (!a_field.match(/^[0-9A-Z]*$/)) {
        document.getElementById('file_field').innerHTML = "file number  : allow capital latters only";
        is_valid = false;}
    else if (!a_field.match(/[A-Z][A-Z][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]/)) {
        document.getElementById('file_field').innerHTML = "file number  : first two digits must be starting from alphabet letters only";
        is_valid = false;}
    else if (!a_field.match(/[A-Z][A-Z][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9][2][2]/)) {
        document.getElementById('file_field').innerHTML = "file number  : last two digits must be same as issue date";
        is_valid = false;}
    else{document.getElementById('file_field').innerHTML="";}


    if(box_1 == ""){
        document.getElementById('photo_box').innerHTML="please select your photo";
        is_valid=false;}
    else{document.getElementById('photo_box').innerHTML=""; }


    if(box_2 == ""){
        document.getElementById('signature_box').innerHTML="1.3  please select photo of signature";
        is_valid=false; }
    else{document.getElementById('signature_box').innerHTML="";}


    if(field_2_1 == ""){
        document.getElementById('2.1_name').innerHTML="2.1  applicant name : field can't be Empty";
        is_valid=false; }
    else if (!field_2_1.match(/^[0-9A-Za-z\s]*$/)) {
        document.getElementById('2.1_name').innerHTML = "2.1  applicant name : special characters are not allowed";
        is_valid = false;}
    else if (!field_2_1.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('2.1_name').innerHTML = "2.1  applicant name : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('2.1_name').innerHTML="";}


    if(field_2_1_1 == ""){
        document.getElementById('2.1_surname').innerHTML="2.1  surname , field can't be Empty";
        is_valid=false;}
    else if (!field_2_1_1.match(/^[0-9A-Za-z\s]*$/)) {
        document.getElementById('2.1_surname').innerHTML = "2.1  surname : special characters are not allowed";
        is_valid = false;}
    else if (!field_2_1_1.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('2.1_surname').innerHTML = "2.1  surname : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('2.1_surname').innerHTML="";}
  

    if(field_2_4 == ""){
        document.getElementById('2.4_date').innerHTML="2.4  please enter Date of birth";
        is_valid=false;}
    else{document.getElementById('2.4_date').innerHTML="";}


    if(document.querySelector('input[name="hh--"]:checked') == null){
        document.getElementById('2.5 radio').innerHTML="2.5  please select place of birth";
        is_valid=false;}
    else{document.getElementById('2.5 radio').innerHTML="";

    if(document.getElementById('radio-india').checked == true){
        if(field_2_5 == ""){
        document.getElementById('2.5_place').innerHTML="2.5  please enter place of birth (Village or Town or City)";
        is_valid=false;}
        else if (!field_2_5.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('2.5_place').innerHTML = "2.5  birth place : special characters are not allowed";
        is_valid = false;}
        else if (!field_2_5.match(/^[A-Za-z]*$/)) {
        document.getElementById('2.5_place').innerHTML = "2.5  birth place : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
        else{
        if(field_2_5_1 == field_2_5){
        document.getElementById('2.5_same-name').innerHTML="2.5  village & district name must be diffrent"
        is_valid=false;}
        else if(field_2_5_2 == field_2_5){
        document.getElementById('2.5_same-name').innerHTML="2.5  village & state name must be diffrent"
        is_valid=false;}
        else{document.getElementById('2.5_same-name').innerHTML="";}
        document.getElementById('2.5_place').innerHTML="";}


        if(field_2_5_1 == ""){
        document.getElementById('2.5_district').innerHTML="2.5  please enter District (India)";
        is_valid=false;}
        else if (!field_2_5_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('2.5_district').innerHTML = "2.5  District : special characters are not allowed";
        is_valid = false;}
        else if (!field_2_5_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('2.5_district').innerHTML = "2.5  District : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
        else{
        if(field_2_5_1 == field_2_5_2){
        document.getElementById('2.5_same-name').innerHTML="2.5  district & state name must be diffrent"
        is_valid=false;}
        else if(field_2_5_1 == field_2_5){
        document.getElementById('2.5_same-name').innerHTML="2.5  district & village name must be diffrent"
        is_valid=false;}
        else{document.getElementById('2.5_same-name').innerHTML="";}
         document.getElementById('2.5_district').innerHTML="";}


        if(field_2_5_2 == ""){
        document.getElementById('2.5_state').innerHTML="2.5  please enter state (india)";
        is_valid=false;}
        else if (!field_2_5_2.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('2.5_state').innerHTML = "2.5  state : special characters are not allowed";
        is_valid = false;}
        else if (!field_2_5_2.match(/^[A-Za-z]*$/)) {
        document.getElementById('2.5_state').innerHTML = "2.5  state : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
        else{
        if(field_2_5_1 == field_2_5_2){
        document.getElementById('2.5_same-name').innerHTML="2.5  district & state name must be diffrent"
        is_valid=false;}
        else if(field_2_5_2 == field_2_5){
        document.getElementById('2.5_same-name').innerHTML="2.5  state & village name must be diffrent"
        is_valid=false;}
        else{document.getElementById('2.5_same-name').innerHTML="";}
        document.getElementById('2.5_state').innerHTML="";}


        if(!field_2_5_1 == ""){
        if(field_2_5_1 == field_2_5 && field_2_5_2 == field_2_5 && field_2_5_1 == field_2_5_2){
        document.getElementById('2.5_same-name--').innerHTML="2.5  village , district & state name must be diffrent"
        is_valid=false;}
        else{document.getElementById('2.5_same-name--').innerHTML="";}
        is_valid=false;}
        else{document.getElementById('2.5_same-name--').innerHTML="";}}

    else{
        document.getElementById('2.5_district').innerHTML="";
        document.getElementById('2.5_place').innerHTML="";
        document.getElementById('2.5_same-name--').innerHTML="";
        document.getElementById('2.5_state').innerHTML="";}

    if(document.getElementById('radio-outside').checked == true){
        if(field_2_5_3 == ""){
        document.getElementById('2.5_country').innerHTML="2.5  please enter country (if born in USA)";
        is_valid=false;}
        else if (!field_2_5_3.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('2.5_country').innerHTML = "2.5  country : special characters are not allowed";
        is_valid = false;}
        else if (!field_2_5_3.match(/^[A-Za-z]*$/)) {
        document.getElementById('2.5_country').innerHTML = "2.5  country : numerics are not allow. applicant name should contain alphabetic latters only";
        is_valid = false;}
        else{document.getElementById('2.5_country').innerHTML="";}
    is_valid=false;}
    else{document.getElementById('2.5_country').innerHTML="";}}


    if(field_2_9==""){
        document.getElementById('pan-card').innerHTML="2.9  please enter pan-card number";
        is_valid=false; }
    else if(field_2_9.length < 10){
        document.getElementById('pan-card').innerHTML="2.9  pan-card : please Enter 10 digit number only";
        is_valid=false;}
    else if (!field_2_9.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('pan-card').innerHTML = "2.9  pan-card : special characters are not allowed";
        is_valid = false;}
    else if (!field_2_9.match(/^[A-Z0-9]*$/)) {
        document.getElementById('pan-card').innerHTML = "2.9  pan-card : lowecase are not allow. voter-id should contain alphabetic latters and numeric only";
        is_valid = false;}
    else{document.getElementById('pan-card').innerHTML="";}


    if(field_2_10==""){
        document.getElementById('voter-id').innerHTML="2.10  please enter voter-id";
        is_valid=false; }
    else if(field_2_10.length < 10){
        document.getElementById('voter-id').innerHTML="2.10  voter-id : please Enter 10 digit number only";
        is_valid=false;}
    else if (!field_2_10.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('voter-id').innerHTML = "2.10  voter-id : special characters are not allowed";
        is_valid = false;}
    else if (!field_2_10.match(/^[A-Z0-9]*$/)) {
        document.getElementById('voter-id').innerHTML = "2.10  voter-id : lowecase are not allow. voter-id should contain alphabetic latters and numeric only";
        is_valid = false;}
    else{document.getElementById('voter-id').innerHTML="";}


    if(document.querySelector('input[name="ee"]:checked') == null){
        document.getElementById('2.11 radio').innerHTML="2.11  please select Employement type";
        is_valid=false;}
    else{document.getElementById('2.11 radio').innerHTML="";
        if(radio_30.checked == true || radio_31.checked == true || radio_32.checked == true){
            if(field_2_12 == ""){
            document.getElementById('2.12_organization').innerHTML="2.12  please enter organization name , field can't be Empty";
            is_valid=false;}
            else if(field_2_12.length > 60){
            document.getElementById('2.12_organization').innerHTML="2.12  organization name : length limit is must be less than 60 latters";
            is_valid=false;}
            else if (!field_2_12.match(/^[0-9A-Za-z\s]*$/)) {
            document.getElementById('2.12_organization').innerHTML = "2.12  organization name : special characters are not allowed";
            is_valid = false;}
            else if (!field_2_12.match(/^[A-Za-z\s]*$/)) {
            document.getElementById('2.12_organization').innerHTML = "2.12  organization name : should contain alphabetic latters only";
            is_valid = false;}
            else{document.getElementById('2.12_organization').innerHTML="";}
        is_valid=false;}
        else{document.getElementById('2.12_organization').innerHTML="";}}


    if(field_2_16 == ""){
        document.getElementById('2.16_visible_mark').innerHTML="2.16  visible mark : please select any one option";
        is_valid=false;}
    else{document.getElementById('2.16_visible_mark').innerHTML="";}


    if(field_2_17 == ""){
        document.getElementById('aadharcard-no').innerHTML="2.17  field can't be Empty";
        is_valid=false;}
    else if(field_2_17.length < 12){
        document.getElementById('aadharcard-no').innerHTML="2.17  Aadharcard-number : please Enter 12 digit number only";
        is_valid=false;}
    else if (!field_2_17.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)) {
        document.getElementById('aadharcard-no').innerHTML = "2.17  Aadhar-card : please Enter numeric value only";
        is_valid = false;}
    else{document.getElementById('aadharcard-no').innerHTML="";}


    if(field_3_1 == ""){
        document.getElementById('3.1_father').innerHTML="3.1  father name : field can't be Empty";
        is_valid=false;}
    else if(field_3_1.length > 500){
        document.getElementById('3.1_father').innerHTML="3.1  father name : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.1_father').innerHTML = "3.1  father name : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.1_father').innerHTML = "3.1  father name : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.1_father').innerHTML="";}


    if(field_3_1_1 == ""){
        document.getElementById('3.1_surname').innerHTML="3.1  surname : field can't be Empty";
        is_valid=false;}
    else if(field_3_1_1.length > 500){
        document.getElementById('3.1_surname').innerHTML="3.1  surname : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_1_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.1_surname').innerHTML = "3.1  surname : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_1_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.1_surname').innerHTML = "3.1  surname : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.1_surname').innerHTML="";}


    if(field_3_2 == ""){
        document.getElementById('3.2_mother').innerHTML="3.2  mother name : field can't be Empty";
        is_valid=false;}
    else if(field_3_2.length > 500){
        document.getElementById('3.2_mother').innerHTML="3.2  mother name : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_2.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.2_mother').innerHTML = "3.2  mother name : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_2.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.2_mother').innerHTML = "3.2  mother name : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.2_mother').innerHTML="";}


    if(field_3_2_1 == ""){
        document.getElementById('3.2_surname').innerHTML="3.2  surname : field can't be Empty";
        is_valid=false;}
    else if(field_3_2_1.length > 500){
        document.getElementById('3.2_surname').innerHTML="3.2  surname : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_2_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.2_surname').innerHTML = "3.2  surname : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_2_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.2_surname').innerHTML = "3.2  surname : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.2_surname').innerHTML="";}


    if(field_3_3 == ""){
        document.getElementById('3.3_Guardian').innerHTML="3.3  Gaurdian-name : field can't be Empty";
        is_valid=false;}
    else if(field_3_3.length > 500){
        document.getElementById('3.3_Guardian').innerHTML="3.3  Gaurdian-name : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_3.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.3_Guardian').innerHTML = "3.3  Gaurdian-name : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_3.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.3_Guardian').innerHTML = "3.3  Gaurdian-name : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.3_Guardian').innerHTML="";}


    if(field_3_3_1 == ""){
        document.getElementById('3.3_surname').innerHTML="3.3  surname : field can't be Empty";
        is_valid=false;}
    else if(field_3_3_1.length > 500){
        document.getElementById('3.3_surname').innerHTML="3.3  surname : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_3_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.3_surname').innerHTML = "3.3  surname : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_3_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.3_surname').innerHTML = "3.3  surname : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.3_surname').innerHTML="";}


    if(field_3_4 == ""){
        document.getElementById('3.4_spouse').innerHTML="3.4  spouse-name : field can't be Empty";
        is_valid=false;}
    else if(field_3_4.length > 500){
        document.getElementById('3.4_spouse').innerHTML="3.4  spouse-name : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_4.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.4_spouse').innerHTML = "3.4  spouse-name : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_4.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.4_spouse').innerHTML = "3.4  spouse-name : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.4_spouse').innerHTML="";}


    if(field_3_4_1 == ""){
        document.getElementById('3.4_surname').innerHTML="3.4  surname : field can't be Empty";
        is_valid=false;}
        else if(field_3_4_1.length > 500){
        document.getElementById('3.4_surname').innerHTML="3.4  surname : length limit is upto 500 latters only";
        is_valid=false;}
    else if (!field_3_4_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.4_surname').innerHTML = "3.4  surname : special characters are not allowed";
        is_valid = false;}
    else if (!field_3_4_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.4_surname').innerHTML = "3.4  surname : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('3.4_surname').innerHTML="";}

  
if(document.querySelector('input[name="file-pass"]:checked') == null){
        document.getElementById('3.5 radio').innerHTML="3.5  please select file number or passport number";
        is_valid=false;}
else{document.getElementById('3.5 radio').innerHTML="";

if(document.getElementById('radio-passno').checked == true){

    if(field_3_5_1 == ""){
        document.getElementById('3.5_father_pass').innerHTML="3.5  father passport number field can't be empty ";
        is_valid=false; }
    else if(field_3_5_1.length < 8 || field_3_5_1.length > 8){
        document.getElementById('3.5_father_pass').innerHTML="3.5  father passport number: please Enter 8 digit number only";
        is_valid=false;}
    else if (!field_3_5_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.5_father_pass').innerHTML = "3.5  father passport number: special characters are not allow";
        is_valid = false;}
    else if (!field_3_5_1.match(/^[0-9A-Z]*$/)) {
        document.getElementById('3.5_father_pass').innerHTML = "3.5  father passport number: allow capital latters only";
        is_valid = false;}
    else if (field_3_5_1.match(/^[0-9]*$/)) {
        document.getElementById('3.5_father_pass').innerHTML = "3.5  father passport number: only numerical are not allow";
        is_valid = false;}
    else if (field_3_5_1.match(/^[A-Za-z]*$/)) {
        document.getElementById('3.5_father_pass').innerHTML = "3.5  father passport number: only alphabets are not allow";
        is_valid = false;}
    else{document.getElementById('3.5_father_pass').innerHTML="";}


    if(field_3_5_3 == ""){
        document.getElementById('3.5_mother_pass').innerHTML="3.5  mother passport number field can't be empty ";
        is_valid=false; }
    else if(field_3_5_3.length < 8 || field_3_5_3.length > 8){
        document.getElementById('3.5_mother_pass').innerHTML="3.5  mother passport number: please Enter 8 digit number only";
        is_valid=false;}
    else if (!field_3_5_3.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.5_mother_pass').innerHTML = "3.5  mother passport number: special characters are not allow";
        is_valid = false;}
    else if (!field_3_5_3.match(/^[0-9A-Z]*$/)) {
        document.getElementById('3.5_mother_pass').innerHTML = "3.5  mother passport number: allow capital latters only";
        is_valid = false;}
    else if (field_3_5_3.match(/^[0-9]*$/)) {
        document.getElementById('3.5_mother_pass').innerHTML = "3.5  mother passport number: only numerical are not allow";
        is_valid = false;}
    else if (field_3_5_3.match(/^[A-Z]*$/)) {
        document.getElementById('3.5_mother_pass').innerHTML = "3.5  mother passport number: only alphabets are not allow";
        is_valid = false;}
    else{document.getElementById('3.5_mother_pass').innerHTML="";}
    is_valid=false;}

else{document.getElementById('3.5_father_pass').innerHTML="";
    document.getElementById('3.5_mother_pass').innerHTML="";}

if(document.getElementById('radio-fileno').checked == true){

    if(field_3_5_1 == ""){
        document.getElementById('3.5_father_file').innerHTML="3.5  father file number field can't be empty ";
        is_valid=false; }
    else if(field_3_5_1.length < 12 || field_3_5_1.length > 12){
        document.getElementById('3.5_father_file').innerHTML="3.5  father file number: please Enter 12 digit number only";
        is_valid=false;}
    else if (!field_3_5_1.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.5_father_file').innerHTML = "3.5  father file number: special characters are not allowing";
        is_valid = false;}
    else if (!field_3_5_1.match(/^[0-9A-Z]*$/)) {
        document.getElementById('3.5_father_file').innerHTML = "3.5  father file number: allow capital latters only";
        is_valid = false;}
    else if (!field_3_5_1.match(/[A-Za-z][A-Za-z][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/)) {
        document.getElementById('3.5_father_file').innerHTML = "3.5  father file number: first two digits must be starting from alphabet letters only";
        is_valid = false;}
    
    else{document.getElementById('3.5_father_file').innerHTML="";}


    if(field_3_5_3 == ""){
        document.getElementById('3.5_mother_file').innerHTML="3.5  mother file number field can't be empty ";
        is_valid=false; }
    else if(field_3_5_3.length < 12 || field_3_5_3.length > 12){
        document.getElementById('3.5_mother_file').innerHTML="3.5  mother file number: please Enter 12 digit number only";
        is_valid=false;}
    else if (!field_3_5_3.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('3.5_mother_file').innerHTML = "3.5  mother file number: special characters are not allowing";
        is_valid = false;}
    else if (!field_3_5_3.match(/^[0-9A-Z]*$/)) {
        document.getElementById('3.5_mother_file').innerHTML = "3.5  mother file number: allow capital latters only";
        is_valid = false;}
    else if (!field_3_5_3.match(/[A-Za-z][A-Za-z][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/)) {
        document.getElementById('3.5_mother_file').innerHTML = "3.5  mother file number: first two digits must be starting from alphabet letters only";
        is_valid = false;}
    
    else{document.getElementById('3.5_mother_file').innerHTML="";}
    is_valid=false;}

else{document.getElementById('3.5_father_file').innerHTML="";
    document.getElementById('3.5_mother_file').innerHTML="";}}


    if(field_4_1_1 == ""){
        document.getElementById('4.1_house').innerHTML="4.1  please enter house-no and street name , field can't be Empty";
        is_valid=false;}
    else if(field_4_1_1.length < 10){
        document.getElementById('4.1_house').innerHTML="4.1  house-no & street name : atleast 10 characters are required";
        is_valid=false;}
    else if (!field_4_1_1.match(/^[.,-:/0-9A-Za-z\s]*$/)) {
        document.getElementById('4.1_house').innerHTML = "4.1  house-no & street name : some special characters are not allowed";
        is_valid = false;}
    else{document.getElementById('4.1_house').innerHTML="";}


    if(field_4_1_2 == ""){
        document.getElementById('4.1_village').innerHTML="4.1  please enter village or town or city name , field can't be Empty";
        is_valid=false;}
    else if (!field_4_1_2.match(/^[A-Za-z]*$/)) {
        document.getElementById('4.1_village').innerHTML = "4.1  village : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('4.1_village').innerHTML="";}


    if(field_4_1_3 == ""){
        document.getElementById('4.1_district').innerHTML="4.1  please enter district name , field can't be Empty";
        is_valid=false;}
    else if (!field_4_1_3.match(/^[A-Za-z]*$/)) {
        document.getElementById('4.1_district').innerHTML = "4.1  district : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('4.1_district').innerHTML="";}


    if(field_4_1_4 == ""){
        document.getElementById('4.1_police_station').innerHTML="4.1  please enter police station name , field can't be Empty";
        is_valid=false;}
    else if (!field_4_1_4.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('4.1_police_station').innerHTML = "4.1  police station : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('4.1_police_station').innerHTML="";}


    if(field_4_1_5 == ""){
        document.getElementById('4.1_state').innerHTML="4.1  please enter your state name , field can't be Empty";
        is_valid=false;}
    else if (!field_4_1_5.match(/^[A-Za-z]*$/)) {
        document.getElementById('4.1_state').innerHTML = "4.1  state : should contain alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('4.1_state').innerHTML="";}


    if(field_4_1_6 == ""){
        document.getElementById('4.1_pin').innerHTML="4.1  please enter pincode number , field can't be Empty";
        is_valid=false;}
    else if(field_4_1_6.length < 6 || field_4_1_6.length > 6){
        document.getElementById('4.1_pin').innerHTML="4.1  pincode : please Enter 6 digit number only";
        is_valid=false;}
    else if (!field_4_1_6.match(/[0-9][0-9][0-9][0-9][0-9][0-9]/)) {
        document.getElementById('4.1_pin').innerHTML = "4.1  pincode : please Enter numeric value only";
        is_valid = false;}    
    else{document.getElementById('4.1_pin').innerHTML="";}


    if(field_4_1_7 == ""){
        document.getElementById('4.1_mobile').innerHTML="4.1  please enter mobile number , field can't be Empty";
        is_valid=false;}
    else if(field_4_1_7.length < 10){
        document.getElementById('4.1_mobile').innerHTML="4.1  mobile number : please Enter 10 digit number only";
        is_valid=false;}
    else if (!field_4_1_7.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('4.1_mobile').innerHTML = "4.1  mobile number : special characters are not allow";
        is_valid = false;}
    else if (!field_4_1_7.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)) {
        document.getElementById('4.1_mobile').innerHTML = "4.1  mobile number : please Enter numeric value only";
        is_valid = false;}
    else{document.getElementById('4.1_mobile').innerHTML="";}


    if(field_4_1_8 == ""){
        document.getElementById('4.1_telephone').innerHTML="4.1  please enter telephone number , field can't be Empty";
        is_valid=false;}
    else if(field_4_1_8.length < 10){
        document.getElementById('4.1_telephone').innerHTML="4.1  telephone number : please Enter 10 digit number only";
        is_valid=false;}
    else if (!field_4_1_8.match(/^[0-9A-Za-z]*$/)) {
        document.getElementById('4.1_telephone').innerHTML = "4.1  telephone number : special characters are not allow";
        is_valid = false;}
    else if (!field_4_1_8.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)) {
        document.getElementById('4.1_telephone').innerHTML = "4.1  telephone number : please Enter numeric value only";
        is_valid = false;}
    else{document.getElementById('4.1_telephone').innerHTML="";}


    if(field_4_1_9 == ""){
        document.getElementById('4.1_email').innerHTML="4.1  please enter email-id , field can't be Empty";
        is_valid=false;}
    else if(!field_4_1_9.match(/^[@.a-zA-Z0-9]*$/)){
        document.getElementById('4.1_email').innerHTML = "4.1  email-id : special characters are not allow (except . and @)";
        is_valid = false;}
    else if(field_4_1_9.match(/^[a-z0-9]+(\.[a-z0-9]+)*$/)){
        document.getElementById('4.1_email').innerHTML = "4.1  email-id : must enter @";
        is_valid = false;}
    else if(!field_4_1_9.match(/^[a-z0-9]+@[a-z0-9]+(\.[a-z0-9.]+)*$/)){
        document.getElementById('4.1_email').innerHTML = "4.1  email-id : invalid format";
        is_valid = false;}
    else{document.getElementById('4.1_email').innerHTML="";}


    if(document.querySelector('input[name="ab"]:checked') == null){
        document.getElementById('4.2 radio').innerHTML="4.2  Is permanent address same as present address? select yes or no.";
        is_valid=false;}
    else{document.getElementById('4.2 radio').innerHTML="";
        if(document.getElementById('radio-51').checked == true){

            if(field_5_1 == ""){
            document.getElementById('5.1_name_address').innerHTML="5  please enter name and address , field can't be Empty";
            is_valid=false;}
            else if (!field_5_1.match(/^[.,-:/0-9A-Za-z\s]*$/)) {
            document.getElementById('5.1_name_address').innerHTML = "5  name & address : some special characters are not allowed";
            is_valid = false;}
            else{document.getElementById('5.1_name_address').innerHTML="";}


            if(field_5_2 == ""){
            document.getElementById('5.2_mobile').innerHTML="5  please enter mobile number , field can't be Empty";
            is_valid=false;}
            else if(field_5_2.length < 10){
            document.getElementById('5.2_mobile').innerHTML="5  mobile number : please Enter 10 digit number only";
            is_valid=false;}
            else if (!field_5_2.match(/^[0-9A-Za-z]*$/)) {
            document.getElementById('5.2_mobile').innerHTML = "5  mobile number : special characters are not allow";
            is_valid = false;}
            else if(!field_5_2.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)) {
            document.getElementById('5.2_mobile').innerHTML = "5  mobile number : please Enter numeric value only";
            is_valid = false;}
            else{document.getElementById('5.2_mobile').innerHTML="";}


            if(field_5_3 == ""){
            document.getElementById('5.3_telephone').innerHTML="5  please enter telephone number , field can't be Empty";
            is_valid=false;}
            else if(field_5_3.length < 10){
            document.getElementById('5.3_telephone').innerHTML="5  telephone number : please Enter 10 digit number only";
            is_valid=false;}
            else if (!field_5_3.match(/^[0-9A-Za-z]*$/)) {
            document.getElementById('5.3_telephone').innerHTML = "5  telephone number : special characters are not allow";
            is_valid = false;}
            else if (!field_5_3.match(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)) {
            document.getElementById('5.3_telephone').innerHTML = "5  telephone number : please Enter numeric value only";
            is_valid = false;}
            else{document.getElementById('5.3_telephone').innerHTML="";}


            if(field_5_4 == ""){
            document.getElementById('5.4_email').innerHTML="5 please enter email-id , field can't be Empty";
            is_valid=false;}
            else if(!field_5_4.match(/^[@.a-zA-Z0-9]*$/)){
            document.getElementById('5.4_email').innerHTML = "5  email-id : special characters are not allow (except . and @)";
            is_valid = false;}
            else if(field_5_4.match(/^[a-z0-9]+(\.[a-z0-9]+)*$/)){
            document.getElementById('5.4_email').innerHTML = "5  email-id : must enter @";
            is_valid = false;}
            else if(!field_5_4.match(/^[a-z0-9]+@[a-z0-9]+(\.[a-z0-9.]+)*$/)){
            document.getElementById('5.4_email').innerHTML = "5  email-id : invalid format";
            is_valid = false;}
            else{document.getElementById('5.4_email').innerHTML="";}

        is_valid=false;}
        else{document.getElementById('5.1_name_address').innerHTML="";
        document.getElementById('5.2_mobile').innerHTML="";
        document.getElementById('5.3_telephone').innerHTML="";
        document.getElementById('5.4_email').innerHTML="";}}

    
    if(field_8_1 == ""){
        document.getElementById('8.1_fee').innerHTML="8.1  please enter fee , field can't be Empty";
        is_valid=false;}
    else if (!field_8_1.match(/^[0-9.]*$/)) {
        document.getElementById('8.1_fee').innerHTML = "8.1  fee : only numbers with decimal or numbers only are allow";
        is_valid = false;}
    else{document.getElementById('8.1_fee').innerHTML="";}


    if(field_8_2_1 == ""){
        document.getElementById('DD_number').innerHTML="8.2  please enter DD number , field can't be empty";
        is_valid=false;}
    else if (field_8_2_1.match(/^[.]*$/)) {
        document.getElementById('DD_number').innerHTML = "8.2  DD number : decimal are not allow";
        is_valid = false;}    
    else if (!field_8_2_1.match(/^[0-9]*$/)) {
        document.getElementById('DD_number').innerHTML = "8.2  DD number : please enter numerical only";
        is_valid = false;}
    else{document.getElementById('DD_number').innerHTML="";}


    if(field_8_2_2_date == ""){
        document.getElementById('DD_issue-date').innerHTML="8.2  please enter date of issue";
        is_valid=false;}
    else if(field_8_2_2 > Date.now()){
        document.getElementById('DD_issue-date').innerHTML="8.2  issue date must be less than current date";
        is_valid=false;} 
    else{document.getElementById('DD_issue-date').innerHTML="";}


    if(field_8_2_3_date == ""){
        document.getElementById('DD_expiry-date').innerHTML="8.2  please enter date of expiry";
        is_valid=false;}
    else if(field_8_2_3 < field_8_2_2){
        document.getElementById('DD_expiry-date').innerHTML="8.2  expiry date must be greater than issue date";
        is_valid=false;}
    else{document.getElementById('DD_expiry-date').innerHTML="";}
    

    
    if(field_8_2_4 == ""){
        document.getElementById('8.2_bank').innerHTML="8.2  please enter bank name , field can't be empty";
        is_valid=false;}
    else if (!field_8_2_4.match(/^[0-9A-Za-z\s]*$/)) {
        document.getElementById('8.2_bank').innerHTML = "8.2 bank name : special characters are not allow";
        is_valid = false;}
    else if (!field_8_2_4.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('8.2_bank').innerHTML = "8.2 bank name : please enter alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('8.2_bank').innerHTML="";}


    if(field_8_2_5 == ""){
        document.getElementById('8.2_branch').innerHTML="8.2  please enter branch name  , field can't be empty";
        is_valid=false;}
    else if (!field_8_2_5.match(/^[0-9A-Za-z\s]*$/)) {
        document.getElementById('8.2_branch').innerHTML = "8.2 branch : special characters are not allow";
        is_valid = false;}
    else if (!field_8_2_5.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('8.2_branch').innerHTML = "8.2 branch : please enter alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('8.2_branch').innerHTML="";}


    if(field_10_1 == ""){
        document.getElementById('10_place').innerHTML="10.  please enter place , field can't be empty";
        is_valid=false;}
    else if (!field_10_1.match(/^[0-9A-Za-z\s]*$/)) {
        document.getElementById('10_place').innerHTML = "10.  place : special characters are not allow";
        is_valid = false;}
    else if (!field_10_1.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('10_place').innerHTML = "10.  place : please enter alphabetic latters only";
        is_valid = false;}
    else{document.getElementById('10_place').innerHTML="";}


    if(field_10_2 == ""){
        document.getElementById('10_sign').innerHTML="10.  please select photo of signature";
        is_valid=false;}
    else{document.getElementById('10_sign').innerHTML="";}


    if(field_10_3 == ""){
        document.getElementById('10_date').innerHTML="10.  please select date , field can't be empty";
        is_valid=false;}
    else{document.getElementById('10_date').innerHTML="";}

    return is_valid;
}