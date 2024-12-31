function calculate()
{
    let year;
    let month;
    let date;
  let cyear=parseInt(cd.value.slice(0,4),10);
   let cmonth=parseInt(cd.value.slice(5,7),10);
    let cdate=parseInt(cd.value.slice(8,10),10);
    console.log('current date:-',cyear,cmonth,cdate);
    let pvyear=parseInt(dob.value.slice(0,4),10);
    let pvmonth=parseInt(dob.value.slice(5,7),10);
    let pvdate=parseInt(dob.value.slice(8,10),10);
    console.log('dob:-',pvyear,pvmonth,pvdate);
    if(cdate>=pvdate)
    {
        date=cdate-pvdate;
    }
    else
    {
        date=cdate+new Date(cyear,cmonth,0).getDate()-pvdate;
        cmonth--;
    }
    if(cmonth>=pvmonth)
    {
        month=cmonth-pvmonth;

    }
    else
    {
        month=cmonth+12-pvmonth;
        cyear--;
    }
    year=cyear-pvyear;
    if(year<0)
    {
        ageText.innerHTML="kya mazak kr rhe ho,sahi date dalo";
    }
    else{
      ageText.innerHTML=year+"years,"+month+"months,"+date+"days";
}
}
