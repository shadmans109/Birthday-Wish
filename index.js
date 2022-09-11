
document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
   var names =  document.getElementById("name").value;
   var dates = document.getElementById("date").value;
   
   var day = new Date(dates);
   
   
   var today = new Date();
   
   
   
   if(day.getDay()== today.getDay() && day.getMonth() == today.getMonth() ){
      return alert("Happy Birthday! " + names)
   } else {
      return alert("Have to a good day!")
   }  
}
  
//a simple date formatting function
// function dateFormat(inputDate, format) {
//    //parse the input date
//    const date = new Date(inputDate);

//    //extract the parts of the date
//    const day = date.getDate();
//    const month = date.getMonth() + 1;
      

//    //replace the month
//    format = format.replace("MM", month.toString().padStart(2,"0"));        

   
//    //replace the day
//    format = format.replace("dd", day.toString().padStart(2,"0"));

//    return format;
// }

